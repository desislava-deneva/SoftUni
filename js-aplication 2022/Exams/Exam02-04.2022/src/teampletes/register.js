import { html } from '../../node_modules/lit-html/lit-html.js'
import { register } from '../api/data.js'


let templeteRegister = (onRegister) => html`
<section id="registerPage">
    <form class="registerForm" @submit = "${onRegister}">
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="/login">here</a></span>
        </p>
    </form>
</section>
`

export function registerPage(ctx) {
    ctx.render(templeteRegister(onRegister));

    async function onRegister(e) {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => !x)) {
            alert('Please, fill all fieled');
            return;
        }

        if (formData.password != formData['repeatPassword']) {
            alert('password repeat password is not same');
            return
        }

        e.target.reset();

        await register(formData.email, formData.password);
        ctx.page.redirect('/');
    }
}