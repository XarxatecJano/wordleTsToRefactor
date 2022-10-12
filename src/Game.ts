import {MAX_WORD_SIZE, MAX_ATTEMPTS, VALID_LETTER_CODES} from "./env.js";
import { Key } from "./Key.js";
import {UIChanger} from "./UIChanger.js";

export class Game {
    #pickedWord: string
    #currentWord: string
    #turn: number
    #currentPosition: number
    #userInterface: UIChanger
    constructor(pickedWord: string){
        this.#pickedWord = pickedWord;
        this.#currentWord = "";
        this.#turn = 1;
        this.#currentPosition = 0;
        this.#userInterface = new UIChanger();
    }

    get pickedWord(){
        return this.#pickedWord;
    }

    get currentWord(){
        return this.#currentWord;
    }
    set currentWord(word){
        this.#currentWord = word;
    }

    get turn(){
        return this.#turn;
    }
    set turn(num){
        this.#turn = num;
    }

    get currentPosition(){
        return this.#currentPosition;
    }
    set currentPosition(num){
        this.#currentPosition = num;
    }

    get userInterface() {
        return this.#userInterface;
    }
    

    transformCodeToLetter(code: string):string{
        let letter: string = "";
        if (code=="Semicolon") letter = "Ñ";
        else letter = code.split("y")[1];
        return letter;
    }

    winCondition():void{
        if (this.#currentWord == this.#pickedWord){
            location.assign("/winner");
        }
    }
    
    loseCondition():void{
        if (this.turn == MAX_ATTEMPTS){
            location.assign("/loser");
        }
    }


    newKeyPressed(key: Key):void{
        key.pressed();
        key.game.userInterface.changeBackgroundKey(key.code);
    }

    
}