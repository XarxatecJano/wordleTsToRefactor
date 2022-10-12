import { MAX_WORD_SIZE, VALID_LETTER_CODES } from "./env.js";
import { Game } from "./Game.js";


export class LetterCheck {
  #game: Game;
  constructor (game: Game){
    this.#game = game;

  }
  checkRightLetters = ():void=>{
  for(let i=0; i<MAX_WORD_SIZE; i++){
      if (this.#game.pickedWord[i]==this.#game.currentWord[i]){
          this.#game.userInterface.changeBackgroundPosition(this.#game.turn, i, "rightLetter");
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
      currentLetter = this.#game.currentWord[i];
      pattern = new RegExp(currentLetter,"g");
      numberOfCoincidencesPickedWord = (this.#game.pickedWord.match(pattern)||[]).length;
      numberOfCoincidencescurrentWord = (this.#game.currentWord.match(pattern)||[]).length;
      differenceOfCoincidences = Math.abs(numberOfCoincidencescurrentWord - numberOfCoincidencesPickedWord);
      if (differenceOfCoincidences==1){
          for (let j=0; j<MAX_WORD_SIZE; j++){
              if(this.#game.pickedWord[j]==currentLetter) {
                  isMisplacedLetter = false;
                  break;
              }
          }
      }
      if (differenceOfCoincidences==0 && this.#game.pickedWord[i]==this.#game.currentWord[i]){
          isMisplacedLetter=false;
      }
      if (numberOfCoincidencesPickedWord>0 && isMisplacedLetter) this.#game.userInterface.changeBackgroundPosition(this.#game.turn, i, "misplacedLetter");
      
  }
}

  checkWrongLetters = ():void=>{
  let currentLetter = "";
  let pattern:RegExp;
  let numberOfCoincidencesPickedWord = 0;
  for (let i=0; i<MAX_WORD_SIZE; i++){
      currentLetter = this.#game.currentWord[i];
      pattern = new RegExp(currentLetter,"g");
      numberOfCoincidencesPickedWord = (this.#game.pickedWord.match(pattern)||[]).length;
      if (numberOfCoincidencesPickedWord==0) this.#game.userInterface.changeBackgroundPosition(this.#game.turn, i, "wrongLetter");
  }
}
  isValidLetter(code: string):boolean {
        
   return  VALID_LETTER_CODES.includes(code) && this.#game.currentPosition < MAX_WORD_SIZE;
}

  updateAfterANewWord = ():void=>{
    this.checkRightLetters();
    this.checkMisplacedLetters();
    this.checkWrongLetters();
    this.#game.turn = this.#game.turn + 1;
    this.#game.currentPosition = 0;
    this.#game.currentWord = "";
}
 
}