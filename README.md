# OTP-Agent [![NPM Version](https://badge.fury.io/js/otp-agent.svg)](https://www.npmjs.com/package/otp-agent) ![Total Download](https://img.shields.io/npm/dt/otp-agent.svg) ![Minzipped Size](https://img.shields.io/bundlephobia/minzip/otp-agent.svg) ![Monthly Download](https://img.shields.io/npm/dm/otp-agent.svg)

## Table of Contents

- [Installation](#installation)
- [Running Tests](#running-tests)
- [OTP (One-Time Password)](#otp-one-time-password)
- [Custom OTP](#custom-otp)
- [TOTP (Time-based One-Time Password)](#totp-time-based-one-time-password)
- [HOTP (HMAC-based One-Time Password)](#hotp-hmac-based-one-time-password)
- [Author](#author)
- [License](#license)

## Installation

To install the `otp-agent` module, ensure you have [Node.js](https://nodejs.org/en/) installed. You can then install the module via the [npm registry](https://www.npmjs.com/). Use the following command to add `otp-agent` to your project:

```bash
npm install otp-agent
```

For more information on installing npm packages, refer to the [npm documentation](https://docs.npmjs.com/getting-started/installing-npm-packages-locally).

## Running Tests

To run tests for the `otp-agent` module, use the following command:

```bash
npm run test
```

## OTP (One-Time Password)

An OTP is a password that is valid for only one login session or transaction. This module allows you to generate OTPs using numbers, alphabets, and special characters. The default length is 6 characters, but it can be customized up to 100 characters.

### Example & Usage (with [import](https://nodejs.org/api/esm.html) statement)

```js
import { generateOTP } from "otp-agent";

let otp = generateOTP();
console.log(otp); // 526775

otp = generateOTP({ length: 4, numbers: true, alphabets: true });
console.log(otp); // i5v3

otp = generateOTP({
  length: 8,
  numbers: true,
  alphabets: true,
  upperCaseAlphabets: true,
  specialChars: true,
});
console.log(otp); // NZ9O#akS
```

### Arguments

- `length` (optional): The length of the OTP. Default is 6.
- `numbers` (optional): Include numbers in the OTP. Default is true.
- `alphabets` (optional): Include alphabets in the OTP. Default is false.
- `upperCaseAlphabets` (optional): Include uppercase alphabets in the OTP. Default is false.
- `specialChars` (optional): Include special characters in the OTP. Default is false.

### Example & Usage (with [require](https://nodejs.org/api/modules.html) statement)

```js
const { generateOTP } = require("otp-agent");

// Default OTP length is 6 and max is 100
const otp = generateOTP();
console.log(otp); // 543921
```

## Custom OTP

A Custom OTP is generated using a specified set of characters. This allows for more control over the characters included in the OTP, making it suitable for specific use cases where certain characters are required.

```js
import { generateCustomOTP } from "otp-agent";

const customOTP = generateCustomOTP("Abc@123", { length: 5 });
console.log(customOTP); // 1@c3c
```

### Arguments

- `characters`: A string containing the set of characters to use for the OTP.
- `length` (optional): The length of the OTP. Default is 6.

## TOTP (Time-based One-Time Password)

TOTP is an extension of OTP that uses the current time as a source of uniqueness. It generates a time-based OTP that changes after a certain period, typically 30 seconds. This is commonly used in two-factor authentication systems.

```js
import { generateTOTP } from "otp-agent";

const totp = generateTOTP({ secret: "JBSWY3DPEHPK3PXP" });
console.log(totp); // 123456
```

### Arguments

- `secret`: A shared secret key used to generate the TOTP.
- `timeStep` (optional): The time step in seconds. Default is 30.
- `digits` (optional): The number of digits in the OTP. Default is 6.
- `algorithm` (optional): The hashing algorithm to use (e.g., 'SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'). Default is 'SHA-1'.
- `encoding` (optional): The encoding of the secret key (e.g., 'ascii', 'hex', 'base32', 'base64'). Default is 'base32'.

## HOTP (HMAC-based One-Time Password)

HOTP is an OTP algorithm based on HMAC (Hash-based Message Authentication Code). It generates a counter-based OTP that changes with each authentication attempt. This is useful for systems where the OTP needs to remain valid until it is used.

```js
import { generateHOTP } from "otp-agent";

const hotp = generateHOTP({ secret: "JBSWY3DPEHPK3PXP", counter: 1 });
console.log(hotp); // 654321
```

### Arguments

- `secret`: A shared secret key used to generate the HOTP.
- `counter`: A counter value that increments with each OTP generation.
- `digits` (optional): The number of digits in the OTP. Default is 6.
- `algorithm` (optional): The hashing algorithm to use (e.g., 'SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'). Default is 'SHA-1'.
- `encoding` (optional): The encoding of the secret key (e.g., 'ascii', 'hex', 'base32', 'base64'). Default is 'base32'.

## Author

**Rohan Shukla**  
[![GitHub](https://img.shields.io/badge/GitHub-rohanshukla-181717?logo=github&style=for-the-badge)](https://github.com/rohanshukla)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-shuklarohan-0077B5?logo=linkedin&style=for-the-badge)](https://www.linkedin.com/in/shuklarohan)

## License

© Licensed under the [MIT License](./LICENSE).
