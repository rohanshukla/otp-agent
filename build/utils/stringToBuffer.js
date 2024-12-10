"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64ToBuffer = exports.base32ToBuffer = void 0;
const base32ToBuffer = (base32) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let bits = "";
    for (const char of base32.toUpperCase()) {
        const val = alphabet.indexOf(char);
        if (val === -1) {
            throw new Error("Invalid base32 character");
        }
        bits += val.toString(2).padStart(5, "0");
    }
    const bytes = bits.match(/.{1,8}/g)?.map((byte) => parseInt(byte, 2) & 0xff) || [];
    return Buffer.from(bytes);
};
exports.base32ToBuffer = base32ToBuffer;
function base64ToBuffer(base64) {
    if (!/^[A-Za-z0-9+/]*={0,2}$/.test(base64)) {
        throw new Error("Invalid base64 string");
    }
    return Buffer.from(base64, "base64");
}
exports.base64ToBuffer = base64ToBuffer;
//# sourceMappingURL=stringToBuffer.js.map