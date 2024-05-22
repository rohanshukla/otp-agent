# <span style="color:#ff8333">OTP-Agent</span> [![NPM Version](https://badge.fury.io/js/otp-agent.svg)](https://www.npmjs.com/package/otp-agent) ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg) ![Total Download](https://img.shields.io/npm/dt/otp-agent.svg)

OTP(One-Time-Password) generator for JavaScript

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).<br />
Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install otp-agent
```

## Example & Usage (With import statement)
```js
import { generateOTP } from 'otp-agent';

let otp = generateOTP(4);
console.log(otp);

otp = generateOTP(8, { numbers: true, alphabets: true });
console.log(otp);
```

## Example & Usage (With reqire statement)
```js
const { generateOTP } = require("otp-agent");

// Default OTP length is 6 and max is 10
var otp = generateOTP();
console.log(otp);

otp = generateOTP(6, { upperCaseAlphabets: true, specialChars: true });
console.log(otp);

otp = generateOTP(8, {
  numbers: true,
  alphabets: true,
  upperCaseAlphabets: true,
  specialChars: true,
});
console.log(otp);

```

## Note
* Can be used to generate OTP using numbers, alphabets, upperCaseAlphabets, special characters and have option to choose either one of them.
* otpLength - length of OTP, default length is 6 and OTP length cannot be more than 10 characters.
* By default only number options is true if no options are not provided.

## Author
Rohan Shukla [GitHub](https://github.com/rohanshukla) [LinkedIn](https://www.linkedin.com/in/shuklarohan)

## License
© Licensed under the [MIT License](LICENSE).
