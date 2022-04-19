import { html } from '../../node_modules/lit-html/lit-html.js'
import { register } from '../api/data.js'


let templeteRegister = (onRegister) => html`
<section id="register-page" class="register">
    <form id="register-form" action="" method="" @submit=${onRegister}>
        <fieldset>
            <legend>Register Form</legend>
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
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
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

        //ToDo change? 
        if (formData.password != formData['confirm-pass']) {
            alert('Password and confirm is not same!');
            return
        }

        e.target.reset();

        await register(formData.email, formData.password);
        ctx.page.redirect('/');
    }
}