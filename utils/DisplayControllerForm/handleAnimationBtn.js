export default function handleAnimationBtn(btn,display) {

    let intervalID;

    function startAnimation() {
        intervalID = setInterval(()=>display.animate(),100)
    }

    function stopAnimation() {
        clearInterval(intervalID)
    }

    btn.addEventListener('click',(e) => {
        const animationBtnClassList = Array.from(btn.classList);
        
        if (animationBtnClassList.includes('button-active')) {
            e.target.classList.remove('button-active');
            e.target.innerText = 'Animate';
            stopAnimation();
        } else {
            e.target.classList.add('button-active');
            e.target.innerText = 'Stop animation';
            startAnimation();
        }
    });

}