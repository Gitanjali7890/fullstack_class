const svg = document.getElementById("svgCanvas");
const colorPicker = document.getElementById("colorPicker");
const countDisplay = document.getElementById("count");
const undoBtn = document.getElementById("undoBtn");

let circles = [];
let isDrawing = false;

// Start drawing
svg.addEventListener("mousedown", () => {
    isDrawing = true;
});

// Stop drawing
svg.addEventListener("mouseup", () => {
    isDrawing = false;
});

// Draw circles on mouse move
svg.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;

    const rect = svg.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    drawCircle(x, y);
});

// Draw circle
function drawCircle(x, y) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 8);
    circle.setAttribute("fill", colorPicker.value);

    svg.appendChild(circle);
    circles.push(circle);

    updateCount();
}

// Undo last circle
undoBtn.addEventListener("click", () => {
    if (circles.length > 0) {
        const lastCircle = circles.pop();
        svg.removeChild(lastCircle);
        updateCount();
    }
});

// Update counter
function updateCount() {
    countDisplay.textContent = circles.length;
}
