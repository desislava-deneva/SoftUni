// npm install page


window.addEventListener('popstate', showContent);

let views = {
    '/home': () => `<h2>Home Page<h2/>`,
    '/catalog': () => `<h2>Catalog Page<h2/>`,
    '/catalog/kitchens': () => `<h2>Kitchen Page<h2/>`,
    '/abaut': () => `<h2>Abaut Page<h2/> <p>+111-5654-58<p/>`,
}

const main = document.querySelector('main');

document.body.addEventListener('click', ev => {
    if (ev.target.tagName === 'A') {
        ev.preventDefault();
        history.pushState({}, '', ev.target.href);
        showContent()
    }
})

function showContent(ev) {
    const hash = window.location.pathname;
    const view = views[hash];

    if (typeof view === 'function') {
        main.innerHTML = view()
    }else{
        main.innerHTML = '<h2>404</h2> <p>Page not Found</p>'
    }
}