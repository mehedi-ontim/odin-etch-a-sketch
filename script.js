const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resize-btn");
const gridSizeDisplay = document.querySelector("#grid-size");

function createGrid(size) {
  container.replaceChildren();

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    square.style.width = `${100 / size}%`;

    container.appendChild(square);
  }

  gridSizeDisplay.textContent = `${size} × ${size}`;
}

createGrid(16);
