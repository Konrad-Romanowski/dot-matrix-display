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
        this.signal = signal;
    }

    clearDisplay() {
        this.display.forEach(dot => {
            dot.classList.remove('active');
        });
    }

    project() {
        this.clearDisplay();
        const MAX = Math.max(this.display.length, this.signal.length);

        for(i=0; i<MAX; i++){
            this.signal[i] ? this.display[i].classList.add("active") : null;
        }
    }
}
