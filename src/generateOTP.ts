/**
 * @author : Rohan Shukla
 */

/**
 * Generate OTP of the length
 * @param  {object} payload
 * @param  {number} length length of OTP.
 * @param  {boolean} numbers Default: `true` true value includes numbers in OTP
 * @param  {boolean} alphabets Default: `false` true value includes alphabets in OTP
 * @param  {boolean} upperCaseAlphabets Default: `false` true value includes upperCase alphabets in OTP
 * @param  {boolean} specialChars Default: `false` true value includes specialChars in OTP
 */

interface IPayload {
  length?: number;
  numbers?: boolean;
  alphabets?: boolean;
  upperCaseAlphabets?: boolean;
  specialChars?: boolean;
}

const NUMBERS = "0123456789";
const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_ALPHABETS = ALPHABETS.toUpperCase();
const SPECIAL_CHARACTERS = "!@#?%&*";

export const generateOTP = ({
  numbers,
  alphabets,
  upperCaseAlphabets,
  specialChars,
  length = 6,
}: IPayload = {}): string => {
  let keywords: string =
    (numbers ? NUMBERS : "") +
    (alphabets ? ALPHABETS : "") +
    (upperCaseAlphabets ? UPPERCASE_ALPHABETS : "") +
    (specialChars ? SPECIAL_CHARACTERS : "");

  let OTP = "";
  if (!keywords) keywords = NUMBERS;
  if (length > 10) length = 10;
  for (let i = 0; i < length; i++) {
    OTP += keywords[Math.floor(Math.random() * keywords.length)];
  }
  return OTP;
};
