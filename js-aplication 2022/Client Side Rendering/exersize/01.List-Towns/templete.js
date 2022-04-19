import { html } from "./node_modules/lit-html/lit-html.js";

let liEl = (element) => html`<li>${element}</li>`;

export let ulEl = (array) => 
    html`<ul>
    ${array.map((x) => liEl(x))}
</ul>`;
