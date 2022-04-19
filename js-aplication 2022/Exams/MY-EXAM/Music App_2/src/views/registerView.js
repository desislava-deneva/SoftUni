import { registerTemplete } from "../templetes/register-templete.js";
import { register } from "../api/api.js";


export function registerView(ctx) {
    ctx.render(registerTemplete(onLogin.bind(null, ctx)));
}

async function onLogin(ctx, e) {
    e.preventDefault();

    let formData = Object.fromEntries(new FormData(e.target));
    e.target.reset();

    if (Object.values(formData).some(x => !x)) {alert('All fields must be filled'); return }
    if (formData.password !== formData['conf-pass']) { alert('Passwords must match!'); return }

    await register(formData.email, formData.password);
    ctx.page.redirect('/');
}
