
const board = document.querySelector('.board');
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";




function generateCells() {
    for(let i=0; i < 256; i++) {
        let cell = document.createElement('div');
        cell.setAttribute("class", "cell");
        cell.style.backgroundColor = 'white';
        cell.style.border = '1px solid black';
        board.appendChild(cell)

    }
}

const changeCell = document.querySelector('.cell');



generateCells();



  
