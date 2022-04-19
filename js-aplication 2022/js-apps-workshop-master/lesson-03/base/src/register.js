let form = document.querySelector('form');

form.addEventListener('submit', onRegester)

async function onRegester(ev) {
    ev.preventDefault();

    let fromData = new FormData(ev.target);

    let email = fromData.get('email');
    let password = fromData.get('password');
    let rePass = fromData.get('rePass');

    try {
    let url = 'http://localhost:3030/users/register';
        if (password != rePass) {
            throw new Error('Password is not a same');
        }

        let response = await fetch(url,{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                
            },
            body:JSON.stringify({email, password})
        })
        if (response.status!= 200) {
            let error = await response.json()
            throw new Error(`${error.message}`)
        }

        const data = await response.json();
        const token = await data.accessToken;
        localStorage.setItem('token', token);

    } catch (error) {
        alert(error.message)
    }
}

