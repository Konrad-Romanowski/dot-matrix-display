export default function(inputBox,display) {
    inputBox.addEventListener("input", () => {
        display.textFromInputToSignal(inputBox);
        display.project();
    });
}