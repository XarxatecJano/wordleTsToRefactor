import {IKeyPressed} from "./IKeyPressed";
import {MAX_WORD_SIZE} from "./env.js";
import {Game} from "./Game";

export class IsEnterKey extends Game implements IKeyPressed {
    keyCodeType(code:string,) : boolean {
        return code=="Enter";
    }

    enterPressed(actualWord:string):void{
        if (actualWord.length == MAX_WORD_SIZE){
            super.checkWordIsRight();
            super.checkGameIsOver();
            super.updateAfterANewWord();
        }
    }
}