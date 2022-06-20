"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flow = exports.compactDefined = exports.isDefined = void 0;
// import { isDefined } from './typescript';
const isDefined = (x) => x !== null && x !== undefined;
exports.isDefined = isDefined;
/** Takes a dictionary containing nullish values and returns a dictionary of all the defined
 * (non-nullish) values.
 */
const compactDefined = (obj) => Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    return Object.assign(Object.assign({}, acc), ((0, exports.isDefined)(value) ? { [key]: value } : {}));
}, {});
exports.compactDefined = compactDefined;
function flow(...fns) {
    const len = fns.length - 1;
    return function (...x) {
        let y = fns[0].apply(this, x);
        for (let i = 1; i <= len; i++) {
            y = fns[i].call(this, y);
        }
        return y;
    };
}
exports.flow = flow;
