import { html, render } from "../node_modules/lit-html/lit-html.js";
// import page from "../node_modules/page/page.mjs";


export function getUserData() {
  return JSON.parse(localStorage.getItem("user"));
}

export function getAccessToken() {
  const user = getUserData();
  if (user) {
    return user.accessToken;
  } else {
    return null;
  }
}

export function setUserData(data) {
  localStorage.setItem("user", JSON.stringify(data));
}

export function clearUserData() {
  localStorage.removeItem("user");
}

export function createUserData(result) {
  return {
    username: result.username,
    id: result._id,
    token: result.accessToken,
  };
}

export function createSubmitHandler(ctx, handler) {
  return function (e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.targat));

    handler(ctx, formData, e)
  };
}

export async function renderContext(ctx, next) {

  const root = document.getElementById("site-content");
  let headerEl = document.querySelector('header');
  let user = await getUserData()
  ctx.render = (content) => render(content, root);
  ctx.user = getUserData();
  render(navTemplete(user), headerEl);

  next();
}


let navTemplete = (user) => html`

<nav>
  <a class="active" href="/">Home</a>
  <a href="/car-listings">All Listings</a>
  <a href="#">By Year</a>
  <!-- Guest users -->
  ${!user ? html`<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>`
  : html` <div id="profile">
    <a>Welcome ${user.username}</a>
    <a href="/my-catalog">My Listings</a>
    <a href="/create">Create Listing</a>
    <a href="/logout">Logout</a>
  </div>
</nav>`}
`