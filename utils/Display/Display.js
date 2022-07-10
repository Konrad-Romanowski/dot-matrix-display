import createDisplay from "./createDisplay.js";
import letterToSignal from "./letterToSignal.js"

export default class Display {
    constructor(displayWidith) {
        this.display = createDisplay(displayWidith);
        this.emptyDisplaySignal = Array.from({length: this.display.length}, () => false)
        this.signal = this.emptyDisplaySignal;
    }

    textFromInputToSignal(htmlInputElement) {
        const letterSpacing = [false, false, false, false, false, false, false];
        const text = Array.from(htmlInputElement.value);
        const signal = text.reduce((signal,letter)=>{
            return [...signal, ...letterSpacing, ...letterToSignal(letter.toUpperCase())]
        },[]);
        // The emptyDisplaySignal array is concatenated for animation method purposes
        // it adds empty spaces at the end of the text and allows to use same
        // project() method and have the animation effect of entering text to the
        // display after end of it will leave the display area
        this.signal = [...signal, ...this.emptyDisplaySignal];
    }

    clearDisplay() {
        this.display.forEach(dot => {
            dot.classList.remove('active');
        });
    }

    project() {
        this.clearDisplay();       
        for(let i = 0; i < this.display.length; i++){
            this.signal[i] ? this.display[i].classList.add('active') : null;
        }
    }

    animate() {
                let firstColumn = this.signal.slice(0,7);
                this.signal.splice(0,7);
                this.signal = [...this.signal,...firstColumn];
                this.project();
    }
}
