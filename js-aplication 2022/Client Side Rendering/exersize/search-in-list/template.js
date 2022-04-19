import { html } from './node_modules/lit-html/lit-html.js'

let templeteTown = (town) => html`<li>${town}</li>`

export let templeteTowns = (towns) => html`
<ul>
    ${towns.map(t => templeteTown(t))}
</ul>
   `


