
import { MAX_WORD_SIZE} from "./env.js";
import { Game } from "./Game.js";
import { Key } from "./Key.js";
import {LetterCheck} from "./LetterCheck.js"


export class EnterKey extends Key {
    #letterCheck: LetterCheck;
    constructor(game: Game, code: string, letterCheck: LetterCheck){
        super(game, code);
        this.#letterCheck = letterCheck;

    }
    
    pressed(): void {
        if (super.game.currentWord.length == MAX_WORD_SIZE){
            super.game.winCondition();
            super.game.loseCondition();
            this.#letterCheck.updateAfterANewWord();
            
        }
    }
}