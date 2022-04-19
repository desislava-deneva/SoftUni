import { html } from "../../node_modules/lit-html/lit-html.js";


// import * as data from '../api/data.js';


// let games = await data.getHomeData();


const templeteHome = (onClick) => html`
<section id="main">
    <div id="welcome-container" @click="${onClick}">
        <h1>Welcome To Car Tube</h1>
        <img class="hero" src="/images/car-png.webp" alt="carIntro">
        <h2>To see all the listings click the link below:</h2>
        <div>
            <a href="/car-listings" class="button">Listings</a>
        </div>
    </div>
</section>
`

export function homePage(ctx, next) {
    ctx.render(templeteHome(onClick));
    
    function onClick(e) {
        ctx.page.redirect('/car-listings')
    }
}