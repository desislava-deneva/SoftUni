import {render} from "../lib.js";
import { getUserData } from "../utils/util.js";

const root = document.getElementById("site-content");

export function decorateContext (ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.user = getUserData();
    
    next();
}