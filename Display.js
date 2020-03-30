class Display {
    constructor(htmlDisplayElement) {
        this.display = Array.from(htmlDisplayElement.childNodes);
        //below line removes "text" element in first spot of the array grabbed with .childNodes property
        this.display.shift();

        this.emptyDisplay = [];
        for(i=0; i < this.display.length; i++) {
            this.emptyDisplay[i] = false;
        }
        this.signal = this.emptyDisplay;
    }

    textFromInputToSignal(htmlInputElement) {
        const text = Array.from(htmlInputElement.value);
        const signal = text.reduce((signal,letter)=>{
            return [...signal,...letterToSignal(letter.toUpperCase())]
        },[]);
        //The emptyDisplay array is concatenated for animation method purposes
        //it adds empty spaces at the end of the text and allows to use same
        //project() method and have the animation effect of entering text to the
        //display after end of it will leave the display area
        this.signal = [...signal, ...this.emptyDisplay];
    }

    clearDisplay() {
        this.display.forEach(dot => {
            dot.classList.remove('active');
        });
    }

    project() {
        this.clearDisplay();       
        for(i=0; i < this.display.length; i++){
            this.signal[i] ? this.display[i].classList.add("active") : null;
        }
    }

    animate() {
                let firstColumn = this.signal.slice(0,7);
                this.signal.splice(0,7);
                this.signal = [...this.signal,...firstColumn];
                this.project();
    }
}
