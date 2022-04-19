import page from "../node_modules/page/page.mjs";
import { logout } from "./api/data.js";
import { renderContext } from "./helper.js";
import { catalogPage } from "./teampletes/catalog.js";
import { createPage } from "./teampletes/create.js";
import { detailsPage } from "./teampletes/details.js";
import { editPage } from "./teampletes/edit.js";
import { homePage } from "./teampletes/home.js";
import { loginPage } from "./teampletes/login.js";
import { myCatalogPage } from "./teampletes/myCatalogPage.js";
// import { logout } from "./api/data.js";
import { registerPage } from "./teampletes/register.js";

// import * as data from './api/data.js';

// window.data = data;

page(renderContext)
page('/', homePage)
page('/car-listings', catalogPage)
page('/login', loginPage)
page('/logout', logoutView)
page('/register', registerPage)
page('/create', createPage)
page('/my-catalog', myCatalogPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)


page.start();

export async function logoutView(ctx) {
    await logout();
    ctx.page.redirect("/");
}
