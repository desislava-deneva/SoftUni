window.addEventListener('DOMContentLoaded', async()=>{
 
    document.querySelector('button').addEventListener('click', onLogin)
});

async function onLogin(ev) {
    ev.preventDefault();
    let form = document.querySelector('form');

    let formData = new FormData(form);
    let email = formData.get('email');
    let password = formData.get('password');

    try {
        let url = 'http://localhost:3030/users/login';

        let res = await fetch(url, {
            method:'post',
            headers:{
                'Content-Type':'application.json'
            },
            body: JSON.stringify({email, password})
        });

        if (res.ok != true) {
            let error = await res.json()
            throw new Error(error.message)
        }

        let data = await res.json();

        let userData = {
            email: data.email,
            id : data._id,
            token: data.accessToken
        }
        
        document.querySelector('span').value = userData.email;
        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = './index.html';
        
    } catch (error) {
        alert(error.message)
    }
}
