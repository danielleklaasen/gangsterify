'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const ud = require('urban-dictionary');
function toSlang(input) {
    return ud.random().then((result) => {
        return result.example;
    }).catch((error) => {
        console.error(error.message);
        return input;
    });
}
exports.toSlang = toSlang;
