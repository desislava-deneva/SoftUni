import {html, render} from './node_modules/lit-html/lit-html.js';

let menu = document.getElementById('menu');

 let optionTemlete = (data) => html`
<option value= ${data._id}>${data.text}</option>
`
export function renderOption(data) {
    render(data.map(x=> optionTemlete(x)), menu)
} 
