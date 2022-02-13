function focused() {
    let inputEl = Array.from(document.querySelectorAll('input'));

    inputEl.forEach(input =>{
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur)

    });

    function onFocus(ev) {
        let div = ev.target.parentNode;
        div.classList.add("focused");
    }

    function onBlur(ev) {
        let div = ev.target.parentNode;
        div.classList.remove("focused");
    }
}