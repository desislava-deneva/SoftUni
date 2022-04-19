import { page } from "./lib.js";
import { updateNav } from '../src/views/navigationTeamplete.js'
import{decorateContext} from '../src/middleweres/decoreteMiddleweres.js'
import { homePage } from "./templetes/home-templete.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { logoutView } from "./views/logoutView.js";
import { catalogViews } from "./views/catalog-views.js";
import { createView } from "./views/create-views.js";
import { detailsView } from "./views/details-view.js";
import { editViews } from "./views/editView.js";


page(decorateContext);
page(updateNav);
page('/', homePage)
page('/login', loginView)
page('/register', registerView)
page('/logout', logoutView)
page('/catalog', catalogViews)
page('/create', createView)
page('/details/:id', detailsView)
page('/edit/:id', editViews);

page.start()