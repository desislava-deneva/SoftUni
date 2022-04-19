import { html } from "../../node_modules/lit-html/lit-html.js";
import {getUserData} from '../helper.js'
import * as dataService from '../api/data.js';


// "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
// "title": "A Court of Thorns and Roses",
// "description": "Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak place in the long winter months. So when she spots a deer in the forest being pursued by a wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and killing something so precious comes at a price ...",
// "imageUrl": "/images/book1.png",
// "type": "Fiction",
// "_createdOn": 1617797078108,
// "_id": "b559bd24-5fb6-4a42-bc48-40c17dea649d"
// },

let myCatalogTemplete = (ownItems)=> html`
<section id="my-books-page" class="my-books">
<h1>My Books</h1>
${ownItems.length > 0
    ? ownItems.map(x=> html`<ul class="my-books-list">
    <li class="otherBooks">
        <h3>Outlander</h3>
        <p>Type: ${x.type}</p>
        <p class="img"><img src="${x.imageUrl}"></p>
        <a class="button" href="/details/${x._id}">Details</a>
    </li>
</ul>`) : html`<p class="no-books">No books in database!</p>`}
</section>`

export async function myCatalogPage(ctx) {
    let user = await getUserData()
    let ownItems = await dataService.getOwnItem(user.id);
    ctx.render(myCatalogTemplete(ownItems));
}
