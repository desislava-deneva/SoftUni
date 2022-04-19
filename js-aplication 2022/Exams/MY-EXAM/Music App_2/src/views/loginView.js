import { loginTemplete } from "../templetes/login-templete.js";
import { login } from "../api/api.js"


export function loginView(ctx) {
    ctx.render(loginTemplete(onLogin.bind(null, ctx)));
}

async function onLogin(ctx, e) {
    e.preventDefault();

    let formData = Object.fromEntries(new FormData(e.target));
    e.target.reset();

    if (Object.values(formData).some(x => !x)) {alert('All fields must be filled'); return }

    await login(formData.email, formData.password);
    ctx.page.redirect('/');
}
