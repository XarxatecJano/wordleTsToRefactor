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
var _KeyPressedType_validLetterCodes, _KeyPressedType_actualPosition;
import { MAX_WORD_SIZE } from "./env.js";
export class KeyPressedType {
    constructor() {
        _KeyPressedType_validLetterCodes.set(this, void 0);
        _KeyPressedType_actualPosition.set(this, void 0);
        __classPrivateFieldSet(this, _KeyPressedType_validLetterCodes, ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"], "f");
        __classPrivateFieldSet(this, _KeyPressedType_actualPosition, 0, "f");
    }
    get validLetterCodes() { return __classPrivateFieldGet(this, _KeyPressedType_validLetterCodes, "f"); }
    ;
    set validLetterCodes(letters) { __classPrivateFieldSet(this, _KeyPressedType_validLetterCodes, letters, "f"); }
    ;
    get actualPosition() { return __classPrivateFieldGet(this, _KeyPressedType_actualPosition, "f"); }
    ;
    set actualPosition(num) { __classPrivateFieldSet(this, _KeyPressedType_actualPosition, num, "f"); }
    ;
    isValidLetter(code) {
        return __classPrivateFieldGet(this, _KeyPressedType_validLetterCodes, "f").includes(code) && __classPrivateFieldGet(this, _KeyPressedType_actualPosition, "f") < (MAX_WORD_SIZE);
    }
}
_KeyPressedType_validLetterCodes = new WeakMap(), _KeyPressedType_actualPosition = new WeakMap();
;
