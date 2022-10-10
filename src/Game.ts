import {MAX_WORD_SIZE, MAX_ATTEMPTS} from "./env.js";
import {Background, Letter} from "./Interface.js";


export class Game {
    #pickedWord: string
    #actualWord: string
    #turn: number
    #actualPosition: number
    #validLetterCodes: string[]
    #background: Background
    #letterClass: Letter
    constructor(pickedWord: string) {
        this.#pickedWord = pickedWord;
        this.#actualWord = "";
        this.#turn = 1;
        this.#actualPosition = 0;
        this.#validLetterCodes = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Semicolon"];
        this.#background = new Background();
        this.#letterClass = new Letter();
    }

    get pickedWord() {
        return this.#pickedWord;
    }
    set pickedWord(word) {
        this.#pickedWord = word;
    }

    get actualWord() {
        return this.#actualWord;
    }
    set actualWord(word) {
        this.#actualWord = word;
    }

    get turn() {
        return this.#turn;
    }
    set turn(num) {
        this.#turn = num;
    }

    get actualPosition() {
        return this.#actualPosition;
    }
    set actualPosition(num) {
        this.#actualPosition = num;
    }

    get validLetterCodes() {
        return this.#validLetterCodes
    }
    set validLetterCodes(letters) {
        this.#validLetterCodes = letters;
    }

    get background() {
        return this.#background;
    }
    set background(i) {
        this.#background = i;
    }
    
    isValidLetter(code: string):boolean { 
        return this.#validLetterCodes.includes(code) && this.#actualPosition < MAX_WORD_SIZE;
     }

    isEnterKey(code: string):boolean {
        return code == "Enter";
    }

    isBackspaceKey(code: string):boolean {
        return code == "Backspace";
    }

    transformCodeToLetter(code: string):string {
        let letter: string = "";
        if (code == "Semicolon") letter = "Ñ";
        else letter = code.split("y")[1];
        return letter;
    }

    newLetter(code: string):void {
        let letter: string = this.transformCodeToLetter(code);
        this.#letterClass.setNewLetter(this.turn, this.actualPosition, letter);
        this.#actualPosition = this.#actualPosition + 1;
        this.#actualWord += letter;
    }

    checkWordIsRight():void {
        if (this.#actualWord == this.#pickedWord) location.assign("/winner");
    }

    checkGameIsOver():void {
        if (this.turn == MAX_ATTEMPTS) location.assign("/loser");    
    }

    checkRightLetters():void {
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (this.#pickedWord[i] == this.#actualWord[i]) this.#background.changeBackgroundPosition(this.#turn, i, "rightLetter");  
        }
    }

    checkMisplacedLetters():void {
        let actualLetter: string = "";
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord: number = 0;
        let numberOfCoincidencesActualWord: number = 0;
        let differenceOfCoincidences: number = 0;
        let isMisplacedLetter: boolean = true;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            isMisplacedLetter = true;
            actualLetter = this.#actualWord[i];
            pattern = new RegExp(actualLetter,"g");
            numberOfCoincidencesPickedWord = (this.#pickedWord.match(pattern)||[]).length;
            numberOfCoincidencesActualWord = (this.#actualWord.match(pattern)||[]).length;
            differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
            if (differenceOfCoincidences == 1){
                for (let j=0; j<MAX_WORD_SIZE; j++) {
                    if(this.#pickedWord[j] == actualLetter) {
                        isMisplacedLetter = false;
                        break;
                    }
                }
            }
            if (differenceOfCoincidences == 0 && this.#pickedWord[i]==this.#actualWord[i]) isMisplacedLetter=false;
            
            if (numberOfCoincidencesPickedWord > 0 && isMisplacedLetter) this.#background.changeBackgroundPosition(this.#turn, i, "misplacedLetter");  
        }
    }

    checkWrongLetters():void {
        let actualLetter: string = "";
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord: number = 0;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            actualLetter = this.#actualWord[i];
            pattern = new RegExp(actualLetter,"g");
            numberOfCoincidencesPickedWord = (this.#pickedWord.match(pattern)||[]).length;
            if (numberOfCoincidencesPickedWord == 0) this.#background.changeBackgroundPosition(this.#turn, i, "wrongLetter");
        }
    }

    updateAfterANewWord():void {
        this.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters();
        this.#turn = this.#turn + 1;
        this.#actualPosition = 0;
        this.#actualWord = "";
    }

    enterPressed():void {
        
        if (this.#actualWord.length == MAX_WORD_SIZE){
            this.checkWordIsRight();
            this.checkGameIsOver();
            for (let i=0; i<this.#actualWord.length; i++){
                this.#background.changeBackgroundKey(`Key${this.#actualWord[i]}`); 
            }
            this.updateAfterANewWord();  
        }
    }

    backspacePressed():void {
        if (this.#actualPosition > 0) {
            this.#actualPosition -= 1;
            this.#letterClass.deleteLetter(this.#turn, this.#actualPosition);
            this.#actualWord = this.#actualWord.slice(0, -1);
        }
    }

    newKeyPressed(code: string):void { 
        if (this.isValidLetter(code)) this.newLetter(code);
        if (this.isEnterKey(code)) this.enterPressed();
        if (this.isBackspaceKey(code)) this.backspacePressed();  
    }   
}