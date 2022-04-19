import { getMyItems } from "../api/data.js";
import { myBooksTemplate } from "../templates/myBooks-template.js";

export async function myBooks (ctx) {
    let id;
    if(ctx.user){
        id = ctx.user.id;
    }
    console.log(id);
    ctx.render(myBooksTemplate(await getMyItems(id)));
}