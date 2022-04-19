import { html, render } from '../lib.js'
import { getUserData } from "../utils/util.js";

let navEl = document.getElementById('navigation');

let onluUsers = html`
<li><a href="/create">Create Album</a></li>
<li><a href="/logout">Logout</a></li>
`;

let onlyGuests =  html`
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>
`

let navigationTemplete = (isAuth) => html`
<nav>
    <img src="./images/headphones.png">
    <a href="/">Home</a>
    <ul>
        <!--All user-->
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/search">Search</a></li>
        ${isAuth
        ? onluUsers
        :onlyGuests }
    </ul>
</nav>`;

export function updateNav(ctx, next) {
    const userData = getUserData();
    render( navigationTemplete(userData), navEl)
    next();
}