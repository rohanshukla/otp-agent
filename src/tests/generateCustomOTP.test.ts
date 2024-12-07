import { generateCustomOTP } from "../otp/generateCustomOTP";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
describe("generateCustomOTP", () => {
  it("should generate an OTP of default length 6 when no length is provided", () => {
    const otp = generateCustomOTP(characters);
    expect(otp).toHaveLength(6);
  });

  it("should generate an OTP of specified length", () => {
    const otp = generateCustomOTP(characters, { length: 8 });
    expect(otp).toHaveLength(8);
  });

  it("should limit the OTP length to a maximum of 10", () => {
    const otp = generateCustomOTP(characters, { length: 12 });
    expect(otp).toHaveLength(10);
  });

  it("should return an empty string if no characters are provided", () => {
    const otp = generateCustomOTP("");
    expect(otp).toBe("");
  });

  it("should return an empty string if characters is not a string", () => {
    const otp = generateCustomOTP(null as any);
    expect(otp).toBe("");
  });

  it("should generate an OTP using the provided characters", () => {
    const characters = "ABC";
    const otp = generateCustomOTP(characters, { length: 6 });
    for (const char of otp) {
      expect(characters).toContain(char);
    }
  });
});
