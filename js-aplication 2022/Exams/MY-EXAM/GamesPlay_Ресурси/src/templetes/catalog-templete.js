import { html, nothing } from "../lib.js";


const catalogTemplete = (game) => html`<div class="allGames">
<div class="allGames-info">
    <img src="${game.imageUrl}">
    <h6>${game.category}</h6>
    <h2>${game.title}</h2>
    <a href="/details/${game._id}" class="details-button">Details</a>
</div>
</div>`

export const catalogsTempletes = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
        ${games.length > 0
                ? games.map(x => html`${catalogTemplete(x)}`)
                : html` <h3 class="no-articles">No articles yet</h3>`}
</section>`


