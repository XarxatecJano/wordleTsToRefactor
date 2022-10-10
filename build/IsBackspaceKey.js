var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _IsBackSpaceKey_letter;
import { Letter } from "./Letter.js";
export class IsBackSpaceKey {
    constructor() {
        _IsBackSpaceKey_letter.set(this, void 0);
        __classPrivateFieldSet(this, _IsBackSpaceKey_letter, new Letter(), "f");
    }
    keyCodeType(code) {
        return code == "Backspace";
    }
    backspacePressed(actualPosition, turn) {
        if (actualPosition > 0) {
            actualPosition -= 1;
            __classPrivateFieldGet(this, _IsBackSpaceKey_letter, "f").deleteLetter(turn, actualPosition);
        }
    }
}
_IsBackSpaceKey_letter = new WeakMap();
