/**
 * @author : Rohan Shukla
 */
/**
 * Generate OTP of the length
 * @param  {number} length length of OTP.
 * @param  {object} payload
 * @param  {boolean} numbers Default: `true` true value includes numbers in OTP
 * @param  {boolean} alphabets Default: `false` true value includes alphabets in OTP
 * @param  {boolean} upperCaseAlphabets Default: `false` true value includes upperCase alphabets in OTP
 * @param  {boolean} specialChars Default: `false` true value includes specialChars in OTP
 */
interface IPayload {
    numbers?: boolean;
    alphabets?: boolean;
    upperCaseAlphabets?: boolean;
    specialChars?: boolean;
}
export declare const generateOTP: (length?: number, { numbers, alphabets, upperCaseAlphabets, specialChars }?: IPayload) => string;
export {};
//# sourceMappingURL=generateOTP.d.ts.map