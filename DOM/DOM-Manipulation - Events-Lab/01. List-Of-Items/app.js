function addItem() {
    let ulEl = document.querySelector('main ul');
    let text = document.getElementById('newItemText');

    let liEl  = document.createElement('li');
    liEl.textContent = text.value;

   ulEl.textContent.appendChild(liEl);

   text.value = '';

}
