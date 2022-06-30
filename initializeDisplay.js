export default function initializeDisplay(displayContainer,columnsNumber) {
    function createDot() {
        const dot = document.createElement('div');
        dot.setAttribute('class','dot');
        return dot;
    }
    
    for(let i=1; i <= 7*columnsNumber; i++) {
        displayContainer.appendChild(createDot());
    }
}
