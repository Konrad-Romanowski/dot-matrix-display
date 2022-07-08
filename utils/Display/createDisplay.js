export default function createDisplay(columnsNumber) {
    const displayContainer = document.getElementById('display');

    function createDot() {
        const dot = document.createElement('div');
        dot.setAttribute('class','dot');
        return dot;
    }
    
    const displayAsNodesArray = Array.from({length:7*columnsNumber}, () => displayContainer.appendChild(createDot()))

    return displayAsNodesArray;
}
