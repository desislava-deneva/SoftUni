import { getAllData, postData } from './api.js'
import { renderOption, } from './templete.js'

let itemText = document.getElementById('itemText');
let form = document.querySelector('form');

async function addItem() {
    renderOption( await getAllData());
    form.addEventListener('click', onClickAddItem)
}

async function onClickAddItem(ev) {
    ev.preventDefault();
    if (ev.target.value == 'Add') {
        await postData(itemText.value);
        renderOption(await getAllData());
        itemText.value = ''
    }
}

addItem()