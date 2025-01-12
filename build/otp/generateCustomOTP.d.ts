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
export declare const generateCustomOTP: ({ characters, length, }: IPayload) => string;
export {};
//# sourceMappingURL=generateCustomOTP.d.ts.map