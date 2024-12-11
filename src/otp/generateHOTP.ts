import { createHmac } from "crypto";
import {
  base32ToBuffer,
  base64ToBuffer,
  hexToBuffer,
  asciiToBuffer,
} from "../utils/stringToBuffer";

/**
 * Generates a HMAC-based One-Time Password (HOTP).
 *
 * @param secret - The encoded secret key used for HMAC generation.
 * @param counter - The counter value, which is typically incremented with each new OTP.
 * @param digits - The number of digits for the OTP (default is 6).
 * @param encoding - The encoding type of the secret key (default is "base32").
 * @param algorithm - The hashing algorithm to use (default is "sha1").
 * @returns The generated OTP as a string of the specified number of digits.
 */
interface HOTPOptions {
  secret: string;
  counter: number;
  digits?: number;
  encoding?: "base32" | "base64" | "hex" | "ascii";
  algorithm?: "sha1" | "sha256" | "sha384" | "sha512";
}

/**
 * Generates a HOTP (HMAC-based One-Time Password) based on the provided options.
 *
 * @param {HOTPOptions} options - The options for generating the HOTP.
 * @param {string} options.secret - The shared secret key used for generating the HOTP.
 * @param {number} options.counter - The counter value, which is typically incremented with each HOTP generation.
 * @param {number} [options.digits=6] - The number of digits in the generated HOTP. Defaults to 6.
 * @param {string} [options.encoding="base32"] - The encoding of the secret key. Can be "base32", "base64", "hex", or "ascii". Defaults to "base32".
 * @param {string} [options.algorithm="sha1"] - The hashing algorithm to use. Defaults to "sha1".
 * @returns {string} The generated HOTP as a zero-padded string.
 * @throws {Error} If the secret contains invalid characters for the specified encoding.
 * @throws {Error} If an unsupported encoding type is specified.
 */
export function generateHOTP({
  secret,
  counter,
  digits = 6,
  encoding = "base32",
  algorithm = "sha1",
}: HOTPOptions): string {
  // Validate the secret and convert to buffer
  let decodedSecret: Buffer;
  const cleanedSecret = secret.replace(/\s+/g, ""); // Remove any whitespace from the secret

  switch (encoding) {
    case "base32":
      if (!/^[A-Z2-7]+=*$/.test(cleanedSecret)) {
        throw new Error("Invalid base32 character in secret");
      }
      decodedSecret = base32ToBuffer(cleanedSecret);
      break;
    case "base64":
      if (!/^[A-Za-z0-9+/]+=*$/.test(cleanedSecret)) {
        throw new Error("Invalid base64 character in secret");
      }
      decodedSecret = base64ToBuffer(cleanedSecret);
      break;
    case "hex":
      if (!/^[A-Fa-f0-9]+$/.test(cleanedSecret)) {
        throw new Error("Invalid hex character in secret");
      }
      decodedSecret = hexToBuffer(cleanedSecret);
      break;
    case "ascii":
      decodedSecret = asciiToBuffer(cleanedSecret);
      break;
    default:
      throw new Error("Unsupported encoding type");
  }

  // Create an 8-byte buffer from the counter value
  const buffer = Buffer.alloc(8);
  for (let i = 7; i >= 0; i--) {
    buffer[i] = counter & 0xff;
    counter = counter >> 8;
  }

  // Generate HMAC using the decoded secret and the buffer
  const hmac = createHmac(algorithm, decodedSecret).update(buffer).digest();

  // Extract a 4-byte dynamic binary code from the HMAC
  const offset = hmac[hmac.length - 1] & 0xf;
  const code = (hmac.readUInt32BE(offset) & 0x7fffffff) % Math.pow(10, digits);

  // Return the code as a zero-padded string
  return code.toString().padStart(digits, "0");
}
