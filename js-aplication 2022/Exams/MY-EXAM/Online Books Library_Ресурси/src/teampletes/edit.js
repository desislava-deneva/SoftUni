import { html } from '../../node_modules/lit-html/lit-html.js'
import { editById, getById } from '../api/data.js'


let templeteEdit = (data, onSubmit) => html`
<section id="edit-page" class="edit">
    <form id="edit-form" action="#" method="" @submit="${onSubmit}">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" value="${data.title}">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description"
                        id="description">${data.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value="${data.imageUrl}">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" value="${data.type}">
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>

`

export async function editPage(ctx) {
    let data = await getById(ctx.params.id);
    ctx.render(templeteEdit(data, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => !x)) {
            alert('All filled must be fill!');
            return;
        }

        let newDataItem = 
        {
            title : formData.title,
            description: formData.description,
            imageUrl: formData.imageUrl,
            type: formData.type
          }

        e.target.reset();
        await editById(ctx.params.id, newDataItem);
        ctx.page.redirect(`/details/${ctx.params.id}`)

    }
}