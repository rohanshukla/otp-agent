/**
 * @author : Rohan Shukla
 */

/**
 * Generate OTP of the length
 * @param  {string} characters refers to the custom characters for OTP generation
 * @param  {number} length length of OTP.
 */

interface IPayload {
  length?: number;
}

export const generateCustomOTP = (
  characters: string,
  { length = 6 }: IPayload = {}
): string => {
  if (length > 10) length = 10;
  if (!characters) return "";
  let OTP = "";
  for (let i = 0; i < length; i++) {
    OTP += characters[Math.floor(Math.random() * characters.length)];
  }
  return OTP;
};
