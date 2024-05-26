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
export declare const generateCustomOTP: (characters?: string, { length }?: IPayload) => string;
export {};
//# sourceMappingURL=generateCustomOTP.d.ts.map