class Display {
    constructor(htmlDisplayElement) {
        this.display = Array.from(htmlDisplayElement.childNodes);
        this.display.shift();

        this.signal = [];
        for(i=0; i < this.display.length; i++) {
            this.signal[i] = false;
        }
    }

    textFromInputToSignal(htmlInputElement) {
        const text = Array.from(htmlInputElement.value);
        const signal = text.reduce((signal,letter)=>{
            return [...signal,...letterToSignal(letter.toUpperCase())]
        },[]);
        return signal;
    }

    clearDisplay() {
        this.display.forEach(dot => {
            dot.classList.remove('active');
        });
    }

    project(htmlInputElement) {
        this.clearDisplay();
        const signalToDisplay = this.textFromInputToSignal(htmlInputElement);
        const MAX = Math.max(this.display.length,signalToDisplay.length);

        for(i=0; i<MAX; i++){
            signalToDisplay[i] ? this.display[i].classList.add("active") : null;
        }
    }
}
