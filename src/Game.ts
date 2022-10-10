import {MAX_WORD_SIZE, MAX_ATTEMPTS} from "./env.js";

// import {Letter} from "./Letter.js";
import {Backgroud} from "./ChangeBackground.js"
import {KeyPressedType} from "./KeyPressedType.js";
import { IsBackSpaceKey } from "./IsBackspaceKey.js";
import { IsEnterKey } from "./IsEnterKey.js";


export class Game  {
    #pickedWord: string;
    #actualWord: string;
    #turn: number;
    // #letter: Letter;
    #background: Backgroud;
    #keyPressedType: KeyPressedType;
    #isEnterKey: IsEnterKey;
    #isBackSpaceKey: IsBackSpaceKey;


    
    constructor(pickedWord: string){
        this.#pickedWord = pickedWord;
        this.#actualWord = "";
        this.#turn = 1;
        // this.#letter = new Letter();
        this.#background = new Backgroud();
        this.#keyPressedType = new KeyPressedType();
        this.#isBackSpaceKey = new IsBackSpaceKey();
        this.#isEnterKey = new IsEnterKey(this.#actualWord);

    }

    get pickedWord(){
        return this.#pickedWord;
    }
    set pickedWord(word){
        this.#pickedWord = word;
    }

    get actualWord(){
        return this.#actualWord;
    }
    set actualWord(word){
        this.#actualWord = word;
    }

    get turn(){
        return this.#turn;
    }
    set turn(num){
        this.#turn = num;
    }

    transformCodeToLetter(code: string):string{
        let letter: string = "";
        if (code=="Semicolon") letter = "Ñ";
        else letter = code.split("y")[1];
        return letter;
    }

    newLetter(code: string):void{
        let letter: string = this.transformCodeToLetter(code);
        this.#letter.newLetter(this.turn, this.#keyPressedType.actualPosition, letter);
        this.#keyPressedType.actualPosition = this.#keyPressedType.actualPosition + 1;
        this.#actualWord += letter;
    }

    checkWordIsRight():void{
        if (this.#actualWord == this.#pickedWord){
            location.assign("/winner");
        }
    }

    checkRightLetters = ():void=>{
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (this.#pickedWord[i]==this.#actualWord[i]){
                this.#background.changeBackgroundPosition(this.#turn, i, "rightLetter");
            }
        }
    }

    checkMisplacedLetters = ():void=> {
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
            if (differenceOfCoincidences==1){
                for (let j=0; j<MAX_WORD_SIZE; j++){
                    if(this.#pickedWord[j]==actualLetter) {
                        isMisplacedLetter = false;
                        break;
                    }
                }
            }
            if (differenceOfCoincidences==0 && this.#pickedWord[i]==this.#actualWord[i]){
                isMisplacedLetter=false;
            }
            if (numberOfCoincidencesPickedWord>0 && isMisplacedLetter) this.#background.changeBackgroundPosition(this.#turn, i, "misplacedLetter");
            
        }
    }

    checkWrongLetters = ():void=>{
        let actualLetter = "";
        let pattern:RegExp;
        let numberOfCoincidencesPickedWord = 0;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            actualLetter = this.#actualWord[i];
            pattern = new RegExp(actualLetter,"g");
            numberOfCoincidencesPickedWord = (this.#pickedWord.match(pattern)||[]).length;
            if (numberOfCoincidencesPickedWord==0) this.#background.changeBackgroundPosition(this.#turn, i, "wrongLetter");
        }
    }

    updateAfterANewWord = ():void=>{
        this.checkRightLetters();
        this.checkMisplacedLetters();
        this.checkWrongLetters();
        this.#turn = this.#turn + 1;
        this.#keyPressedType.actualPosition = 0;
        this.#actualWord = "";
    }

    checkGameIsOver():void{
        if (this.turn == MAX_ATTEMPTS){
            location.assign("/loser");
        }
    }

    // backspacePressed():void{
    //     if (this.#keyPressedType.actualPosition > 0) {
    //         this.#keyPressedType.actualPosition -= 1;
    //         this.#isBackSpaceKey.backspacePressed(this.#turn, this.#keyPressedType.actualPosition);
    //     }
    // }

    newKeyPressed(code: string):void{ 
        if (this.#keyPressedType.isValidLetter(code)) this.newLetter(code);
        if (this.#isEnterKey.keyCodeType(code)) this.#isEnterKey.enterPressed(this.#actualWord);
        if (this.#isBackSpaceKey.keyCodeType(code)) this.#isBackSpaceKey.backspacePressed(this.#turn, this.#keyPressedType.actualPosition) ;
        this.#background.changeBackgroundKey(code);
    }

    
}