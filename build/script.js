import { Word } from "./Word.js";
import { Game } from "./Game.js";
import { LetterKey } from "./LetterKey.js";
import { BackspaceKey } from "./BackspaceKey.js";
import { EnterKey } from "./EnterKey.js";
import { InvalidKey } from "./InvalidKey.js";
import { LetterCheck } from "./LetterCheck.js";
import { UIChanger } from "./UIChanger.js";
const wordsCollection = new Word(["JUEGO", "TALAR", "BAILE", "ANDAR", "MONTE", "PLAYA", "PLATA", "ARBOL", "QUESO"]);
const pickedWord = wordsCollection.getRandomWord();
const userInterface = new UIChanger();
const game = new Game(pickedWord, userInterface);
const letterCheck = new LetterCheck(game);
console.log(pickedWord);
function generateKey(code) {
    let returnKey;
    switch (code) {
        case "Enter": {
            returnKey = new EnterKey(game, code, letterCheck);
            break;
        }
        case "Backspace": {
            returnKey = new BackspaceKey(game, code);
            break;
        }
        default: {
            if (letterCheck.isValidLetter(code)) {
                returnKey = new LetterKey(game, code);
            }
            else {
                returnKey = new InvalidKey(game, code);
            }
            break;
        }
    }
    return returnKey;
}
Array.from(document.getElementsByClassName("key")).forEach(element => element.addEventListener("click", (e) => {
    const keyFromHTML = generateKey(e.target.value);
    game.newKeyPressed(keyFromHTML);
}));
document.addEventListener("keydown", (e) => {
    const keyFromKeyboard = generateKey(e.code);
    game.newKeyPressed(keyFromKeyboard);
});
