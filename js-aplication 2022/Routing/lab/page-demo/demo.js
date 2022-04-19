// npm install page
import page from './node_modules/page/page.mjs'



function homePage(ctx, next) {
    main.innerHTML = `<h2>Home Page<h2/>`;
}

function catalogPage(ctx) {
    main.innerHTML = `<h2>Catalog Page<h2/>`;

}

function detilesPage(ctx) {
    console.log(ctx);
    main.innerHTML = `<h2>Product Detiles<h2/>`;
}

function abautPage() {
    main.innerHTML = `<h2>Abaut Page<h2/> <p>+111-5654-58<p/>`;
}

const main = document.querySelector('main');

page('/home', homePage)
page('/catalog',  catalogPage)

page('/catalog/:id',  detilesPage)
page('/abaut',  abautPage)
page.start()

