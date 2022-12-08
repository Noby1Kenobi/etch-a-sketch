const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");

resizeBtn.addEventListener("click", () => {
    let rows = prompt("Enter new number of squares per row:");
    let cols = prompt("Enter new number of squares per row:");
    generateGrid(rows, cols);
});

// generate a row x col square grid
function generateGrid(rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        let gridItem = document.createElement("div");
        gridItem.textContent = i+1;
        gridItem.className = "grid-item";
        container.appendChild(gridItem);
    }
}

// start website with a 16x16 grid
generateGrid(16, 16);