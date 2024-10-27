//Task 2: Configure the JavaScript for Drawing Context

// Get the canvas and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Tracks the drawing state, tool, and color
let drawing = false;
let tool = 'rectangle'; // Default tool
let color = '#000000'; // Default color
let startX, startY;

const toolInputs = document.querySelectorAll('input[name="tool"]');
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearCanvas');

// Function to start drawing
function startDrawing(e) {
    drawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
};

//Task 3: Implement Shape Drawing Logic

// Function to draw on the canvas
function draw(e) {
    if (!drawing) return;
    const currentX = e.offsetX;
    const currentY = e.offsetY;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas for dynamic drawing

    ctx.strokeStyle = color; // Set the drawing color

    if (tool === 'line') {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    } else if (tool === 'rectangle') {
        const width = currentX - startX;
        const height = currentY - startY;
        ctx.strokeRect(startX, startY, width, height);
    } else if (tool === 'circle') {
        const radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));
        ctx.beginPath();
        ctx.arc(startX, startY, radius, 0, Math.PI * 2);
        ctx.stroke();
    }
};

// Function to stop drawing
function stopDrawing() {
    drawing = false;
    ctx.closePath();
};

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

// Add event listeners for mouse events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

//Task 4: Add Color Selection and Canvas Clearing

// Add event listeners for tool radio buttons
toolInputs.forEach(input => {
    input.addEventListener('change', (e) => {
        tool = e.target.value;
    });
});

// Add event listener for color input
colorPicker.addEventListener('input', (e) => {
    color = e.target.value;
});

// Add event listener for clear button
clearButton.addEventListener('click', clearCanvas);