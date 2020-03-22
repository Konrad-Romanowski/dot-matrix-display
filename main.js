const display = document.getElementById('display');
const numberOfDisplayRows = 90;
initializeDisplay(display,numberOfDisplayRows);

const inputBox = document.getElementById('input-box');

const dotMatrixDisplay = new Display(display);

inputBox.addEventListener("input", () => {
    dotMatrixDisplay.project(inputBox);
});


