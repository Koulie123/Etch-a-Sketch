const container = document.querySelector(".container");
const resetButton = document.querySelector("#amountOfGrids");
// const amountOfGridsInput = document.querySelector("#amountOfGridsInput");


const generateRandomColor = function(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let valueToReturn = `rgb(${red}, ${green}, ${blue})`;
    console.log(valueToReturn);
    return valueToReturn.toString();
}

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
                // e.target.style.backgroundColor = "black";
                e.target.style.backgroundColor = generateRandomColor();
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
    // let number = amountOfGridsInput.value;
    let gridSize = prompt("What size would you like your grid to be? (max: 100)");
    if (isNaN(gridSize) || gridSize >99 || gridSize == null || gridSize == ""){
         updateGrid();
    }
    number = gridSize;
    resetGrid();
    createGrid(number);
}
resetButton.addEventListener("click", updateGrid);

createGrid(16);

