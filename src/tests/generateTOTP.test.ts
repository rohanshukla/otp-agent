import { generateTOTP } from "../otp/generateTOTP";

describe("generateTOTP", () => {
  it("should generate a valid TOTP with default options", () => {
    const secret = "JBSWY3DPEHPK3PXP"; // base32 encoded secret
    const totp = generateTOTP({ secret });
    expect(totp).toHaveLength(6);
    expect(/^\d{6}$/.test(totp)).toBe(true);
  });

  it("should generate a valid TOTP with base64 encoding", () => {
    const secret = "JBSWY3DPEHPK3PXP"; // base64 encoded secret
    const totp = generateTOTP({ secret, encoding: "base64" });
    expect(totp).toHaveLength(6);
    expect(/^\d{6}$/.test(totp)).toBe(true);
  });

  it("should generate a valid TOTP with hex encoding", () => {
    const secret = "48656c6c6f21"; // hex encoded secret
    const totp = generateTOTP({ secret, encoding: "hex" });
    expect(totp).toHaveLength(6);
    expect(/^\d{6}$/.test(totp)).toBe(true);
  });

  it("should generate a valid TOTP with ascii encoding", () => {
    const secret = "Hello!"; // ascii encoded secret
    const totp = generateTOTP({ secret, encoding: "ascii" });
    expect(totp).toHaveLength(6);
    expect(/^\d{6}$/.test(totp)).toBe(true);
  });

  it("should generate a valid TOTP with custom time step", () => {
    const secret = "JBSWY3DPEHPK3PXP"; // base32 encoded secret
    const totp = generateTOTP({ secret, timeStep: 60 });
    expect(totp).toHaveLength(6);
    expect(/^\d{6}$/.test(totp)).toBe(true);
  });

  it("should generate a valid TOTP with custom digits", () => {
    const secret = "JBSWY3DPEHPK3PXP"; // base32 encoded secret
    const totp = generateTOTP({ secret, digits: 8 });
    expect(totp).toHaveLength(8);
    expect(/^\d{8}$/.test(totp)).toBe(true);
  });

  it("should generate a valid TOTP with custom algorithm", () => {
    const secret = "JBSWY3DPEHPK3PXP"; // base32 encoded secret
    const totp = generateTOTP({ secret, algorithm: "sha256" });
    expect(totp).toHaveLength(6);
    expect(/^\d{6}$/.test(totp)).toBe(true);
  });

  it("should throw an error for invalid base32 secret", () => {
    const secret = "INVALID_BASE32";
    expect(() => generateTOTP({ secret })).toThrow("Invalid base32 character in secret");
  });

  it("should throw an error for invalid base64 secret", () => {
    const secret = "INVALID_BASE64";
    expect(() => generateTOTP({ secret, encoding: "base64" })).toThrow("Invalid base64 character in secret");
  });

  it("should throw an error for invalid hex secret", () => {
    const secret = "INVALIDHEX";
    expect(() => generateTOTP({ secret, encoding: "hex" })).toThrow("Invalid hex character in secret");
  });

  it("should throw an error for unsupported encoding type", () => {
    const secret = "JBSWY3DPEHPK3PXP";
    expect(() => generateTOTP({ secret, encoding: "utf8" as any })).toThrow(
      "Unsupported encoding type"
    );
  });

  it("should generate consistent TOTP codes for the same time step", () => {
    const secret = "JBSWY3DPEHPK3PXP";
    const timeStep = 30;
    const totp1 = generateTOTP({ secret, timeStep });
    const totp2 = generateTOTP({ secret, timeStep });
    expect(totp1).toBe(totp2);
  });

  it("should generate different TOTP codes for different time steps", () => {
    const secret = "JBSWY3DPEHPK3PXP";
    const timeStep1 = 30;
    const timeStep2 = 60;
    const totp1 = generateTOTP({ secret, timeStep: timeStep1 });
    const totp2 = generateTOTP({ secret, timeStep: timeStep2 });
    expect(totp1).not.toBe(totp2);
  });

  it("should generate different TOTP codes for different secrets", () => {
    const secret1 = "JBSWY3DPEHPK3PXP";
    const secret2 = "JBSWY3DPEHPK3PXQ";
    const totp1 = generateTOTP({ secret: secret1 });
    const totp2 = generateTOTP({ secret: secret2 });
    expect(totp1).not.toBe(totp2);
  });
});