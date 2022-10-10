import { MAX_WORD_SIZE } from "./env.js";
import { Game } from "./Game";
export class IsEnterKey extends Game {
    keyCodeType(code) {
        return code == "Enter";
    }
    enterPressed(actualWord) {
        if (actualWord.length == MAX_WORD_SIZE) {
            super.checkWordIsRight();
            super.checkGameIsOver();
            super.updateAfterANewWord();
        }
    }
}
