const container = document.querySelector(".container");
const sketchpad = document.querySelector(".sketchpad");
const gridButton = document.querySelector(".gridsize");
const reset = document.querySelector(".clear");
const black = document.querySelector(".black");
const random = document.querySelector(".random");
const pastel = document.querySelector(".pastel");
let currentColorNumber = 0;

function gridSize(grid = 16) {
    for(let i = 0; i < grid; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < grid; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            column.appendChild(square);
        }
        sketchpad.appendChild(column);
    }
}

function removeOldGrid() {
    let columns = document.querySelectorAll(".column");
    while (columns.firstChild) {
        columns.firstChild.remove();
    }
    while (sketchpad.firstChild) {
        sketchpad.firstChild.remove();
    }
}

function randomNumber() {
    const random = Math.floor(Math.random() * 16);
    return random;
}

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[randomNumber()];
    }
    return color;
}

function pastelColor() {
    const hue = Math.floor(Math.random()* 360);
    const saturation = 70;
    const lightness = 80;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function currentColor(number) {
    if (number === 1) {
        return randomColor();
    }
    else if (number === 2) {
        return pastelColor();
    }
    else {
        return "#000000";
    }
}

gridSize();

gridButton.addEventListener("click", () => {
    removeOldGrid();
    grid = prompt("Enter Grid Size (e.g 16 = 16x16)");
    gridSize(grid);
});

black.addEventListener("click", () => {
    currentColorNumber = 0;
});

random.addEventListener("click", () => {
    currentColorNumber = 1;
});

pastel.addEventListener("click", () => {
   currentColorNumber = 2; 
});

function colorSquare() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        
        square.addEventListener("mouseover", () => {
            let color = currentColor(currentColorNumber)
            square.style.backgroundColor = color;
            square.style.borderColor = color;
        });
    });
}

function resetColor() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "transparent";
    })
}