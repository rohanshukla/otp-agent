/**
 * @author : Rohan Shukla
 */

/**
  * Generate OTP of the length
  * @param  {number} length length of OTP.
  * @param  {object} choices
  * @param  {boolean} numbers Default: `true` true value includes numbers in OTP
  * @param  {boolean} alphabets Default: `true` true value includes alphabets in OTP
  * @param  {boolean} upperCaseAlphabets Default: `true` true value includes upperCase alphabets in OTP
  * @param  {boolean} specialChars Default: `true` true value includes specialChars in OTP
  */


let isEmptyObject = function (object) {
    for (var property in object) {
        if (object.hasOwnProperty(property))
            return false;
    }
    return JSON.stringify(object) === JSON.stringify({});
}

module.exports = {
    generateOTP: function (length, choices) {

        const numbers = '0123456789';
        const alphabets = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseAlphabets = alphabets.toUpperCase();
        const specialChars = '!@#&';

        if (typeof length !== 'number') {
            throw new TypeError('OTP length argument is missing / not defined');
        }
        length > 10 ? length = 10 : null;
        let createOptions = choices || {};

        let keywords = '';
        if (createOptions.hasOwnProperty('numbers')) {
            createOptions.numbers ? keywords += numbers : null;
        }
        if (createOptions.hasOwnProperty('alphabets')) {
            createOptions.alphabets ? keywords += alphabets : null;
        }
        if (createOptions.hasOwnProperty('upperCaseAlphabets')) {
            createOptions.upperCaseAlphabets ? keywords += upperCaseAlphabets : null;
        }
        if (createOptions.hasOwnProperty('specialChars')) {
            createOptions.specialChars ? keywords += specialChars : null;
        }

        // If Choices are null then all keywords are included in OTP generation
        if (isEmptyObject(createOptions) || (
            !createOptions.hasOwnProperty('numbers') &&
            !createOptions.hasOwnProperty('alphabets') &&
            !createOptions.hasOwnProperty('upperCaseAlphabets') &&
            !createOptions.hasOwnProperty('specialChars'))) {
            keywords = numbers + alphabets + upperCaseAlphabets + specialChars;
        }

        keywords === '' ? keywords = numbers + alphabets + upperCaseAlphabets + specialChars : null;
        let OTP = '';
        let len = keywords.length;
        for (let i = 0; i < length; i++) {
            OTP += keywords[Math.floor(Math.random() * len)];
        }
        return OTP;
    }
}