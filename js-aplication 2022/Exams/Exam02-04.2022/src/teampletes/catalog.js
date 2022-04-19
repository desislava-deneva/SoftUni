import { html } from '../../node_modules/lit-html/lit-html.js'
import * as dataService from '../api/data.js';

// {
//     "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
//     "name": "Chibi",
//     "breed": "Teddy guinea pig",
//     "age": "1 years",
//     "weight": "1kg",
//     "image": "../images/guinea-pig.jpg",
//     "_createdOn": 1617194295480,
//     "_id": "136777f5-3277-42ad-b874-76d043b069cb"
// },

let templeteOne = (pet) => html`
<div class="animals-board">
    <article class="service-img">
        <img class="animal-image-cover" src="${pet.image}">
    </article>
    <h2 class="name">${pet.name}</h2>
    <h3 class="breed">${pet.breed}</h3>
    <div class="action">
        <a class="btn" href="/details/${pet._id}">Details</a>
    </div>
</div>
`

let templeteCatalog = (pets) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">

        ${pets.length > 0 
        ? pets.map(templeteOne) :
        html`<div><p class="no-pets">No pets in dashboard</p></div>`}
    </div>
</section>
`

export async function catalogPage(ctx) {
    let pets = await dataService.getCatalog();
    ctx.render(templeteCatalog(pets));
}

