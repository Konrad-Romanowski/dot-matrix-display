const display = document.getElementById('display');
const inputBox = document.getElementById('input-box');
const btn = document.getElementById('button');
const numberOfDisplayRows = 90;
initializeDisplay(display,numberOfDisplayRows);

const dotMatrixDisplay = new Display(display);

inputBox.addEventListener("input", () => {
    dotMatrixDisplay.textFromInputToSignal(inputBox);
    dotMatrixDisplay.project();
});

const btnClassList = Array.from(btn.classList);

btn.addEventListener('click',(e) => {
    if (btnClassList.includes('button-active')) {
        e.target.classList.remove('button-active');
        e.target.innerText = 'Animate';
    } else {
        e.target.classList.add('button-active');
        e.target.innerText = 'Stop animation';
    }
});

setInterval(() => {
    console.log('💩');
    if(btnClassList.includes('button-active')) {
        dotMatrixDisplay.animate();
    }
}, 100);