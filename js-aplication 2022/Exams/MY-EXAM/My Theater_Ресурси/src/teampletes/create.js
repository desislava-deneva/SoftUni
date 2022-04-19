import { html } from '../../node_modules/lit-html/lit-html.js'
import { create } from '../api/data.js'


let templeteCreate = (onCreate) => html`
<section id="createPage">
    <form class="create-form" @submit=${onCreate}>
        <h1>Create Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" value="">
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year">
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" placeholder="Description"></textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
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

        // {
        //     "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        //     "title": "Pretty Woman - The Musical",
        //     "date": "March 13, 2018",
        //     "author": "J. F. Lawton, Garry Marshall",
        //     "imageUrl": "/images/Pretty-Woman.jpg",
        //     "description": "Pretty Woman: The Musical is a musical with music and lyrics by Bryan Adams and Jim Vallance, and a book by Garry Marshall and J. F. Lawton. The musical is based on the 1990 film of the same name written by Lawton and directed by Marshall.",
        //     "_createdOn": 1617194128618,
        //     "_id": "ff436770-76c5-40e2-b231-77409eda7a61"
        // }

        let createData =
        {
            title : formData.title,
            date: formData.date,
            author: formData.author,
            imageUrl: formData.imageUrl,
            description: formData.description
          }
          

        e.target.reset();
        await create(createData);
        ctx.page.redirect("/");
    }
}