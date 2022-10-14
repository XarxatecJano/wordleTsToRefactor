import {Word} from "./Word.js";
import {Game} from "./Game.js";
import {LetterKey} from "./LetterKey.js";
import {BackspaceKey} from "./BackspaceKey.js";
import {EnterKey} from "./EnterKey.js"
import {InvalidKey} from "./InvalidKey.js";
import { Key } from "./Key.js";


const wordsCollection: Word = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
const pickedWord: string = wordsCollection.getRandomWord();
console.log(pickedWord);

const game: Game = new Game(pickedWord);

function generateKey(code: string): Key{
    let returnKey: Key;
    switch (code){
        case "Enter": {
            returnKey = new EnterKey(game, code);
            break;
        }
        case "Backspace": {
            returnKey = new BackspaceKey(game, code);
            break;
        }
        default: {
            if(game.isValidLetter(code)) {
                returnKey = new LetterKey(game, code);
            } else {
                returnKey = new InvalidKey(game, code);
            }
            break;
        }

    }

    return returnKey;
}

Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e)=>{
    const keyFromHTML:Key = generateKey((<HTMLButtonElement>e.target).value);
    keyFromHTML.newKeyPressed();
}));

document.addEventListener("keydown", (e)=>{
    const keyFromKeyboard:Key = generateKey(e.code);
    keyFromKeyboard.newKeyPressed();
});