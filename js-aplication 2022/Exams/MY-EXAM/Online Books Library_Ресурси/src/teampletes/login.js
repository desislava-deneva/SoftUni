import { html } from '../../node_modules/lit-html/lit-html.js'
import * as dataService from '../api/data.js';

let templeteLogin = (onLogin) => html`
<section id="login-page" class="login" @submit="${onLogin}">
    <form id="login-form" action="" method="">
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>
`

export function loginPage(ctx) {
    ctx.render(templeteLogin(onLogin));

    async function onLogin(e) {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.target));
        e.target.reset();

        if (Object.values(formData).some(x => !x)) {
            alert('Fill all fileds');
            return;
        }

        await dataService.login(formData.email, formData.password);
        ctx.page.redirect('/')
    }
}

