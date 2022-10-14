import { MAX_WORD_SIZE } from "./env.js";
import { Key } from "./Key.js";
import { WordUtilities } from "./WordUtilities.js";
export class EnterKey extends Key {
    pressed() {
        if (super.game.currentWord.length == MAX_WORD_SIZE) {
            super.game.checkWordIsRight();
            super.game.checkGameIsOver();
            WordUtilities.updateUIAfterANewWord(this.game.pickedWord, this.game.currentWord, this.game.turn);
            super.game.setStateAfterANewWord();
        }
    }
}
