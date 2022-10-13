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
var _Game_pickedWord, _Game_currentWord, _Game_turn, _Game_currentPosition, _Game_ui;
import { MAX_ATTEMPTS } from "./env.js";
export class Game {
    constructor(pickedWord, ui) {
        _Game_pickedWord.set(this, void 0);
        _Game_currentWord.set(this, void 0);
        _Game_turn.set(this, void 0);
        _Game_currentPosition.set(this, void 0);
        _Game_ui.set(this, void 0);
        __classPrivateFieldSet(this, _Game_pickedWord, pickedWord, "f");
        __classPrivateFieldSet(this, _Game_currentWord, "", "f");
        __classPrivateFieldSet(this, _Game_turn, 1, "f");
        __classPrivateFieldSet(this, _Game_currentPosition, 0, "f");
        __classPrivateFieldSet(this, _Game_ui, ui, "f");
    }
    get pickedWord() {
        return __classPrivateFieldGet(this, _Game_pickedWord, "f");
    }
    get currentWord() {
        return __classPrivateFieldGet(this, _Game_currentWord, "f");
    }
    set currentWord(word) {
        __classPrivateFieldSet(this, _Game_currentWord, word, "f");
    }
    get turn() {
        return __classPrivateFieldGet(this, _Game_turn, "f");
    }
    set turn(num) {
        __classPrivateFieldSet(this, _Game_turn, num, "f");
    }
    get currentPosition() {
        return __classPrivateFieldGet(this, _Game_currentPosition, "f");
    }
    set currentPosition(num) {
        __classPrivateFieldSet(this, _Game_currentPosition, num, "f");
    }
    get userInterface() {
        return __classPrivateFieldGet(this, _Game_ui, "f");
    }
    transformCodeToLetter(code) {
        let letter = "";
        if (code == "Semicolon")
            letter = "Ñ";
        else
            letter = code.split("y")[1];
        return letter;
    }
    winCondition() {
        if (__classPrivateFieldGet(this, _Game_currentWord, "f") == __classPrivateFieldGet(this, _Game_pickedWord, "f")) {
            location.assign("/winner");
        }
    }
    loseCondition() {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    }
    newKeyPressed(key) {
        key.pressed();
        __classPrivateFieldGet(key.game, _Game_ui, "f").changeBackgroundKey(key.code, __classPrivateFieldGet(this, _Game_currentPosition, "f"));
    }
}
_Game_pickedWord = new WeakMap(), _Game_currentWord = new WeakMap(), _Game_turn = new WeakMap(), _Game_currentPosition = new WeakMap(), _Game_ui = new WeakMap();
