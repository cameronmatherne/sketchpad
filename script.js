
let color = "black";
const board = document.querySelector('.board');

function generateCells() {

    board.style.gridTemplateColumns = "repeat(40, 1fr)";
    board.style.gridTemplateRows = "repeat(40, 1fr)";

    for(let i=0; i < 1600; i++) {
        let cell = document.createElement('div');
        cell.style.backgroundColor = 'white';

        board.appendChild(cell)
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = color;   
        });

    }
}

function clearBoard() {
    const cells = board.querySelectorAll('.div');
    cells.style.backgroundColor = 'white';
}

generateCells();








  
