export class UIChanger {
    setNewLetter(turn, position, letter) {
        Array.from(document.getElementById(`row_${turn}`).children)[position].textContent = letter;
    }
    deleteLetter(turn, position) {
        Array.from(document.getElementById(`row_${turn}`).children)[position].textContent = "";
    }
    changeBackgroundPosition(turn, position, state) {
        let positionClass = "cell-grey";
        if (state == "rightLetter")
            positionClass = "cell-green";
        if (state == "misplacedLetter")
            positionClass = "cell-orange";
        Array.from(document.getElementById(`row_${turn}`).children)[position].classList.add(positionClass);
    }
    changeBackgroundKey(code, currentPosition) {
        const keys = document.getElementsByClassName("key");
        const pressedKeys = document.getElementsByClassName("keyPressed");
        if (code === "Backspace") {
            pressedKeys[pressedKeys.length - 1].classList.remove("keyPressed");
        }
        for (let key of keys) {
            if (key.value == code && code !== "Enter" && code !== "Backspace" && currentPosition <= 5) {
                key.classList.add("keyPressed");
            }
        }
    }
}
