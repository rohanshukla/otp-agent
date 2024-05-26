/**
 * @author : Rohan Shukla
 */

/**
 * Generate OTP of the length
 * @param  {number} length length of OTP.
 * @param  {string} characters refers to the custom characters for OTP generation
 */

interface IPayload {
  length?: number;
  characters: string;
}

export const generateCustomOTP = ({
  characters,
  length = 6,
}: IPayload): string => {
  let OTP = "";
  if (length > 10) length = 10;
  if (characters === "") return "";
  for (let i = 0; i < length; i++) {
    OTP += characters[Math.floor(Math.random() * characters.length)];
  }
  return OTP;
};
