const board = document.querySelector("section .game-table");
board.addEventListener("click", boxSelect);
board.addEventListener("contextmenu", event => event.preventDefault());

// 0 - empty spot, 1 - X, 2 - O
let boardMatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let turnMark = "X";

const title = document.querySelector("h3");

function turnChange(matrixIndex) {
    if(turnMark === "X") {
        boardMatrix[matrixIndex] = 1;
        turnMark = "O";
    } else {
        boardMatrix[matrixIndex] = 2;
        turnMark = "X";
    }
}

function boxSelect(e) {
    const field = e.target.firstChild;
    if(field.className === "") {
        title.style.color = "red";
        title.textContent = "That box is already chosen!";
    }
    else {
        field.className = "";
        field.textContent = turnMark;
        //Field number: parseInt(field.id.replace("box-", ""));
        turnChange(parseInt(field.id.replace("box-", ""))-1);
        if(gameEnd(1)) {
            title.style.color = "white";
            title.textContent = "Winner is: X";
            removeListener();
        }
        else if(gameEnd(2)) {
            title.style.color = "white";
            title.textContent = "Winner is: O";
            removeListener();
        }
        else if(!boardMatrix.includes(0)) {
            title.style.color = "blue";
            title.textContent = "Draw";
            removeListener();
        }
        else {
            title.style.color = "black";
            title.textContent = turnMark + " turn";
        }
    }
}

function gameEnd(mark) {
    //Go through rows with i
    for(let i = 0; i < 3; i++) {
        let isLine = true;
        for(let j = i*3; j < (i+1)*3; j++) {
            if(boardMatrix[j] !== mark) {
                isLine = false;
                break;
            }
        }
        if(isLine) {
            return true;
        }
    }

    //Go through columns with i
    for(let i = 0; i < 3; i++) {
        let isLine = true;
        for(let j = i; j <= (i+6); j+=3) {
            if(boardMatrix[j] !== mark) {
                isLine = false;
                break;
            }
        }
        if(isLine) {
            return true;
        }
    }

    //Check diagonals
    if(boardMatrix[4] === mark && 
        ((boardMatrix[0] === mark && boardMatrix[8] === mark) || (boardMatrix[2] === mark && boardMatrix[6] === mark))) {
        return true;
    }

    return false;

}

function removeListener() {
    board.removeEventListener("click", boxSelect);

}

