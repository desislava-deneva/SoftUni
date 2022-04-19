import { html } from '../../node_modules/lit-html/lit-html.js'
import * as dataService from '../api/data.js';




const templeteHome = (data) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    <ul class="other-books-list">
    ${data.length > 0 ?
    data.map(templeteOneGame)
    : html`<p class="no-books">No books in database!</p>`}
    </ul>
</section>
`

// "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
// "title": "To Kill a Mockingbird",
// "description": "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. \"To Kill A Mockingbird\" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.",
// "imageUrl": "/images/book3.png",
// "type": "Classic",
// "_createdOn": 1617799658349,
// "_id": "f6f54fcd-0469-470b-8ffa-a33ae6c7a524"

let templeteOneGame = (data) => html`
<li class="otherBooks">
    <h3>${data.title}</h3>
    <p>Type: ${data.type}</p>
    <p class="img"><img src="${data.imageUrl}"></p>
    <a class="button" href="/details/${data._id}">Details</a>
</li>
`

export async function homePage(ctx) {
let data = await dataService.getAll();

    ctx.render(templeteHome(data));
}