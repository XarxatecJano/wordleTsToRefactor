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
var _Game_pickedWord, _Game_actualWord, _Game_turn, _Game_letter, _Game_background, _Game_keyPressedType, _Game_isEnterKey, _Game_isBackSpaceKey;
import { MAX_WORD_SIZE, MAX_ATTEMPTS } from "./env.js";
import { Letter } from "./Letter.js";
import { Backgroud } from "./ChangeBackground.js";
import { KeyPressedType } from "./KeyPressedType.js";
import { IsBackSpaceKey } from "./IsBackspaceKey.js";
import { IsEnterKey } from "./IsEnterKey.js";
export class Game {
    constructor(pickedWord) {
        _Game_pickedWord.set(this, void 0);
        _Game_actualWord.set(this, void 0);
        _Game_turn.set(this, void 0);
        _Game_letter.set(this, void 0);
        _Game_background.set(this, void 0);
        _Game_keyPressedType.set(this, void 0);
        _Game_isEnterKey.set(this, void 0);
        _Game_isBackSpaceKey.set(this, void 0);
        this.checkRightLetters = () => {
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                if (__classPrivateFieldGet(this, _Game_pickedWord, "f")[i] == __classPrivateFieldGet(this, _Game_actualWord, "f")[i]) {
                    __classPrivateFieldGet(this, _Game_background, "f").changeBackgroundPosition(__classPrivateFieldGet(this, _Game_turn, "f"), i, "rightLetter");
                }
            }
        };
        this.checkMisplacedLetters = () => {
            let actualLetter = "";
            let pattern;
            let numberOfCoincidencesPickedWord = 0;
            let numberOfCoincidencesActualWord = 0;
            let differenceOfCoincidences = 0;
            let isMisplacedLetter = true;
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                isMisplacedLetter = true;
                actualLetter = __classPrivateFieldGet(this, _Game_actualWord, "f")[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidencesPickedWord = (__classPrivateFieldGet(this, _Game_pickedWord, "f").match(pattern) || []).length;
                numberOfCoincidencesActualWord = (__classPrivateFieldGet(this, _Game_actualWord, "f").match(pattern) || []).length;
                differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
                if (differenceOfCoincidences == 1) {
                    for (let j = 0; j < MAX_WORD_SIZE; j++) {
                        if (__classPrivateFieldGet(this, _Game_pickedWord, "f")[j] == actualLetter) {
                            isMisplacedLetter = false;
                            break;
                        }
                    }
                }
                if (differenceOfCoincidences == 0 && __classPrivateFieldGet(this, _Game_pickedWord, "f")[i] == __classPrivateFieldGet(this, _Game_actualWord, "f")[i]) {
                    isMisplacedLetter = false;
                }
                if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter)
                    __classPrivateFieldGet(this, _Game_background, "f").changeBackgroundPosition(__classPrivateFieldGet(this, _Game_turn, "f"), i, "misplacedLetter");
            }
        };
        this.checkWrongLetters = () => {
            let actualLetter = "";
            let pattern;
            let numberOfCoincidencesPickedWord = 0;
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                actualLetter = __classPrivateFieldGet(this, _Game_actualWord, "f")[i];
                pattern = new RegExp(actualLetter, "g");
                numberOfCoincidencesPickedWord = (__classPrivateFieldGet(this, _Game_pickedWord, "f").match(pattern) || []).length;
                if (numberOfCoincidencesPickedWord == 0)
                    __classPrivateFieldGet(this, _Game_background, "f").changeBackgroundPosition(__classPrivateFieldGet(this, _Game_turn, "f"), i, "wrongLetter");
            }
        };
        this.updateAfterANewWord = () => {
            this.checkRightLetters();
            this.checkMisplacedLetters();
            this.checkWrongLetters();
            __classPrivateFieldSet(this, _Game_turn, __classPrivateFieldGet(this, _Game_turn, "f") + 1, "f");
            __classPrivateFieldGet(this, _Game_keyPressedType, "f").actualPosition = 0;
            __classPrivateFieldSet(this, _Game_actualWord, "", "f");
        };
        __classPrivateFieldSet(this, _Game_pickedWord, pickedWord, "f");
        __classPrivateFieldSet(this, _Game_actualWord, "", "f");
        __classPrivateFieldSet(this, _Game_turn, 1, "f");
        __classPrivateFieldSet(this, _Game_letter, new Letter(), "f");
        __classPrivateFieldSet(this, _Game_background, new Backgroud(), "f");
        __classPrivateFieldSet(this, _Game_keyPressedType, new KeyPressedType(), "f");
        __classPrivateFieldSet(this, _Game_isBackSpaceKey, new IsBackSpaceKey(), "f");
        __classPrivateFieldSet(this, _Game_isEnterKey, new IsEnterKey(__classPrivateFieldGet(this, _Game_actualWord, "f")), "f");
    }
    get pickedWord() {
        return __classPrivateFieldGet(this, _Game_pickedWord, "f");
    }
    set pickedWord(word) {
        __classPrivateFieldSet(this, _Game_pickedWord, word, "f");
    }
    get actualWord() {
        return __classPrivateFieldGet(this, _Game_actualWord, "f");
    }
    set actualWord(word) {
        __classPrivateFieldSet(this, _Game_actualWord, word, "f");
    }
    get turn() {
        return __classPrivateFieldGet(this, _Game_turn, "f");
    }
    set turn(num) {
        __classPrivateFieldSet(this, _Game_turn, num, "f");
    }
    transformCodeToLetter(code) {
        let letter = "";
        if (code == "Semicolon")
            letter = "Ñ";
        else
            letter = code.split("y")[1];
        return letter;
    }
    newLetter(code) {
        let letter = this.transformCodeToLetter(code);
        __classPrivateFieldGet(this, _Game_letter, "f").newLetter(this.turn, __classPrivateFieldGet(this, _Game_keyPressedType, "f").actualPosition, letter);
        __classPrivateFieldGet(this, _Game_keyPressedType, "f").actualPosition = __classPrivateFieldGet(this, _Game_keyPressedType, "f").actualPosition + 1;
        __classPrivateFieldSet(this, _Game_actualWord, __classPrivateFieldGet(this, _Game_actualWord, "f") + letter, "f");
    }
    checkWordIsRight() {
        if (__classPrivateFieldGet(this, _Game_actualWord, "f") == __classPrivateFieldGet(this, _Game_pickedWord, "f")) {
            location.assign("/winner");
        }
    }
    checkGameIsOver() {
        if (this.turn == MAX_ATTEMPTS) {
            location.assign("/loser");
        }
    }
    // backspacePressed():void{
    //     if (this.#keyPressedType.actualPosition > 0) {
    //         this.#keyPressedType.actualPosition -= 1;
    //         this.#isBackSpaceKey.backspacePressed(this.#turn, this.#keyPressedType.actualPosition);
    //     }
    // }
    newKeyPressed(code) {
        if (__classPrivateFieldGet(this, _Game_keyPressedType, "f").isValidLetter(code))
            this.newLetter(code);
        if (__classPrivateFieldGet(this, _Game_isEnterKey, "f").keyCodeType(code))
            __classPrivateFieldGet(this, _Game_isEnterKey, "f").enterPressed(__classPrivateFieldGet(this, _Game_actualWord, "f"));
        if (__classPrivateFieldGet(this, _Game_isBackSpaceKey, "f").keyCodeType(code))
            __classPrivateFieldGet(this, _Game_isBackSpaceKey, "f").backspacePressed(__classPrivateFieldGet(this, _Game_turn, "f"), __classPrivateFieldGet(this, _Game_keyPressedType, "f").actualPosition);
        __classPrivateFieldGet(this, _Game_background, "f").changeBackgroundKey(code);
    }
}
_Game_pickedWord = new WeakMap(), _Game_actualWord = new WeakMap(), _Game_turn = new WeakMap(), _Game_letter = new WeakMap(), _Game_background = new WeakMap(), _Game_keyPressedType = new WeakMap(), _Game_isEnterKey = new WeakMap(), _Game_isBackSpaceKey = new WeakMap();
