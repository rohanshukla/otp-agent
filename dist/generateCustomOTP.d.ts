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
export declare const generateCustomOTP: ({ characters, length, }: IPayload) => string;
export {};
//# sourceMappingURL=generateCustomOTP.d.ts.map