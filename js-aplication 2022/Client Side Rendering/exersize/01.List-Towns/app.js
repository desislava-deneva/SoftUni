import { render } from "./node_modules/lit-html/lit-html.js";
import {ulEl} from './templete.js';

let form = document.querySelector('form');

form.addEventListener('submit', addTown);

function addTown(ev) {
    ev.preventDefault();

    let formData = new FormData(form);
    let towns = formData.get('towns').split(',').map(x=>x.trim());

    render(ulEl(towns), document.querySelector('#root'));
}

