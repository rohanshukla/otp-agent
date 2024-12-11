interface Base32ToBuffer {
  (base32: string): Buffer;
}

export const base32ToBuffer: Base32ToBuffer = (base32: string): Buffer => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  const paddingChar = "=";
  const cleanedBase32 = base32.replace(
    new RegExp(`[^${alphabet}${paddingChar}]`, "g"),
    ""
  );
  const paddingLength = (8 - (cleanedBase32.length % 8)) % 8;
  const paddedBase32 = cleanedBase32 + paddingChar.repeat(paddingLength);

  let bits = "";
  for (const char of paddedBase32) {
    if (char !== paddingChar) {
      const index = alphabet.indexOf(char);
      bits += index.toString(2).padStart(5, "0");
    }
  }

  const bufferLength = Math.floor(bits.length / 8);
  const buffer = Buffer.alloc(bufferLength);
  for (let i = 0; i < bufferLength; i++) {
    buffer[i] = parseInt(bits.slice(i * 8, i * 8 + 8), 2);
  }

  return buffer;
};

export function base64ToBuffer(base64: string): Buffer {
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(base64)) {
    throw new Error("Invalid base64 string");
  }
  return Buffer.from(base64, "base64");
}

export function hexToBuffer(hex: string): Buffer {
  if (!/^[0-9A-Fa-f]*$/.test(hex)) {
    throw new Error("Invalid hex string");
  }
  return Buffer.from(hex, "hex");
}

export function asciiToBuffer(ascii: string): Buffer {
  return Buffer.from(ascii, "ascii");
}
