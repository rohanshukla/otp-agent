/**
 * Generates a HMAC-based One-Time Password (HOTP).
 *
 * @param secret - The encoded secret key used for HMAC generation.
 * @param counter - The counter value, which is typically incremented with each new OTP.
 * @param digits - The number of digits for the OTP (default is 6).
 * @param encoding - The encoding type of the secret key (default is "base32").
 * @param algorithm - The hashing algorithm to use (default is "sha1").
 * @returns The generated OTP as a string of the specified number of digits.
 */
interface HOTPOptions {
    secret: string;
    counter: number;
    digits?: number;
    encoding?: "base32" | "base64" | "hex" | "ascii";
    algorithm?: "sha1" | "sha256" | "sha384" | "sha512";
}
/**
 * Generates a HOTP (HMAC-based One-Time Password) based on the provided options.
 *
 * @param {HOTPOptions} options - The options for generating the HOTP.
 * @param {string} options.secret - The shared secret key used for generating the HOTP.
 * @param {number} options.counter - The counter value, which is typically incremented with each HOTP generation.
 * @param {number} [options.digits=6] - The number of digits in the generated HOTP. Defaults to 6.
 * @param {string} [options.encoding="base32"] - The encoding of the secret key. Can be "base32", "base64", "hex", or "ascii". Defaults to "base32".
 * @param {string} [options.algorithm="sha1"] - The hashing algorithm to use. Defaults to "sha1".
 * @returns {string} The generated HOTP as a zero-padded string.
 * @throws {Error} If the secret contains invalid characters for the specified encoding.
 * @throws {Error} If an unsupported encoding type is specified.
 */
export declare function generateHOTP({ secret, counter, digits, encoding, algorithm, }: HOTPOptions): string;
export {};
//# sourceMappingURL=generateHOTP.d.ts.map