import { html } from "../../node_modules/lit-html/lit-html.js";
import * as data from '../api/data.js';


// "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
//         "brand": "Audi",
//         "model": "A3",
//         "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
//         "year": 2018,
//         "imageUrl": "/images/audia3.jpg",
//         "price": 25000,
//         "_createdOn": 1616162253496,
//         "_id": "3987279d-0ad4-4afb-8ca9-5b256ae3b298"



let templeteOne = (car) => html`
<div class="listing">
    <div class="preview">
        <img src="${car.imageUrl}">
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>
`

let templeteCatalog = (cars) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
        ${cars.length > 0
        ? cars.map(templeteOne)
            : html`<p class="no-cars">No cars in database.</p>`}
    </div>
</section>
`

export async function catalogPage(ctx, next) {
let cars = await data.getAll();
    ctx.render(templeteCatalog(cars));
    next();
}

