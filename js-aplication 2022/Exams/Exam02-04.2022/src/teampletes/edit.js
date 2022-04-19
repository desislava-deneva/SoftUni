import { html } from '../../node_modules/lit-html/lit-html.js'
import { editById, getById } from '../api/data.js'

// {
//     "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
//     "name": "Max",
//     "breed": "Shiba Inu",
//     "age": "2 years",
//     "weight": "5kg",
//     "image": "../images/Shiba-Inu.png",
//     "_createdOn": 1617194128618,
//     "_id": "ff436770-76c5-40e2-b231-77409eda7a61"
// }
let templeteEdit = (pet, onSubmit) => html`
<section id="editPage" @submit=${onSubmit}>
    <form class="editForm">
        <img src="${pet.image}">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" value="${pet.name}">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" value="${pet.breed}">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" value="${pet.age}">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" value="${pet.weight}">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" value="${pet.image}">
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>
`

let content;
export async function editPage(ctx) {
    let pet = await getById(ctx.params.id);
    content = ctx;
    ctx.render(templeteEdit(pet, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => !x)) {
            alert('All filled must be fill!');
            return;
        }

        let newDataItem =
        {
            name: formData.name,
            breed: formData.breed,
            age: formData.age,
            weight: formData.weight,
            image: formData.image
        }

        e.target.reset();
        await editById(content.params.id, newDataItem);
        content.page.redirect(`/details/${content.params.id}`)

    }
}