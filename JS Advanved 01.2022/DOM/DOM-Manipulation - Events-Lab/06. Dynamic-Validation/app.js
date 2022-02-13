function validate() {
    let email = document.getElementById('email');

    email.addEventListener('change', onChangeInput)

    function onChangeInput(ev) {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        let maches = email.value.match(pattern);
        if (!maches) {
            email.classList.add("error");
        } else {
            email.classList.remove("error");
        }
    }
}