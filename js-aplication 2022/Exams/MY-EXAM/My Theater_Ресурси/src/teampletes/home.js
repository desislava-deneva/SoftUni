import { html } from '../../node_modules/lit-html/lit-html.js'
import * as dataService from '../api/data.js';



const templeteHome = (data) => html`
<section class="welcomePage">
    <div id="welcomeMessage">
        <h1>My Theater</h1>
        <p>Since 1962 World Theatre Day has been celebrated by ITI Centres, ITI Cooperating Members, theatre
            professionals, theatre organizations, theatre universities and theatre lovers all over the world on
            the 27th of March. This day is a celebration for those who can see the value and importance of the
            art
            form “theatre”, and acts as a wake-up-call for governments, politicians and institutions which have
            not
            yet recognised its value to the people and to the individual and have not yet realised its potential
            for
            economic growth.</p>
    </div>
    <div id="events">
        <h1>Future Events</h1>
        <div class="theaters-container">
            ${data.length > 0 
            ? data.map(x=> templeteOne(x))
            : html `<h4 class="no-event">No Events Yet...</h4>`}
        </div>
    </div>
</section>
`
let templeteOne = (data) => html`
<div class="eventsInfo">
                <div class="home-image">
                    <img src="${data.imageUrl}">
                </div>
                <div class="info">
                    <h4 class="title">${data.title}</h4>
                    <h6 class="date">${data.date}</h6>
                    <h6 class="author">${data.author}</h6>
                    <div class="info-buttons">
                        <a class="btn-details" href="/details/${data._id}">Details</a>
                    </div>
                </div>
            </div>
`

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

export async function homePage(ctx, next) {
   let data = await dataService.getHomeData();
    ctx.render(templeteHome(data));
}