"use strict";
/**
 * @author : Rohan Shukla
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOTP = void 0;
const NUMBERS = "0123456789";
const ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_ALPHABETS = ALPHABETS.toUpperCase();
const SPECIAL_CHARACTERS = "!@#?%&*";
const generateOTP = ({ numbers, alphabets, upperCaseAlphabets, specialChars, length = 6, } = {}) => {
    let keywords = (numbers ? NUMBERS : "") +
        (alphabets ? ALPHABETS : "") +
        (upperCaseAlphabets ? UPPERCASE_ALPHABETS : "") +
        (specialChars ? SPECIAL_CHARACTERS : "");
    if (!keywords)
        keywords = NUMBERS;
    if (length > 10)
        length = 10;
    let OTP = "";
    for (let i = 0; i < length; i++) {
        OTP += keywords[Math.floor(Math.random() * keywords.length)];
    }
    return OTP;
};
exports.generateOTP = generateOTP;
//# sourceMappingURL=generateOTP.js.map