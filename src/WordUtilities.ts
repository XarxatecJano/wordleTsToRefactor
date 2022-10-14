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
}
