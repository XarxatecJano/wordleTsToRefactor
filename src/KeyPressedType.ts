import {MAX_WORD_SIZE} from "./env.js";

export class KeyPressedType {
    #validLetterCodes: string[];
    #actualPosition: number
    constructor() {
        this.#validLetterCodes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        this.#actualPosition = 0
    }


    get validLetterCodes() {return this.#validLetterCodes};
    set validLetterCodes(letters) {this.#validLetterCodes = letters};

    get actualPosition(){return this.#actualPosition};
    set actualPosition(num){this.#actualPosition = num};

    isValidLetter(code: string):boolean {
        return  this.#validLetterCodes.includes(code) && this.#actualPosition < (MAX_WORD_SIZE);
    }
};