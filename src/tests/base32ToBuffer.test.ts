import {
  base32ToBuffer,
  base64ToBuffer,
  hexToBuffer,
  asciiToBuffer,
} from "../utils/stringToBuffer";

describe("stringToBuffers", () => {
  describe("base32ToBuffer", () => {
    it("should throw an error for an invalid base32 character", () => {
      const invalidBase32 = "MZXW6YTBOI=====$";
      expect(() => base32ToBuffer(invalidBase32)).toThrow(
        "Invalid base32 character"
      );
    });

    it("should handle an empty string", () => {
      const base32 = "";
      const expectedBuffer = Buffer.from([]);
      const result = base32ToBuffer(base32);
      expect(result).toEqual(expectedBuffer);
    });
  });

  describe("base64ToBuffer", () => {
    it("should convert a valid base64 string to a buffer", () => {
      const base64 = "Zm9vYmFy";
      const expectedBuffer = Buffer.from("foobar");
      const result = base64ToBuffer(base64);
      expect(result).toEqual(expectedBuffer);
    });

    it("should handle an empty string", () => {
      const base64 = "";
      const expectedBuffer = Buffer.from([]);
      const result = base64ToBuffer(base64);
      expect(result).toEqual(expectedBuffer);
    });

    it("should throw an error for an invalid base64 string", () => {
      const invalidBase64 = "Zm9vYmFy$";
      expect(() => base64ToBuffer(invalidBase64)).toThrow(
        "Invalid base64 string"
      );
    });
  });

  describe("hexToBuffer", () => {
    it("should convert a valid hex string to a buffer", () => {
      const hex = "48656c6c6f";
      const buffer = hexToBuffer(hex);
      expect(buffer.toString("utf-8")).toBe("Hello");
    });

    it("should throw an error for an invalid hex string", () => {
      const invalidHex = "48656c6c6g";
      expect(() => hexToBuffer(invalidHex)).toThrow("Invalid hex string");
    });
  });

  describe("asciiToBuffer", () => {
    it("should convert an ASCII string to a buffer", () => {
      const ascii = "Hello";
      const buffer = asciiToBuffer(ascii);
      expect(buffer.toString("utf-8")).toBe("Hello");
    });
  });
});
