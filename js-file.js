const container = document.querySelector("#container");

// generate 16x16 
function generateGrid() {
    for (let i = 0; i < 16*16; i++) {
        let gridItem = document.createElement("div");
        gridItem.textContent = i+1;
        gridItem.className = "grid-item";
        container.appendChild(gridItem);
    }
}

generateGrid();