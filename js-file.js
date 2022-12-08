const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");

resizeBtn.addEventListener("click", () => {
    let row = prompt("Enter new number of squares per row:", row);
    let col = prompt("Enter new number of squares per row:", col);
    // generateGrid(row, col);
})

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