/**
 * @file generateOTP.ts
 * @description Utility to generate OTP (One Time Password) with customizable options.
 * @author Rohan Shukla
 */
/**
 * Interface for OTP generation options.
 */
interface IPayload {
    length?: number;
    numbers?: boolean;
    alphabets?: boolean;
    upperCaseAlphabets?: boolean;
    specialChars?: boolean;
}
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
export declare const generateOTP: ({ length, numbers, alphabets, upperCaseAlphabets, specialChars, }?: IPayload) => string;
export {};
//# sourceMappingURL=generateOTP.d.ts.map