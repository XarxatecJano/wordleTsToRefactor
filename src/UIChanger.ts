export class UIChanger {
    setNewLetter(turn: number,position: number, letter: string) {
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].textContent = letter;
    }
    deleteLetter(turn: number, position: number) {
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].textContent = "";
    }
    changeBackgroundPosition(turn: number, position: number, state: string){
        let positionClass = "cell-grey";
        if (state=="rightLetter") positionClass = "cell-green";
        if (state=="misplacedLetter") positionClass = "cell-orange";
        Array.from(document.getElementById(`row_${turn}`)!.children)[position].classList.add(positionClass);
    }
    changeBackgroundKey(code: string, currentPosition: number){
        const keys: any = document.getElementsByClassName("key");
        const pressedKeys: any = document.getElementsByClassName("keyPressed");
        if(code === "Backspace"){
            pressedKeys[pressedKeys.length -1].classList.remove("keyPressed");
        }
        for (let key of keys) {
            if (key.value == code && code !== "Enter" && code !=="Backspace" && currentPosition <= 5){
                key.classList.add("keyPressed");
            }
        }
    }
}
