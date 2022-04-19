import { html } from "../../node_modules/lit-html/lit-html.js";


import { editById, getById } from '../api/data.js'


let templeteEdit = (data, onSubmit) => html`
<section id="edit-listing">
    <div class="container">

        <form id="edit-form" @submit=${onSubmit}>
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" value="${data.brand}">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" value="${data.model}">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" value="${data.description}">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" value="${data.year}">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${data.imageUrl}">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" value="${Number(data.price)}">

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>


`


export async function editPage(ctx, next) {
    let data = await getById(ctx.params.id);


    ctx.render(templeteEdit(data, onSubmit));
    async function onSubmit(e) {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => !x)) {
            alert('All filled must be fill!');
            return;
        }

        let newDataGame = {
            brand: formData.brand,
            model: formData.model,
            description: formData.description,
            year: Number(formData.year),
            imageUrl: formData.imageUrl,
            price: Number(formData.price)
        }

        e.target.reset();
        await editById(ctx.params.id, newDataGame);
        ctx.page.redirect(`/details/${ctx.params.id}`)

    }
}