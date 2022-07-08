import Display from "./utils/Display/Display.js";
import Form from "./utils/Form/Form.js"

const inputBox = document.getElementById('input-box');
const displayWidith = 90;

const display = new Display(displayWidith);
const form = new Form(display);

window.onload = function () {
    display.textFromInputToSignal(inputBox);
    display.project();
}