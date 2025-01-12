"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeBase32 = encodeBase32;
exports.encodeBase64 = encodeBase64;
function encode(buffer, alphabet, bitsPerChar) {
    let bits = 0;
    let value = 0;
    let output = "";
    for (let i = 0; i < buffer.length; i++) {
        value = (value << 8) | buffer[i];
        bits += 8;
        while (bits >= bitsPerChar) {
            output +=
                alphabet[(value >>> (bits - bitsPerChar)) & ((1 << bitsPerChar) - 1)];
            bits -= bitsPerChar;
        }
    }
    if (bits > 0) {
        output +=
            alphabet[(value << (bitsPerChar - bits)) & ((1 << bitsPerChar) - 1)];
    }
    return output;
}
function encodeBase32(buffer) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    return encode(buffer, alphabet, 5);
}
function encodeBase64(buffer) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    return encode(buffer, alphabet, 6);
}
//# sourceMappingURL=bufferToString.js.map