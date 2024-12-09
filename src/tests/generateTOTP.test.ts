import { generateTOTP } from "../otp/generateTOTP";

describe("generateTOTP", () => {
  it("should generate a TOTP code with default options", () => {
    const secret = "JBSWY3DPEHPK3PXP"; // Example base32 secret
    const totp = generateTOTP({ secret });
    expect(totp).toHaveLength(6);
    expect(/^\d{6}$/.test(totp)).toBe(true);
  });

  it("should generate a TOTP code with base64 secret", () => {
    const secret = "Zm9vYmFy"; // Example base64 secret
    const totp = generateTOTP({ secret, encoding: "base64" });
    expect(totp).toHaveLength(6);
    expect(/^\d{6}$/.test(totp)).toBe(true);
  });

  it("should generate a TOTP code with custom timeStep", () => {
    const secret = "JBSWY3DPEHPK3PXP";
    const timeStep = 60;
    const totp = generateTOTP({ secret, timeStep });
    expect(totp).toHaveLength(6);
    expect(/^\d{6}$/.test(totp)).toBe(true);
  });

  it("should generate a TOTP code with custom digits", () => {
    const secret = "JBSWY3DPEHPK3PXP";
    const digits = 8;
    const totp = generateTOTP({ secret, digits });
    expect(totp).toHaveLength(8);
    expect(/^\d{8}$/.test(totp)).toBe(true);
  });

  it("should throw an error for invalid base32 secret", () => {
    const secret = "INVALID_SECRET";
    expect(() => generateTOTP({ secret })).toThrow(
      "Invalid base32 character in secret"
    );
  });

  it("should throw an error for invalid base64 secret", () => {
    const secret = "INVALID_SECRET";
    expect(() => generateTOTP({ secret, encoding: "base64" })).toThrow(
      "Invalid base64 character in secret"
    );
  });

  it("should throw an error for unsupported encoding type", () => {
    const secret = "JBSWY3DPEHPK3PXP";
    expect(() => generateTOTP({ secret, encoding: "hex" as any })).toThrow(
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
