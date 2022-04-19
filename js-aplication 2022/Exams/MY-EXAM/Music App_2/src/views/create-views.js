

import { create } from "../api/data.js";
import { createTemlete } from "../templetes/create-templete.js";

export function createView (ctx) {
    
    ctx.render(createTemlete(onSubmit.bind(null, ctx)));
}

async function onSubmit(ctx, e) {
    e.preventDefault();
    
    const formData = Object.fromEntries(new FormData(e.target));

    
    if(Object.values(formData).every(x => x)) {
        await create(formData);
        ctx.page.redirect("/catalog");
    } else {
        alert("All fields are required!");
    }

}