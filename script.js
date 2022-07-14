
const container = document.createElement("div");
document.body.appendChild(container);
container.setAttribute("class", "grid-container");


function generateCells(number) {
    for(let i=0; i < number+1; i++) {
        const row = document.createElement("tr");
        row.id = "row" + i;
        row.setAttribute("class", "grid-item");
        row.innerHTML = "row " + i;
        container.appendChild(row);
    }

}

generateCells(25);



  
