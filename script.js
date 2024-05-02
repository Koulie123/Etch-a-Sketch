const container = document.querySelector(".container");
const resetButton = document.querySelector("#amountOfGrids");
const amountOfGridsInput = document.querySelector("#amountOfGridsInput");




const createGrid = function(gridSize) {
    if (gridSize >= 100){
        gridSize = 99;
    }
    for (i = 0; i < gridSize; i++){
        horizontalDiv = document.createElement("div");
        for (j = 0; j < gridSize; j++){
            verticalDiv = document.createElement("div");
            verticalDiv.setAttribute("class", "vertical-div");
            // verticalDiv.textContent = "Hello";
            verticalDiv.addEventListener("mouseenter", function(e) {
                e.target.style.backgroundColor = "black";
            });
            horizontalDiv.appendChild(verticalDiv);
        }
        horizontalDiv.setAttribute("class", "horizontal-div");
        container.appendChild(horizontalDiv);
        console.log("a horizontal div has been appended.")
    }
}
const resetGrid = function(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}
const updateGrid = function(){
    let number = amountOfGridsInput.value;
    resetGrid();
    createGrid(number);
}
resetButton.addEventListener("click", updateGrid);

createGrid(16);

