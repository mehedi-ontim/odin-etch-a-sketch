const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resize-btn");
const gridSizeDisplay = document.querySelector("#grid-size");

function createGrid(size) {
  container.replaceChildren();

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    square.style.width = `${100 / size}%`;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }

  gridSizeDisplay.textContent = `${size} × ${size}`;
}

createGrid(16);

resizeButton.addEventListener("click", () => {
  const input = prompt("Enter the number of squares per side (1-100):", "16");

  if (input === null) {
    return;
  }

  const newSize = Number(input);

  if (!Number.isInteger(newSize) || newSize < 1 || newSize > 100) {
    alert("Please enter a whole number between 1 and 100.");
    return;
  }

  createGrid(newSize);
});
