import { generateHOTP } from "../otp/generateHOTP";

describe("generateHOTP", () => {
  it("should generate a valid HOTP with default options", () => {
    const hotp = generateHOTP({
      secret: "JBSWY3DPEHPK3PXP",
      counter: 1,
    });
    expect(hotp).toBe("996554");
  });

  it("should generate a valid HOTP with base64 encoding", () => {
    const hotp = generateHOTP({
      secret: "JBSWY3DPEHPK3PXP",
      counter: 1,
      encoding: "base64",
    });
    expect(hotp).toBe("097492");
  });

  it("should generate a valid HOTP with sha256 algorithm", () => {
    const hotp = generateHOTP({
      secret: "JBSWY3DPEHPK3PXP",
      counter: 1,
      algorithm: "sha256",
    });
    expect(hotp).toBe("344551");
  });

  it("should generate a valid HOTP with sha512 algorithm", () => {
    const hotp = generateHOTP({
      secret: "JBSWY3DPEHPK3PXP",
      counter: 1,
      algorithm: "sha512",
    });
    expect(hotp).toBe("439887");
  });

  it("should generate a valid HOTP with 8 digits", () => {
    const hotp = generateHOTP({
      secret: "JBSWY3DPEHPK3PXP",
      counter: 1,
      digits: 8,
    });
    expect(hotp).toBe("41996554");
  });

  it("should throw an error for invalid base32 secret", () => {
    expect(() => {
      generateHOTP({
        secret: "INVALIDSECRET1",
        counter: 1,
      });
    }).toThrow("Invalid base32 character in secret");
  });

  it("should throw an error for invalid base64 secret", () => {
    expect(() => {
      generateHOTP({
        secret: "INVALID_SECRET",
        counter: 1,
        encoding: "base64",
      });
    }).toThrow("Invalid base64 character in secret");
  });

  it("should throw an error for unsupported encoding type", () => {
    expect(() => {
      generateHOTP({
        secret: "JBSWY3DPEHPK3PXP",
        counter: 1,
        encoding: "hex" as any,
      });
    }).toThrow("Unsupported encoding type");
  });
});