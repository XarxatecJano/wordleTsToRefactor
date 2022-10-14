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
var _Game_pickedWord, _Game_currentWord, _Game_turn, _Game_currentPosition, _Game_userInterface;
import { MAX_WORD_SIZE, MAX_ATTEMPTS, VALID_LETTER_CODES } from "./env.js";
import { UIChanger } from "./UIChanger.js";
export class Game {
    constructor(pickedWord) {
        _Game_pickedWord.set(this, void 0);
        _Game_currentWord.set(this, void 0);
        _Game_turn.set(this, void 0);
        _Game_currentPosition.set(this, void 0);
        _Game_userInterface.set(this, void 0);
        __classPrivateFieldSet(this, _Game_pickedWord, pickedWord, "f");
        __classPrivateFieldSet(this, _Game_currentWord, "", "f");
        __classPrivateFieldSet(this, _Game_turn, 1, "f");
        __classPrivateFieldSet(this, _Game_currentPosition, 0, "f");
        __classPrivateFieldSet(this, _Game_userInterface, new UIChanger(), "f");
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
        return __classPrivateFieldGet(this, _Game_userInterface, "f");
    }
    isValidLetter(code) {
        return VALID_LETTER_CODES.includes(code) && __classPrivateFieldGet(this, _Game_currentPosition, "f") < MAX_WORD_SIZE;
    }
    /*transformCodeToLetter(code: string):string{
        let letter: string = "";
        if (code=="Semicolon") letter = "Ñ";
        else letter = code.split("y")[1];
        return letter;
    }*/
    checkWordIsRight() {
        if (__classPrivateFieldGet(this, _Game_currentWord, "f") == __classPrivateFieldGet(this, _Game_pickedWord, "f")) {
            location.assign("/winner");
        }
    }
    setStateAfterANewWord() {
        __classPrivateFieldSet(this, _Game_turn, __classPrivateFieldGet(this, _Game_turn, "f") + 1, "f");
        __classPrivateFieldSet(this, _Game_currentPosition, 0, "f");
        __classPrivateFieldSet(this, _Game_currentWord, "", "f");
    }
    checkGameIsOver() {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    }
}
_Game_pickedWord = new WeakMap(), _Game_currentWord = new WeakMap(), _Game_turn = new WeakMap(), _Game_currentPosition = new WeakMap(), _Game_userInterface = new WeakMap();
