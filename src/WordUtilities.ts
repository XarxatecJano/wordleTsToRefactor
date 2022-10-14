import {UIChanger} from './UIChanger.js';
import {MAX_WORD_SIZE} from './env.js';

export class WordUtilities {
    
    static checkRightLetters(pickedWord: string, currentWord:string, turn: number):void{
        for(let i=0; i<MAX_WORD_SIZE; i++){
            if (pickedWord[i]==currentWord[i]){
                UIChanger.changeBackgroundPosition(turn, i, "rightLetter");
            }
        }
    }

    static checkWrongLetters(pickedWord: string, currentWord:string, turn: number):void{
        let currentLetter = "";
        let pattern:RegExp;
        let numberOfCoincidencesPickedWord = 0;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            currentLetter = currentWord[i];
            pattern = new RegExp(currentLetter,"g");
            numberOfCoincidencesPickedWord = (pickedWord.match(pattern)||[]).length;
            if (numberOfCoincidencesPickedWord==0) UIChanger.changeBackgroundPosition(turn, i, "wrongLetter");
        }
    }

    static checkMisplacedLetters(pickedWord: string, currentWord:string, turn: number):void{
        let currentLetter: string = "";
        let pattern: RegExp;
        let numberOfCoincidencesPickedWord: number = 0;
        let numberOfCoincidencescurrentWord: number = 0;
        let differenceOfCoincidences: number = 0;
        let isMisplacedLetter: boolean = true;
        for (let i=0; i<MAX_WORD_SIZE; i++){
            isMisplacedLetter = true;
            currentLetter = currentWord[i];
            pattern = new RegExp(currentLetter,"g");
            numberOfCoincidencesPickedWord = (pickedWord.match(pattern)||[]).length;
            numberOfCoincidencescurrentWord = (currentWord.match(pattern)||[]).length;
            differenceOfCoincidences = Math.abs(numberOfCoincidencescurrentWord - numberOfCoincidencesPickedWord);
            if (differenceOfCoincidences==1){
                for (let j=0; j<MAX_WORD_SIZE; j++){
                    if(pickedWord[j]==currentLetter) {
                        isMisplacedLetter = false;
                        break;
                    }
                }
            }
            if (differenceOfCoincidences==0 && pickedWord[i]==currentWord[i]){
                isMisplacedLetter=false;
            }
            if (numberOfCoincidencesPickedWord>0 && isMisplacedLetter) UIChanger.changeBackgroundPosition(turn, i, "misplacedLetter");
            
        }
    }
}
