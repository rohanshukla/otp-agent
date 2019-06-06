# <span style="color:#ff8333">OTP-Agent</span> [![NPM Version](https://badge.fury.io/js/otp-agent.svg)](https://www.npmjs.com/package/otp-agent) ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

OTP(One-Time-Password) generator for JavaScript

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).<br />
Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install otp-agent
```

## Example & Usage
```js
const otpAgent = require('otp-agent');

const otpLength = 6;
var otp = otpAgent.generateOTP(otpLength);
console.log(otp);

otp = otpAgent.generateOTP(otpLength, { numbers: true });
console.log(otp);

otp = otpAgent.generateOTP(otpLength, { numbers: true, alphabets: true, upperCaseAlphabets: true, specialChars: true });
console.log(otp);
```

## Note
* Can be used to generate OTP using numbers, alphabets, upperCaseAlphabets, special characters and have option to choose either one of them.
* otpLength - length of OTP, default length is 10 and OTP length cannot be more than 10 characters.
* By default all options are true if any options are not provided.

## Author
Rohan Shukla [GitHub](https://github.com/shuklarohan) [LinkedIn](https://www.linkedin.com/in/shuklarohan)

## License
© Licensed under the [MIT License](LICENSE).
