import Display from "./utils/Display/Display.js";
import DisplayControllerForm from "./utils/DisplayControllerForm/DisplayControllerForm.js"

const inputBox = document.getElementById('form-text-input');
const displayWidith = 90;

const display = new Display(displayWidith);
const displayControllerForm = new DisplayControllerForm(display);

window.onload = function () {
    display.textFromInputToSignal(inputBox);
    display.project();
}