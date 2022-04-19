import { html, nothing } from "../../node_modules/lit-html/lit-html.js";


import * as data from '../api/data.js';
import { getUserData } from "../helper.js";


// "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
//         "brand": "Audi",
//         "model": "A3",
//         "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
//         "year": 2018,
//         "imageUrl": "/images/audia3.jpg",
//         "price": 25000,
//         "_createdOn": 1616162253496,
//         "_id": "3987279d-0ad4-4afb-8ca9-5b256ae3b298"

let templeteDetails = (isOwner, car, user, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${car.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>
        ${isOwner ? 
        html`<div class="listings-buttons">
            <a href="/edit/${car._id}" class="button-list">Edit</a>
            <a href="javascript:void(0)" class="button-list" @click="${onDelete}">Delete</a>
        </div>
    </div>` : nothing}
</section>

`


export async function detailsPage(ctx, next) {
    let carId = ctx.params.id;
    let car = await data.getById(carId);
    let user = await getUserData();
    let isOwner = ctx.user && user.id == car._ownerId ? true : false


    ctx.render(templeteDetails(isOwner, car, user, onDelete));

    async function onDelete(e) {
        e.preventDefault()
        let choise = confirm('Are you sure want to del?');

        if (choise) {
            await data.delItem(carId);
            ctx.page.redirect('/')
        }

    }
}