const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");

resizeBtn.addEventListener("click", () => {
    let size = prompt("Enter new size of N*N grid:");
    generateGrid(size);
});

// generate a row x col square grid
function generateGrid(size) {
    // delete existing grid
    let grid = document.querySelectorAll(".grid-item");
    grid.forEach(item => container.removeChild(item));

    // update --grid-size property
    container.style.setProperty("--grid-size", size);

    // generate new grid
    for (let i = 0; i < (size * size); i++) {
        let gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        container.appendChild(gridItem);
    }
}

// start website with a 16x16 grid
generateGrid(16);