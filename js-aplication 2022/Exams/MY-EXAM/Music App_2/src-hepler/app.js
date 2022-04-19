import { updateNav } from "./middlewares/updateNav.js";
import { page } from "./lib.js";
import { dashBoard } from "./views/dashBoard.js";
import { login } from "./views/login.js";
import { logout } from "./views/logout.js";
import { register } from "./views/register.js";
import { decorateContext } from "./middlewares/decorateContext.js";
import { createItem } from "./views/createItem.js";
import { details } from "./views/details.js";
import { edit } from "./views/edit.js";
import { myBooks } from "./views/myBooks.js";


page(decorateContext);
page(updateNav);
page('/', dashBoard);
page('/login', login);
page('/register', register);
page('/logout', logout);
page('/create', createItem);
page('/details/:id', details);
page('/edit/:id', edit);
page('/my-books', myBooks);


page.start();



