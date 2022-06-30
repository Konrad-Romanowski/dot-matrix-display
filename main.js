import initializeDisplay from "./initializeDisplay.js";
import Display from "./Display.js";

const displayContainer = document.getElementById('display');
const inputBox = document.getElementById('input-box');
const animationBtn = document.getElementById('animation-button');
const displayWidith = 90;


initializeDisplay(displayContainer,displayWidith);

const display = new Display(displayContainer);


inputBox.addEventListener("input", () => {
    display.textFromInputToSignal(inputBox);
    display.project();
});

let intervalID;

function startAnimation() {
    intervalID = setInterval(()=>display.animate(),100)
}

function stopAnimation() {
    clearInterval(intervalID)
}

animationBtn.addEventListener('click',(e) => {
    const animationBtnClassList = Array.from(animationBtn.classList);
    
    if (animationBtnClassList.includes('button-active')) {
        e.target.classList.remove('button-active');
        e.target.innerText = 'Animate';
        stopAnimation();
    } else {
        e.target.classList.add('button-active');
        e.target.innerText = 'Stop animation';
        startAnimation();
    }
});
