import {MAX_WORD_SIZE, MAX_ATTEMPTS, VALID_LETTER_CODES} from "./env.js";
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

    get interface() {
        return this.#userInterface;
    }
    
    isValidLetter(code: string):boolean {
        
        return  VALID_LETTER_CODES.includes(code) && this.#currentPosition < MAX_WORD_SIZE;
     }

    isEnterKey(code: string):boolean {
        return code=="Enter";
    }

    isBackspaceKey(code: string):boolean{
        return code=="Backspace";
    }

    transformCodeToLetter(code: string):string{
        let letter: string = "";
        if (code=="Semicolon") letter = "Ñ";
        else letter = code.split("y")[1];
        return letter;
    }

    newLetter(code: string):void{
        let letter: string = this.transformCodeToLetter(code);
        this.#userInterface.setNewLetter(this.turn, this.currentPosition, letter);
        this.#currentPosition = this.#currentPosition + 1;
        this.#currentWord += letter;
    }

    checkWordIsRight():void{
        if (this.#currentWord == this.#pickedWord){
            location.assign("/winner");
        }
    }

    checkRightLetters = ():void=>{
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (this.#pickedWord[i]==this.#currentWord[i]){
                this.#userInterface.changeBackgroundPosition(this.#turn, i, "rightLetter");
            }
        }
    }

    checkMisplacedLetters = ():void=> {
        let currentLetter: string = "";
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord: number = 0;
        let numberOfCoincidencescurrentWord: number = 0;
        let differenceOfCoincidences: number = 0;
        let isMisplacedLetter: boolean = true;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            isMisplacedLetter = true;
            currentLetter = this.#currentWord[i];
            pattern = new RegExp(currentLetter,"g");
            numberOfCoincidencesPickedWord = (this.#pickedWord.match(pattern)||[]).length;
            numberOfCoincidencescurrentWord = (this.#currentWord.match(pattern)||[]).length;
            differenceOfCoincidences = Math.abs(numberOfCoincidencescurrentWord - numberOfCoincidencesPickedWord);
            if (differenceOfCoincidences==1){
                for (let j=0; j<MAX_WORD_SIZE; j++){
                    if(this.#pickedWord[j]==currentLetter) {
                        isMisplacedLetter = false;
                        break;
                    }
                }
            }
            if (differenceOfCoincidences==0 && this.#pickedWord[i]==this.#currentWord[i]){
                isMisplacedLetter=false;
            }
            if (numberOfCoincidencesPickedWord>0 && isMisplacedLetter) this.#userInterface.changeBackgroundPosition(this.#turn, i, "misplacedLetter");
            
        }
    }

    checkWrongLetters = ():void=>{
        let currentLetter = "";
        let pattern:RegExp;
        let numberOfCoincidencesPickedWord = 0;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            currentLetter = this.#currentWord[i];
            pattern = new RegExp(currentLetter,"g");
            numberOfCoincidencesPickedWord = (this.#pickedWord.match(pattern)||[]).length;
            if (numberOfCoincidencesPickedWord==0) this.#userInterface.changeBackgroundPosition(this.#turn, i, "wrongLetter");
        }
    }

    updateAfterANewWord = ():void=>{
        this.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters();
        this.#turn = this.#turn + 1;
        this.#currentPosition = 0;
        this.#currentWord = "";
    }

    checkGameIsOver():void{
        if (this.turn == MAX_ATTEMPTS){
            location.assign("/loser");
        }
    }

    enterPressed():void{
        if (this.#currentWord.length == MAX_WORD_SIZE){
            this.checkWordIsRight();
            this.checkGameIsOver();
            this.updateAfterANewWord();
        }
    }

    backspacePressed():void{
        if (this.#currentPosition > 0) {
            this.#currentPosition -= 1;
            this.#userInterface.deleteLetter(this.#turn, this.#currentPosition);
        }
    }

    newKeyPressed(code: string):void{ 
        if (this.isValidLetter(code)) this.newLetter(code);
        if (this.isEnterKey(code)) this.enterPressed();
        if (this.isBackspaceKey(code)) this.backspacePressed();
        this.#userInterface.changeBackgroundKey(code);
    }

    
}