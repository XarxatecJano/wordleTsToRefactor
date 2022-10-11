import { Game } from "./Game.js";

export abstract class Key {
    #game: Game;
    #code: string;
    constructor(game: Game, code: string){
        this.#game = game;
        this.#code = code;
    }
    get game():Game {
        return this.#game;
    }
    get code():string {
        return this.#code;
    }

    abstract pressed():void;
}