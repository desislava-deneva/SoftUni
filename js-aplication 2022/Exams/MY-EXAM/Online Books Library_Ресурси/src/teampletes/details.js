import { html,  nothing } from '../../node_modules/lit-html/lit-html.js'
import * as dataService from '../api/data.js';
import { getUserData } from "../helper.js";


// "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
//         "title": "A Court of Thorns and Roses",
//         "description": "Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak place in the long winter months. So when she spots a deer in the forest being pursued by a wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and killing something so precious comes at a price ...",
//         "imageUrl": "/images/book1.png",
//         "type": "Fiction",
//         "_createdOn": 1617797078108,
//         "_id": "b559bd24-5fb6-4a42-bc48-40c17dea649d"

let templeteDetails = (isOwner, book, user, onDelete) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        ${isOwner && user ? 
        html`
        <div class="actions">
            <a class="button" href="/edit/${book._id}">Edit</a>
            <a class="button" href="javascript:void(0)" @click="${onDelete}">Delete</a>

            ${!isOwner && user ? html`<a class="button" href="/likes">Like</a>` : nothing}
            
            ${!isOwner ? html`<div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>` : nothing}
        </div>` : nothing}
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`


export async function detailsPage(ctx) {
    let itemId = ctx.params.id;
    let item = await dataService.getById(itemId);
    let user = await getUserData();
    let isOwner = ctx.user && user.id == item._ownerId ? true : false
    ctx.render(templeteDetails(isOwner, item, user, onDelete));

    async function onDelete(e) {
        e.preventDefault()
        let choise = confirm('Are you sure want to del?');

        if (choise) {
            await dataService.delItem(itemId);
            ctx.page.redirect('/')
        }

    }
}