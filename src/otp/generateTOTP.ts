import { createHmac } from "crypto";
import { base32ToBuffer, base64ToBuffer } from "../utils/base32ToBuffer";

interface GenerateTOTPOptions {
  secret: string;
  encoding?: "base32" | "base64";
  timeStep?: number;
  digits?: number;
  algorithm?: "sha1" | "sha256" | "sha512";
}

/**
 * Generates a Time-based One-Time Password (TOTP) based on the provided secret and options.
 *
 * @param {Object} options - The options for generating the TOTP.
 * @param {string} options.secret - The shared secret key used for generating the TOTP.
 * @param {string} [options.encoding='base32'] - The encoding of the secret ('base32' or 'base64').
 * @param {number} [options.timeStep=30] - The time step in seconds (default is 30 seconds).
 * @param {number} [options.digits=6] - The number of digits in the generated TOTP (default is 6 digits).
 * @param {string} [options.algorithm='sha1'] - The HMAC hashing algorithm to use (default is 'sha1').
 * @returns {string} The generated TOTP as a string.
 *
 * @throws {Error} If the secret contains invalid characters.
 */
export const generateTOTP = ({
  secret,
  encoding = "base32",
  timeStep = 30,
  digits = 6,
  algorithm = "sha1",
}: GenerateTOTPOptions): string => {
  const epoch = Math.floor(Date.now() / 1000);
  let timeCounter = Math.floor(epoch / timeStep);
  const timeBuffer = Buffer.alloc(8);

  // Convert time counter to buffer
  for (let i = 7; i >= 0; i--) {
    timeBuffer[i] = timeCounter & 0xff;
    timeCounter >>= 8;
  }

  // Clean and validate the secret
  let secretBuffer: Buffer;
  if (encoding === "base32") {
    const cleanedSecret = secret.replace(/=+$/, "").toUpperCase();
    if (!/^[A-Z2-7]+$/.test(cleanedSecret)) {
      throw new Error("Invalid base32 character in secret");
    }
    secretBuffer = base32ToBuffer(cleanedSecret);
  } else if (encoding === "base64") {
    const cleanedSecret = secret.replace(/=+$/, "");
    if (!/^[A-Za-z0-9+/]+$/.test(cleanedSecret)) {
      throw new Error("Invalid base64 character in secret");
    }
    secretBuffer = base64ToBuffer(cleanedSecret);
  } else {
    throw new Error("Unsupported encoding type");
  }

  // Create HMAC using the secret and time buffer
  const hmac = createHmac(algorithm, secretBuffer);
  hmac.update(timeBuffer);
  const hmacResult = hmac.digest();

  // Calculate the offset and generate the TOTP code
  const offset = hmacResult[hmacResult.length - 1] & 0xf;
  const code =
    (hmacResult.readUInt32BE(offset) & 0x7fffffff) % Math.pow(10, digits);

  // Return the TOTP code as a zero-padded string
  return code.toString().padStart(digits, "0");
};
