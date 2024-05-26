"use strict";
/**
 * @author : Rohan Shukla
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCustomOTP = void 0;
const generateCustomOTP = ({ characters, length = 6, }) => {
    let OTP = "";
    if (length > 10)
        length = 10;
    if (characters === "")
        return "";
    for (let i = 0; i < length; i++) {
        OTP += characters[Math.floor(Math.random() * characters.length)];
    }
    return OTP;
};
exports.generateCustomOTP = generateCustomOTP;
//# sourceMappingURL=generateCustomOTP.js.map