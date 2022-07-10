import handleAnimationBtn from "./handleAnimationBtn.js";
import handleInputBox from "./handleInputBox.js";

export default class DisplayControllerForm {
    constructor(display) {
        this.inputBox = document.getElementById('form-text-input');
        this.animationBtn = document.getElementById('form-animation-button');

        handleAnimationBtn(this.animationBtn,display);
        handleInputBox(this.inputBox,display);
    }
}