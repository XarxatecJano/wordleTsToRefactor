import { Key } from "./Key.js";
import { LetterUtilities } from "./LetterUtilities.js";

export class LetterKey extends Key {
    
    pressed(): void {
        const letter = LetterUtilities.transformCodeToLetter(super.code);
        super.game.userInterface.setNewLetter(super.game.turn, super.game.currentPosition, letter);
        super.game.currentPosition = super.game.currentPosition + 1;
        super.game.currentWord += letter;
    }
}