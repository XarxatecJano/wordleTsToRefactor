import {MAX_WORD_SIZE, MAX_ATTEMPTS, VALID_LETTER_CODES} from "./env.js";
import { Key } from "./Key.js";
import {UIChanger} from "./UIChanger.js";
import {WordUtilities} from './WordUtilities.js';

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
    
    isValidLetter(code: string):boolean {
        
        return  VALID_LETTER_CODES.includes(code) && this.#currentPosition < MAX_WORD_SIZE;
     }

    transformCodeToLetter(code: string):string{
        let letter: string = "";
        if (code=="Semicolon") letter = "Ñ";
        else letter = code.split("y")[1];
        return letter;
    }


    checkWordIsRight():void{
        if (this.#currentWord == this.#pickedWord){
            location.assign("/winner");
        }
    }

    setStateAfterANewWord():void{
        this.#turn = this.#turn + 1;
        this.#currentPosition = 0;
        this.#currentWord = "";
    }

    updateUIAfterANewWord = ():void=>{
        WordUtilities.checkRightLetters(this.#pickedWord, this.#currentWord, this.#turn);
        WordUtilities.checkMisplacedLetters(this.#pickedWord, this.#currentWord, this.#turn);
        WordUtilities.checkWrongLetters(this.#pickedWord, this.#currentWord, this.#turn);
    }

    checkGameIsOver():void{
        if (this.turn == MAX_ATTEMPTS){
            location.assign("/loser");
        }
    }


    newKeyPressed(key: Key):void{
        key.pressed();
        key.game.userInterface.changeBackgroundKey(key.code);
    }

    
}