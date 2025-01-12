function encode(buffer: Buffer, alphabet: string, bitsPerChar: number): string {
  let bits = 0;
  let value = 0;
  let output = "";

  for (let i = 0; i < buffer.length; i++) {
    value = (value << 8) | buffer[i];
    bits += 8;

    while (bits >= bitsPerChar) {
      output +=
        alphabet[(value >>> (bits - bitsPerChar)) & ((1 << bitsPerChar) - 1)];
      bits -= bitsPerChar;
    }
  }

  if (bits > 0) {
    output +=
      alphabet[(value << (bitsPerChar - bits)) & ((1 << bitsPerChar) - 1)];
  }

  return output;
}

export function encodeBase32(buffer: Buffer): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  return encode(buffer, alphabet, 5);
}

export function encodeBase64(buffer: Buffer): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  return encode(buffer, alphabet, 6);
}
