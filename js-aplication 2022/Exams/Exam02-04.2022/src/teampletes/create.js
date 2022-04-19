import { html } from '../../node_modules/lit-html/lit-html.js'
import { create } from '../api/data.js'


let templeteCreate = (onCreate) => html`
<section id="createPage">
    <form class="createForm" @submit ="${onCreate}">
        <img src="./images/cat-create.jpg">
        <div>
            <h2>Create PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" placeholder="Max">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" placeholder="2 years">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" placeholder="5kg">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
            </div>
            <button class="btn" type="submit">Create Pet</button>
        </div>
    </form>
</section>
`

export function createPage(ctx, next) {
    ctx.render(templeteCreate(onCreate));

    async function onCreate(e) {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => !x)) {
            alert('Pls, fill all fieled');
            return;
        }

        let createData =
        {
            name : formData.name,
            breed : formData.breed,
            age: formData.age,
            weight: formData.weight,
            image : formData.image
          }

        e.target.reset();
        await create(createData);
        ctx.page.redirect("/");
    }
}