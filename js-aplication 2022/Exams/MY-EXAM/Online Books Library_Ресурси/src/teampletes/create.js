import { html } from '../../node_modules/lit-html/lit-html.js'
import { create } from '../api/data.js'


let templeteCreate = (onCreate) => html`
<section id="create-page" class="create">
    <form id="create-form" action="" method="" @submit = ${onCreate}>
        <fieldset>
            <legend>Add new Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" placeholder="Title">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" placeholder="Image">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type">
                        <option value="Fiction">Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Add Book">
        </fieldset>
    </form>
</section>
`


export function createPage(ctx) {
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
            title : formData.title,
            description: formData.description,
            imageUrl: formData.imageUrl,
            type: formData.type
          }
          

        e.target.reset();
        await create(createData);
        ctx.page.redirect("/");
    }
}