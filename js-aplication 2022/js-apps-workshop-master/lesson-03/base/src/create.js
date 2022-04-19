window.addEventListener('load', async()=>{
    let token = localStorage.getItem('token');
    if (token == null) {
        window.location = '/login.html';
    }
    const form = document.querySelector('form');
    form.addEventListener('submit', onCreate);
});

async function onCreate(ev) {
    ev.preventDefault();

    let url = 'http://localhost:3030/data/recipes'

    let fromData = new FormData(ev.target);

    let name = fromData.get('name').trim();
    let img = fromData.get('img').trim();
    let ingredients = fromData.get('ingredients').trim().split('\n');
    let steps = fromData.get('steps').trim().split('\n');

    let recipe = {
       name,
       img,
       ingredients,
       steps 
    }

    let token = localStorage.getItem('token');
    if (token == null) {
        window.location = '/index.html';
        return;
    }

    try {
        let res =  await fetch(url,{
            method:'post',
            headers:{
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(recipe)
        });

        if (res.ok == false) {
            let error = await res.json();
            throw new Error(error.message)
        }
         await res.json();
         window.location = '/index.html'
    } catch (error) {
        alert(error.message);
    }

}