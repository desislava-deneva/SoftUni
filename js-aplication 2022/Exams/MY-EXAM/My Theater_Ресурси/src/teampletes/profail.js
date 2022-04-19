import { html } from "../../node_modules/lit-html/lit-html.js";
import { getOwnItem } from '../api/data.js'
import { getUserData } from '../helper.js'


let profailTemplete = (data, user) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${user.email}</h2>
    </div>
    <div class="board">
        ${data.length > 0
        ? data.map(x=> templeteOne(x))
            : html`<div class="no-events">
            <p>This user has no events yet!</p>
        </div>`}
    </div>
</section>`

let templeteOne = (data) => html`
<div class="eventBoard">
    <div class="event-info">
        <img src="${data.imageUrl}">
        <h2>${data.title}</h2>
        <h6>${data.date}</h6>
        <a href="/details/${data._id}" class="details-button">Details</a>
    </div>
</div>
`

export async function profailPage(ctx, next) {
    let user = await getUserData();
    let eventsData = await getOwnItem(user.id);
    ctx.render(profailTemplete(eventsData, user));
    next()
}