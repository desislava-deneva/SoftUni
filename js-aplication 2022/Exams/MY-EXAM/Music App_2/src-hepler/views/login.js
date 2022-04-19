import { loginTemplate } from "../templates/login-template.js";
import { login as onLogin} from "../api/api.js"


export function login(ctx) {
    ctx.render(loginTemplate(onSubmit.bind(null, ctx)));
}

async function onSubmit(ctx, event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let email = formData.get("email");
    let password = formData.get("password");
    if(!email || !password){
        alert("All fields are required!");
    }
    await onLogin(email, password);
    ctx.page.redirect("/");

}