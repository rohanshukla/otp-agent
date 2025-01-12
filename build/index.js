"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRecoveryCodes = exports.generateHOTP = exports.generateTOTP = exports.generateCustomOTP = exports.generateOTP = void 0;
/* istanbul ignore file */
var generateOTP_1 = require("./otp/generateOTP");
Object.defineProperty(exports, "generateOTP", { enumerable: true, get: function () { return generateOTP_1.generateOTP; } });
var generateCustomOTP_1 = require("./otp/generateCustomOTP");
Object.defineProperty(exports, "generateCustomOTP", { enumerable: true, get: function () { return generateCustomOTP_1.generateCustomOTP; } });
var generateTOTP_1 = require("./otp/generateTOTP");
Object.defineProperty(exports, "generateTOTP", { enumerable: true, get: function () { return generateTOTP_1.generateTOTP; } });
var generateHOTP_1 = require("./otp/generateHOTP");
Object.defineProperty(exports, "generateHOTP", { enumerable: true, get: function () { return generateHOTP_1.generateHOTP; } });
var generateRecoveryCodes_1 = require("./otp/generateRecoveryCodes");
Object.defineProperty(exports, "generateRecoveryCodes", { enumerable: true, get: function () { return generateRecoveryCodes_1.generateRecoveryCodes; } });
//# sourceMappingURL=index.js.map