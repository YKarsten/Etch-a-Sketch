// Grid Size Button
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let userInput = window.prompt("Enter the desired grid size (2-99)");

    if (!isNaN(userInput) && userInput >= 2 && userInput <= 99) {
        gridSize = Number(userInput);
        createGrid(gridSize);
    } else {
        alert("You need to enter a valid number between 2 and 99");
    }
});

// Create grid items and set event listeners
function createGrid(size) {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = ''; // Clear existing grid

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);

        // Event listeners for each grid item
        gridItem.addEventListener('mousedown', () => {
            gridItem.style.backgroundColor = 'blue';
        });

        gridItem.addEventListener('mouseover', () => {
            if (isMouseDown) {
                gridItem.style.backgroundColor = 'blue';
            }
        });
    }

    // Set grid item size dynamically based on the gridSize
    let gridItems = document.querySelectorAll(".grid-item");
    let itemSize = `calc((100% - ${4 * size}px) / ${size})`;

    gridItems.forEach(item => {
        item.style.width = itemSize;
        item.style.height = itemSize;
    });
}

// EventListeners for the document
let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});
