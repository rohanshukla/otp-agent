/**
 * @file generateCustomOTP.ts
 * @description This file contains the implementation of a function to generate a custom OTP (One-Time Password).
 * @author Rohan Shukla
 */

interface IPayload {
  characters: string;
  length?: number;
}

/**
 * Generate a custom OTP of the specified length using the provided characters.
 *
 * @param {IPayload} options - Options for OTP generation.
 * @param {string} options.characters - The custom characters for OTP generation.
 * @param {number} [options.length=6] - The length of the OTP.
 * @returns {string} - The generated OTP.
 */
export const generateCustomOTP = ({
  characters,
  length = 6,
}: IPayload): string => {
  // Limit the length to a maximum of 100
  if (length > 100) length = 100;

  // Ensure characters is a string and return an empty string if no characters are provided
  if (typeof characters !== "string" || characters.length === 0) return "";

  let OTP = "";

  // Generate the OTP
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    OTP += characters[randomIndex];
  }

  return OTP;
};
