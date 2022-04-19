import {page, render} from './lib.js'
import { catalogPage } from './views/catalog.js'

const root = document.querySelector('main')
page('/home', decoreteContext,  catalogPage);
page.start()

function decoreteContext(ctx, next) {
    ctx.render = (templete)=> render(templete, root );
    next();
}