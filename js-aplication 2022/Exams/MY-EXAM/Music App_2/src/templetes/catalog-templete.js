import { html,nothing } from "../lib.js";


const catalogTemplete = (card, userId) => html`
<div class="card-box">
    <img src="${card.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${card.name}</p>
            <p class="artist">Artist: ${card.artist}</p>
            <p class="genre">Genre: ${card.genre}</p>
            <p class="price">Price: $${card.price}</p>
            <p class="date">Release Date: ${card.releaseDate}</p>
        </div>
        <div class="btn-group">
        ${userId
        ? html` <a href="/details/${card._id}" id="details">Details</a>`
        : nothing}
        </div>
    </div>
</div>`

export const catalogsTempletes = (albums, userId) => html`
<section id="catalogPage">
            <h1>All Albums</h1>
            ${albums.length
            ? albums.map(x=> html`${catalogTemplete(x, userId )}`)
            : html`<p>No Albums in Catalog!</p>`}
</section>
        `