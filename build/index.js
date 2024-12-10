"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTOTP = exports.generateCustomOTP = exports.generateOTP = void 0;
/* istanbul ignore file */
var generateOTP_1 = require("./otp/generateOTP");
Object.defineProperty(exports, "generateOTP", { enumerable: true, get: function () { return generateOTP_1.generateOTP; } });
var generateCustomOTP_1 = require("./otp/generateCustomOTP");
Object.defineProperty(exports, "generateCustomOTP", { enumerable: true, get: function () { return generateCustomOTP_1.generateCustomOTP; } });
var generateTOTP_1 = require("./otp/generateTOTP");
Object.defineProperty(exports, "generateTOTP", { enumerable: true, get: function () { return generateTOTP_1.generateTOTP; } });
//# sourceMappingURL=index.js.map