interface Base32ToBuffer {
  (base32: string): Buffer;
}

interface Base64ToBuffer {
  (base64: string): Buffer;
}

export const base32ToBuffer: Base32ToBuffer = (base32: string) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  let bits = "";
  for (const char of base32.toUpperCase()) {
    const val = alphabet.indexOf(char);
    if (val === -1) {
      throw new Error("Invalid base32 character");
    }
    bits += val.toString(2).padStart(5, "0");
  }

  const bytes =
    bits.match(/.{1,8}/g)?.map((byte) => parseInt(byte, 2) & 0xff) || [];
  return Buffer.from(bytes);
};

export function base64ToBuffer(base64: string): Buffer {
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(base64)) {
    throw new Error("Invalid base64 string");
  }

  return Buffer.from(base64, "base64");
}
