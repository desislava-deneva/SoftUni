function attachGradientEvents() {
    let gradien = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradien.addEventListener('mousemove', onMove);


    function onMove(ev) {
        let box = ev.target;
        let offset = Math.floor(ev.offsetX / box.clientWidth * 100);
        result.textContent = `${offset}%`
    }
}