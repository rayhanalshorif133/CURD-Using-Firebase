/**
 * title: Generate Push ID for Firebase Realtime Database
 * Description: This snippet generates a unique ID for use with Firebase's Push ID generator.
 * Author: Rayhan Al Shorif
 * Date: 2020-09-13 10:32:38
 */



const generatePushId = (genLen) => {
    // Modeled after base64 web-safe chars, but ordered by ASCII.
    var PUSH_CHARS = '0123456789abcdefghijklmnopqrstuvwxyz';
    var _id = '';
    for (let index = 0; index < genLen; index++) {
        _id += PUSH_CHARS.charAt(Math.floor(Math.random() * PUSH_CHARS.length));
    }

    return _id;
};

module.exports = generatePushId;