function addItem() {
    let ulEl = document.querySelectorAll('#items')[0]
    let input = document.querySelector('#newItemText')
    let buttonAdd = document.querySelectorAll('input')[1];

    let liElement = document.createElement('li');
    liElement.textContent = input.value;

    let aEl = document.createElement('a');
    aEl.textContent = '[Delete]';
    aEl.href = '#';
    liElement.appendChild(aEl);


    ulEl.appendChild(liElement);

    

    aEl.addEventListener('click', (ev)=> removeEl(ev))

    function removeEl(ev) {
        let parent = ev.target.parentNode;
        parent.remove();
    }

    input.value  = '';
    
}