import {IKeyPressed} from "./IKeyPressed";
import {Letter} from "./Letter.js";

export class IsBackSpaceKey implements IKeyPressed {
    #letter: Letter;
    
    constructor(){
        this.#letter = new Letter();
    }
    
    
    keyCodeType(code:string,) : boolean {
        return code=="Backspace";
    }


    backspacePressed(actualPosition:number, turn:number):void{
        if (actualPosition > 0) {
            actualPosition -= 1;
            this.#letter.deleteLetter(turn, actualPosition);
        }
    }
}