import { Key } from "./Key.js";


export class BackspaceKey extends Key {
    
    pressed(): void {
        if (super.game.currentPosition > 0) {
            super.game.currentPosition -=1;
            super.game.userInterface.deleteLetter(this.game.turn, this.game.currentPosition);
            super.game.currentWord = super.game.currentWord.slice(0, -1);
        }
    }
}