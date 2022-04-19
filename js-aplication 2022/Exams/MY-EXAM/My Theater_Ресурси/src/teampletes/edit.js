import { html } from '../../node_modules/lit-html/lit-html.js'
import { editById, getById } from '../api/data.js'


let templeteEdit = (data, onSubmit) => html`
<section id="editPage">
    <form class="theater-form" @submit="${onSubmit}">
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" value="${data.title}">
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" value="${data.date}">
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" value="${data.author}">
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description"placeholder="Description">${data.description}</textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                value="${data.imageUrl}">
        </div>
        <button class="btn" type="submit">Submit</button>
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
            date: formData.date,
            author: formData.author,
            imageUrl: formData.imageUrl,
            description: formData.description
          }
          

        e.target.reset();
        await editById(ctx.params.id, newDataItem);
        ctx.page.redirect(`/details/${ctx.params.id}`)

    }
}