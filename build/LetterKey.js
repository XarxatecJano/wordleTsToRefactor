import { Key } from "./Key.js";
export class LetterKey extends Key {
    pressed() {
        const letter = super.game.transformCodeToLetter(super.code);
        super.game.userInterface.setNewLetter(super.game.turn, super.game.currentPosition, letter);
        super.game.currentPosition = super.game.currentPosition + 1;
        super.game.currentWord += letter;
    }
}
