function initializeDisplay(htmlDisplayNode,columnsNumber) {
    function createDot() {
        const dot = document.createElement('div');
        dot.setAttribute('class','dot');
        return dot;
    }
    
    for(i=1;i<=7*columnsNumber;i++) {
        htmlDisplayNode.appendChild(createDot());
    }
}
