"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeSpace = void 0;
const removeSpace = (str) => {
    return str.replace(/\s/g, '_');
};
exports.removeSpace = removeSpace;
