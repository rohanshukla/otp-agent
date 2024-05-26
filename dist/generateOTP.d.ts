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
export declare const generateOTP: ({ numbers, alphabets, upperCaseAlphabets, specialChars, length, }?: IPayload) => string;
export {};
//# sourceMappingURL=generateOTP.d.ts.map