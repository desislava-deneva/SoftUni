import { html } from './node_modules/lit-html/lit-html.js'

let templeteCat = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id=${cat.id}>
            <h4 class="card-title">Status Code: ${cat.statusCode}</h4>
            <p class="card-text">${cat.statusMessage}</p>
        </div>
    </div>
</li>
`

export let templeteAllCats = (array) =>
    html`<ul>
    ${array.map((x) => templeteCat(x))}
</ul>`;