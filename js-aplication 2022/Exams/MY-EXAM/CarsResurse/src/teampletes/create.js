import { html } from "../../node_modules/lit-html/lit-html.js";


import { create } from '../api/data.js'


let templeteCreate = (onCreate) => html`
<section id="create-listing">
    <div class="container">
        <form id="create-form" @submit="${onCreate}">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>

`


export function createPage(ctx, next) {
    ctx.render(templeteCreate(onCreate));

    async function onCreate(e) {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => !x)) {
            alert('Error');
            return;
        }

        let createData =
        {
            brand : formData.brand,
            model: formData.model,
            description: formData.description,
            year: Number(formData.year),
            imageUrl: formData.imageUrl,
            price: Number(formData.price)
        }

        e.target.reset();
        await create(createData);
        ctx.page.redirect("/car-listings");
    }
}