import { generateOTP } from "../otp/generateOTP";

describe("generateOTP", () => {
  it("should generate an OTP of default length 6 with only numbers", () => {
    const otp = generateOTP();
    expect(otp).toMatch(/^\d{6}$/);
  });

  it("should generate an OTP of specified length with only numbers", () => {
    const otp = generateOTP({ length: 8 });
    expect(otp).toMatch(/^\d{8}$/);
  });

  it("should generate an OTP with numbers and lowercase alphabets", () => {
    const otp = generateOTP({ numbers: true, alphabets: true });
    expect(otp).toMatch(/^[0-9a-z]{6}$/);
  });

  it("should generate an OTP with numbers and uppercase alphabets", () => {
    const otp = generateOTP({ numbers: true, upperCaseAlphabets: true });
    expect(otp).toMatch(/^[0-9A-Z]{6}$/);
  });

  it("should generate an OTP with numbers and special characters", () => {
    const otp = generateOTP({ numbers: true, specialChars: true });
    expect(otp).toMatch(/^[0-9!@#?%&*]{6}$/);
  });

  it("should generate an OTP with all character types", () => {
    const otp = generateOTP({
      numbers: true,
      alphabets: true,
      upperCaseAlphabets: true,
      specialChars: true,
    });
    expect(otp).toMatch(/^[0-9a-zA-Z!@#?%&*]{6}$/);
  });

  it("should limit OTP length to a maximum of 10 characters", () => {
    const otp = generateOTP({ length: 12 });
    expect(otp.length).toBe(10);
  });

  it("should default to numbers if no character types are selected", () => {
    const otp = generateOTP({
      numbers: false,
      alphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    expect(otp).toMatch(/^\d{6}$/);
  });
});
