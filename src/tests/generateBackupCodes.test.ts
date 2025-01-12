import { generateRecoveryCodes } from "../otp/generateRecoveryCodes";

describe("generateRecoveryCodes", () => {
  it("should generate the correct number of backup codes", () => {
    const numberOfCodes = 5;
    const codeLength = 10;
    const codes = generateRecoveryCodes({ numberOfCodes, codeLength });
    expect(codes).toHaveLength(numberOfCodes);
  });

  it("should generate codes of the correct length", () => {
    const numberOfCodes = 5;
    const codeLength = 10;
    const codes = generateRecoveryCodes({ numberOfCodes, codeLength });
    codes.forEach((code) => {
      expect(code).toHaveLength(codeLength);
    });
  });

  it("should generate codes with the correct encoding (hex)", () => {
    const numberOfCodes = 5;
    const codeLength = 10;
    const encoding = "hex";
    const codes = generateRecoveryCodes({ numberOfCodes, codeLength, encoding });
    codes.forEach((code) => {
      expect(code).toMatch(/^[0-9A-F]+$/i);
    });
  });

  it("should generate codes with the correct encoding (base32)", () => {
    const numberOfCodes = 5;
    const codeLength = 10;
    const encoding = "base32";
    const codes = generateRecoveryCodes({ numberOfCodes, codeLength, encoding });
    codes.forEach((code) => {
      expect(code).toMatch(/^[A-Z2-7]+$/);
    });
  });

  it("should generate codes with the correct encoding (base64)", () => {
    const numberOfCodes = 5;
    const codeLength = 10;
    const encoding = "base64";
    const codes = generateRecoveryCodes({ numberOfCodes, codeLength, encoding });
    codes.forEach((code) => {
      expect(code).toMatch(/^[A-Za-z0-9+/]+={0,2}$/);
    });
  });
});
