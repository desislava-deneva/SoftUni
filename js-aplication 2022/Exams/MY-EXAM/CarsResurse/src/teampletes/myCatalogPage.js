import { html } from "../../node_modules/lit-html/lit-html.js";
import * as data from '../api/data.js';
import { getUserData } from "../helper.js";
// getOwnItem



let templeteOne = (car) => html`
<div class="listing">
    <div class="preview">
        <img src="${car.imageUrl}">
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.yesr}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>

`

let templeteMyCatalog = (cars) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
        ${cars.length > 0
        ? cars.map(templeteOne)
            : html`<p class="no-cars"> You haven't listed any cars yet.</p>`}
    </div>
</section>
`

export async function myCatalogPage(ctx, next) {
    let user = await getUserData();
    let cars = await data.getOwnItem(user.id);
    ctx.render(templeteMyCatalog(cars));
    next()
}

