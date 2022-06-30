import initializeDisplay from "./initializeDisplay.js"
import Display from "./Display.js";

const displayContainer = document.getElementById('display');
const inputBox = document.getElementById('input-box');
const btn = document.getElementById('button');
const displayWidith = 90;


initializeDisplay(displayContainer,displayWidith);

const display = new Display(displayContainer);


inputBox.addEventListener("input", () => {
    display.textFromInputToSignal(inputBox);
    display.project();
});

btn.addEventListener('click',(e) => {
    const btnClassList = Array.from(btn.classList);
    
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
    const btnClassList = Array.from(btn.classList);
    
    if(btnClassList.includes('button-active')) {
        display.animate();
    }
}, 100);