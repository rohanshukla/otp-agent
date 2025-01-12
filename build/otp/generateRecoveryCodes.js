"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRecoveryCodes = generateRecoveryCodes;
const bufferToString_1 = require("../utils/bufferToString");
const crypto_1 = __importDefault(require("crypto"));
/**
 * Encodes a given buffer into a string using the specified encoding and trims it to the desired length.
 *
 * @param buffer - The buffer to encode.
 * @param encoding - The encoding format to use. Can be "hex", "base32", or "base64".
 * @param codeLength - The desired length of the resulting encoded string.
 * @returns The encoded string, trimmed to the specified length.
 */
function encodeCode(buffer, encoding, codeLength) {
    let code;
    if (encoding === "base32") {
        code = (0, bufferToString_1.encodeBase32)(buffer);
    }
    else if (encoding === "base64") {
        code = (0, bufferToString_1.encodeBase64)(buffer);
    }
    else {
        code = buffer.toString(encoding);
    }
    return code.slice(0, codeLength);
}
function generateRecoveryCodes({ numberOfCodes, codeLength, encoding = "hex", }) {
    const bufferLength = Math.ceil((codeLength * 3) / 4);
    return Array.from({ length: numberOfCodes }, () => {
        const buffer = crypto_1.default.randomBytes(bufferLength);
        return encodeCode(buffer, encoding, codeLength);
    });
}
//# sourceMappingURL=generateRecoveryCodes.js.map