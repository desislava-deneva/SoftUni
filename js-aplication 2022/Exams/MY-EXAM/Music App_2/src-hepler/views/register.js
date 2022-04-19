import { registerTemplate } from "../templates/register-template.js";
import { register as onRegister } from "../api/api.js";

export function register(ctx) {
    ctx.render(registerTemplate(onSubmit.bind(null, ctx)));
}
async function onSubmit (ctx, event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let email = formData.get("email");
    let password = formData.get("password");
    let rePassword = formData.get("confirm-pass");

    if(!email || !password || !rePassword){
        alert("All fields are required!");
    } 
    else if(password !== rePassword){
        alert("Repeat the password properly");
    } 
    else {
        console.log(onRegister);
        await onRegister(email, password);
        ctx.page.redirect("/");
    }
}