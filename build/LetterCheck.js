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
var _LetterCheck_game;
import { MAX_WORD_SIZE, VALID_LETTER_CODES } from "./env.js";
export class LetterCheck {
    constructor(game) {
        _LetterCheck_game.set(this, void 0);
        this.checkRightLetters = () => {
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                if (__classPrivateFieldGet(this, _LetterCheck_game, "f").pickedWord[i] == __classPrivateFieldGet(this, _LetterCheck_game, "f").currentWord[i]) {
                    __classPrivateFieldGet(this, _LetterCheck_game, "f").userInterface.changeBackgroundPosition(__classPrivateFieldGet(this, _LetterCheck_game, "f").turn, i, "rightLetter");
                }
            }
        };
        this.checkMisplacedLetters = () => {
            let currentLetter = "";
            let pattern;
            let numberOfCoincidencesPickedWord = 0;
            let numberOfCoincidencescurrentWord = 0;
            let differenceOfCoincidences = 0;
            let isMisplacedLetter = true;
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                isMisplacedLetter = true;
                currentLetter = __classPrivateFieldGet(this, _LetterCheck_game, "f").currentWord[i];
                pattern = new RegExp(currentLetter, "g");
                numberOfCoincidencesPickedWord = (__classPrivateFieldGet(this, _LetterCheck_game, "f").pickedWord.match(pattern) || []).length;
                numberOfCoincidencescurrentWord = (__classPrivateFieldGet(this, _LetterCheck_game, "f").currentWord.match(pattern) || []).length;
                differenceOfCoincidences = Math.abs(numberOfCoincidencescurrentWord - numberOfCoincidencesPickedWord);
                if (differenceOfCoincidences == 1) {
                    for (let j = 0; j < MAX_WORD_SIZE; j++) {
                        if (__classPrivateFieldGet(this, _LetterCheck_game, "f").pickedWord[j] == currentLetter) {
                            isMisplacedLetter = false;
                            break;
                        }
                    }
                }
                if (differenceOfCoincidences == 0 && __classPrivateFieldGet(this, _LetterCheck_game, "f").pickedWord[i] == __classPrivateFieldGet(this, _LetterCheck_game, "f").currentWord[i]) {
                    isMisplacedLetter = false;
                }
                if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter)
                    __classPrivateFieldGet(this, _LetterCheck_game, "f").userInterface.changeBackgroundPosition(__classPrivateFieldGet(this, _LetterCheck_game, "f").turn, i, "misplacedLetter");
            }
        };
        this.checkWrongLetters = () => {
            let currentLetter = "";
            let pattern;
            let numberOfCoincidencesPickedWord = 0;
            for (let i = 0; i < MAX_WORD_SIZE; i++) {
                currentLetter = __classPrivateFieldGet(this, _LetterCheck_game, "f").currentWord[i];
                pattern = new RegExp(currentLetter, "g");
                numberOfCoincidencesPickedWord = (__classPrivateFieldGet(this, _LetterCheck_game, "f").pickedWord.match(pattern) || []).length;
                if (numberOfCoincidencesPickedWord == 0)
                    __classPrivateFieldGet(this, _LetterCheck_game, "f").userInterface.changeBackgroundPosition(__classPrivateFieldGet(this, _LetterCheck_game, "f").turn, i, "wrongLetter");
            }
        };
        this.updateAfterANewWord = () => {
            this.checkRightLetters();
            this.checkMisplacedLetters();
            this.checkWrongLetters();
            __classPrivateFieldGet(this, _LetterCheck_game, "f").turn = __classPrivateFieldGet(this, _LetterCheck_game, "f").turn + 1;
            __classPrivateFieldGet(this, _LetterCheck_game, "f").currentPosition = 0;
            __classPrivateFieldGet(this, _LetterCheck_game, "f").currentWord = "";
        };
        __classPrivateFieldSet(this, _LetterCheck_game, game, "f");
    }
    isValidLetter(code) {
        return VALID_LETTER_CODES.includes(code) && __classPrivateFieldGet(this, _LetterCheck_game, "f").currentPosition < MAX_WORD_SIZE;
    }
}
_LetterCheck_game = new WeakMap();
