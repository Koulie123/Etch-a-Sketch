const container = document.querySelector(".container");





const createGrid = function(gridSize) {
    for (i = 0; i < gridSize; i++){
        horizontalDiv = document.createElement("div");
        for (j = 0; j < gridSize; j++){
            verticalDiv = document.createElement("div");
            verticalDiv.setAttribute("class", "vertical-div");
            verticalDiv.textContent = "Hello";
            horizontalDiv.appendChild(verticalDiv);
        }
        horizontalDiv.setAttribute("class", "horizontal-div");
        container.appendChild(horizontalDiv);
        console.log("a horizontal div has been appended.")
    }
}
createGrid(16);
