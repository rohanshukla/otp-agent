interface GenerateTOTPOptions {
    secret: string;
    encoding?: "base32" | "base64";
    timeStep?: number;
    digits?: number;
    algorithm?: "sha1" | "sha256" | "sha512";
}
/**
 * Generates a Time-based One-Time Password (TOTP) based on the provided secret and options.
 *
 * @param {Object} options - The options for generating the TOTP.
 * @param {string} options.secret - The shared secret key used for generating the TOTP.
 * @param {string} [options.encoding='base32'] - The encoding of the secret ('base32' or 'base64').
 * @param {number} [options.timeStep=30] - The time step in seconds (default is 30 seconds).
 * @param {number} [options.digits=6] - The number of digits in the generated TOTP (default is 6 digits).
 * @param {string} [options.algorithm='sha1'] - The HMAC hashing algorithm to use (default is 'sha1').
 * @returns {string} The generated TOTP as a string.
 *
 * @throws {Error} If the secret contains invalid characters.
 */
export declare const generateTOTP: ({ secret, encoding, timeStep, digits, algorithm, }: GenerateTOTPOptions) => string;
export {};
//# sourceMappingURL=generateTOTP.d.ts.map