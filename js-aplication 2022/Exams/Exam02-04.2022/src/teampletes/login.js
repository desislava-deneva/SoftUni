import { html } from '../../node_modules/lit-html/lit-html.js'
import * as dataService from '../api/data.js';

let templeteLogin = (onLogin) => html`
<section id="loginPage">
    <form class="loginForm" @submit="${onLogin}">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </form>
</section>
`
let context;
export function loginPage(ctx) {
    ctx.render(templeteLogin(onLogin));
    context = ctx;

    async function onLogin(e) {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.target));
        e.target.reset();

        if (Object.values(formData).some(x => !x)) {
            alert('Fill all fileds');
            return;
        }

        await dataService.login(formData.email, formData.password);
        context.page.redirect('/')
    }
}

