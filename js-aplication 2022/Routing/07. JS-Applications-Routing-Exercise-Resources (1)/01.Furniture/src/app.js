import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";

import { createView } from "./pages/create.js";
import { dashboardView, myFurnitureView } from "./pages/dashboard.js";
import { detailsView } from "./pages/details.js";
import { editView } from "./pages/edit.js";

import { loginView } from "./pages/login.js";
import { registerView } from "./pages/register.js";

import { logout } from "./utils/apiService.js";

//debug
// import * as api from "./utils/dataService.js";
// window.api = api;
//debug

const root = document.querySelector(".container");

page("/", "/dashboard");
page("/create", decoContext, createView);
page("/dashboard", decoContext, dashboardView);
page("/details/:id", decoContext, detailsView);
page("/edit/:id", decoContext, editView);
page("/login", decoContext, loginView);
page("/register", decoContext, registerView);
page("/my-furniture", decoContext, myFurnitureView);

//done

setUserNav();
page.start();

function decoContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.setUserNav = () => setUserNav();
  setNavActive(ctx);
  // console.log(ctx);
  // console.log(ctx.routePath);
  next();
}

function setUserNav() {
  const userId = localStorage.getItem("userId");

  if (userId !== null) {
    document.querySelector("#user").style.display = "inline-block";
    document.querySelector("#guest").style.display = "none";
  } else {
    document.querySelector("#user").style.display = "none";
    document.querySelector("#guest").style.display = "inline-block";
  }
}

function setNavActive(ctx) {
  [...document.querySelectorAll("header a")].forEach((a) => {
    a.classList.remove("active");
    if (a.href.includes(ctx.routePath)) {
      a.classList.add("active");
    }
  });
}

document.querySelector("#logoutBtn").addEventListener("click", async () => {
  await logout();
  setUserNav();
  page.redirect("/dashboard");
});
