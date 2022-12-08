const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");

resizeBtn.addEventListener("click", () => {
    let row = prompt("Enter new number of squares per row:", row);
    let col = prompt("Enter new number of squares per row:", col);
    // generateGrid(row, col);
})

// generate a row x col square grid
function generateGrid(row, col) {
    for (let i = 0; i < (row * col); i++) {
        let gridItem = document.createElement("div");
        gridItem.textContent = i+1;
        gridItem.className = "grid-item";
        container.appendChild(gridItem);
    }
}

// start website with a 16x16 grid
generateGrid(16, 16);