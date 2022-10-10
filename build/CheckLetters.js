"use strict";
// import {MAX_WORD_SIZE, MAX_ATTEMPTS} from "./env.js";
// export class CheckLetters {
//     checkMisplacedLetters = ():void=> {
//         let actualLetter: string = "";
//         let pattern: RegExp;
//         let numberOfCoincidencesPickedWord: number = 0;
//         let numberOfCoincidencesActualWord: number = 0;
//         let differenceOfCoincidences: number = 0;
//         let isMisplacedLetter: boolean = true;
//         for (let i=0; i<MAX_WORD_SIZE; i++){
//             isMisplacedLetter = true;
//             actualLetter = this.#actualWord[i];
//             pattern = new RegExp(actualLetter,"g");
//             numberOfCoincidencesPickedWord = (this.#pickedWord.match(pattern)||[]).length;
//             numberOfCoincidencesActualWord = (this.#actualWord.match(pattern)||[]).length;
//             differenceOfCoincidences = Math.abs(numberOfCoincidencesActualWord - numberOfCoincidencesPickedWord);
//             if (differenceOfCoincidences==1){
//                 for (let j=0; j<MAX_WORD_SIZE; j++){
//                     if(this.#pickedWord[j]==actualLetter) {
//                         isMisplacedLetter = false;
//                         break;
//                     }
//                 }
//             }
//             if (differenceOfCoincidences==0 && this.#pickedWord[i]==this.#actualWord[i]){
//                 isMisplacedLetter=false;
//             }
//             if (numberOfCoincidencesPickedWord>0 && isMisplacedLetter) this.#background.changeBackgroundPosition(this.#turn, i, "misplacedLetter");
//         }
//     }
//     checkWrongLetters = ():void=>{
//         let actualLetter = "";
//         let pattern:RegExp;
//         let numberOfCoincidencesPickedWord = 0;
//         for (let i=0; i<MAX_WORD_SIZE; i++){
//             actualLetter = this.#actualWord[i];
//             pattern = new RegExp(actualLetter,"g");
//             numberOfCoincidencesPickedWord = (this.#pickedWord.match(pattern)||[]).length;
//             if (numberOfCoincidencesPickedWord==0) this.#background.changeBackgroundPosition(this.#turn, i, "wrongLetter");
//         }
//     }
// }
