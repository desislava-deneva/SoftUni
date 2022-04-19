import page from "../node_modules/page/page.mjs";
import { renderContext } from "../src/helper.js";
import { catalogPage } from "./teampletes/catalog.js";
import { createPage } from "./teampletes/create.js";
import { detailsPage } from "./teampletes/details.js";
import { editPage } from "./teampletes/edit.js";
import { homePage } from "./teampletes/home.js";
import { loginPage } from "./teampletes/login.js";
import { logout } from "./api/data.js";
import { registerPage } from "./teampletes/register.js";


page(renderContext)
page('/', homePage)
page('/catalog', catalogPage)
page('/login', loginPage)
page('/logout', logoutView)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)


page.start();

export async function logoutView(ctx) {
    await logout();
    ctx.page.redirect("/");
}
