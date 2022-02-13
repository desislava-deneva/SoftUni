function deleteByEmail() {
    let trElements = Array.from(document.querySelectorAll('tbody tr'));
    let input = document.querySelector('label input');

    let flag = false;
    trElements.forEach(tr => {
        if (tr.textContent.includes(input.value) && input.value!='') {
            tr.remove();
            flag = true;
        }
    })

    if (flag) {
        document.getElementById('result').textContent = 'Deleted';
    }else{
        document.getElementById('result').textContent = 'Not found.';
    }
}