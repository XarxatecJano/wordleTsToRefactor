
import { MAX_WORD_SIZE} from "./env.js";
import { Key } from "./Key.js";


export class EnterKey extends Key {
    
    pressed(): void {
        if (super.game.currentWord.length == MAX_WORD_SIZE){
            super.game.checkWordIsRight();
            super.game.checkGameIsOver();
            super.game.updateAfterANewWord();
        }
    }
}