import { encodeBase32, encodeBase64 } from "../utils/bufferToString";
import crypto from "crypto";

interface GenerateRecoveryCodesProps {
  numberOfCodes: number;
  codeLength: number;
  encoding?: "hex" | "base32" | "base64";
}

/**
 * Encodes a given buffer into a string using the specified encoding and trims it to the desired length.
 *
 * @param buffer - The buffer to encode.
 * @param encoding - The encoding format to use. Can be "hex", "base32", or "base64".
 * @param codeLength - The desired length of the resulting encoded string.
 * @returns The encoded string, trimmed to the specified length.
 */
function encodeCode(
  buffer: Buffer,
  encoding: "hex" | "base32" | "base64",
  codeLength: number
): string {
  let code;
  if (encoding === "base32") {
    code = encodeBase32(buffer);
  } else if (encoding === "base64") {
    code = encodeBase64(buffer);
  } else {
    code = buffer.toString(encoding);
  }
  return code.slice(0, codeLength);
}

export function generateRecoveryCodes({
  numberOfCodes,
  codeLength,
  encoding = "hex",
}: GenerateRecoveryCodesProps): string[] {
  const bufferLength = Math.ceil((codeLength * 3) / 4);
  return Array.from({ length: numberOfCodes }, () => {
    const buffer = crypto.randomBytes(bufferLength);
    return encodeCode(buffer, encoding, codeLength);
  });
}
