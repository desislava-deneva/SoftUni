import { html, render } from '../lib.js'
import { getUserData } from "../utils/util.js";


let navEl = document.querySelector('header');

let onlyGuests = html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`;

let onlyUsers = html`
<div id="user">
    <a href="/create">Create Game</a>
    <a href="/logout">Logout</a>
</div>
`

let navigationTemplete = (isAuth) => html`

<!-- Navigation -->
<h1><a class="home" href="/home">GamesPlay</a></h1>
<nav>
    <a href="/catalog">All games</a>
    <!-- Logged-in users -->
    ${isAuth
    ?html`${onlyUsers}`
    :html`${onlyGuests}` }
    <!-- Guest users -->

</nav>`;



export function updateNav(ctx, next) {
    const userData = getUserData();
    console.log(userData);
    render(navigationTemplete(userData), navEl)
    next();
}

