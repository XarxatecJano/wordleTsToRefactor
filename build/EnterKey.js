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
var _EnterKey_letterCheck;
import { MAX_WORD_SIZE } from "./env.js";
import { Key } from "./Key.js";
export class EnterKey extends Key {
    constructor(game, code, letterCheck) {
        super(game, code);
        _EnterKey_letterCheck.set(this, void 0);
        __classPrivateFieldSet(this, _EnterKey_letterCheck, letterCheck, "f");
    }
    pressed() {
        if (super.game.currentWord.length == MAX_WORD_SIZE) {
            super.game.winCondition();
            super.game.loseCondition();
            __classPrivateFieldGet(this, _EnterKey_letterCheck, "f").updateAfterANewWord();
        }
    }
}
_EnterKey_letterCheck = new WeakMap();
