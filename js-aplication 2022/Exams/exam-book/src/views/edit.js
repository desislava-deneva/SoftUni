import { getById } from "../api/data.js";
import { editTemplate } from "../templates/edit-template.js";
import { editItem } from "../api/data.js";

export async function edit (ctx) {
    const id = ctx.params.id;
    ctx.render(editTemplate(await getById(id), onSubmit.bind(null, id, ctx)));
}

async function onSubmit(id, ctx, event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let dataObject = Object.fromEntries(formData);

    if(!dataObject.type || !dataObject.title || !dataObject.description || !dataObject.imageUrl){
        alert("All fields are required!");
    }
    else {
        await editItem(id, dataObject);
        ctx.page.redirect(`/details/${id}`);
    }

}