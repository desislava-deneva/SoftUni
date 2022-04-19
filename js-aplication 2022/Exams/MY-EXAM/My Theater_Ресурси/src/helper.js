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
    email: result.email,
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

export function renderContext(ctx, next) {

  const user = getUserData();
  const root = document.querySelector("main");
  let headerEl = document.querySelector('header');
  render(navTemplete(user), headerEl);

  ctx.render = (content) => render(content, root);
  ctx.user = getUserData();
  next();
}


let navTemplete = (user) => html`
<nav>
  <a href="/">Theater</a>
  <ul>
    ${user ? 
    html`<!--Only users-->
    <li><a href="/profail">Profile</a></li>
    <li><a href="/create">Create Event</a></li>
    <li><a href="/logout">Logout</a></li>` : html`
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>`}
  </ul>
</nav>`