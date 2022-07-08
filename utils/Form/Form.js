import handleAnimationBtn from "./handleAnimationBtn.js";
import handleInputBox from "./handleInputBox.js";

// display controller

export default class Form {
    constructor(display) {
        this.inputBox = document.getElementById('input-box');
        this.animationBtn = document.getElementById('animation-button');

        handleAnimationBtn(this.animationBtn,display);
        handleInputBox(this.inputBox,display);
    }
}