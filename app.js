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
function startDrawing() {
    drawing = true;
    startX = offsetX;
    startY = offsetY;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
};
