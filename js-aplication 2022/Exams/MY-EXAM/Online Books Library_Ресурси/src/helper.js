import { html, render } from "../node_modules/lit-html/lit-html.js";


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
<nav class="navbar">
  <section class="navbar-dashboard">
    <a href="/">Dashboard</a>
    ${!user ? html`<div id="guest">
      <a class="button" href="/login">Login</a>
      <a class="button" href="/register">Register</a>
    </div>` : html`<div id="user">
      <span>Welcome, ${user.email}</span>
      <a class="button" href="/catalog">My Books</a>
      <a class="button" href="/create">Add Book</a>
      <a class="button" href="/logout">Logout</a>
    </div>`}
  </section>
</nav>`