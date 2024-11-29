"use strict";
/**
 * @file generateOTP.ts
 * @description Utility to generate OTP (One Time Password) with customizable options.
 * @author Rohan Shukla
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOTP = void 0;
const NUMBERS = "0123456789";
const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_ALPHABETS = ALPHABETS.toUpperCase();
const SPECIAL_CHARACTERS = "!@#?%&*";
/**
 * Generate an OTP (One Time Password) with the specified options.
 *
 * @param {IPayload} options - Options for OTP generation.
 * @param {number} [options.length=6] - Length of the OTP.
 * @param {boolean} [options.numbers=true] - Include numbers in the OTP.
 * @param {boolean} [options.alphabets=false] - Include lowercase alphabets in the OTP.
 * @param {boolean} [options.upperCaseAlphabets=false] - Include uppercase alphabets in the OTP.
 * @param {boolean} [options.specialChars=false] - Include special characters in the OTP.
 * @returns {string} - Generated OTP.
 */
const generateOTP = ({ length = 6, numbers = true, alphabets = false, upperCaseAlphabets = false, specialChars = false, } = {}) => {
    let characterPool = "";
    if (numbers)
        characterPool += NUMBERS;
    if (alphabets)
        characterPool += ALPHABETS;
    if (upperCaseAlphabets)
        characterPool += UPPERCASE_ALPHABETS;
    if (specialChars)
        characterPool += SPECIAL_CHARACTERS;
    // Default to numbers if no character types are selected
    if (!characterPool)
        characterPool = NUMBERS;
    // Limit OTP length to a maximum of 10 characters
    const otpLength = Math.min(length, 10);
    let otp = "";
    for (let i = 0; i < otpLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        otp += characterPool[randomIndex];
    }
    return otp;
};
exports.generateOTP = generateOTP;
//# sourceMappingURL=generateOTP.js.map