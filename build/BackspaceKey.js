import { Key } from "./Key.js";
export class BackspaceKey extends Key {
    pressed() {
        if (super.game.currentPosition > 0) {
            super.game.currentPosition -= 1;
            super.game.userInterface.deleteLetter(this.game.turn, this.game.currentPosition);
        }
    }
}
