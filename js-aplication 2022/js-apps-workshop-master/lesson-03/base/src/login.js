window.addEventListener('load', async () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', onLogin);

    async function onLogin(ev) {
        ev.preventDefault();
        let url = 'http://localhost:3030/users/login';

        let fromData = new FormData(ev.target);

        let email = fromData.get('email').trim();
        let password = fromData.get('password').trim();
        

        try {
            let response = await fetch(url, {
                method: 'post',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email,password})
            })

            if (response.ok != true) {
                let error = await response.json()
                throw new Error(`Errod: ${error.message}`)
            }
            const data = await response.json();
            const token = await data.accessToken;
            

            localStorage.setItem('token', token);
            window.location.pathname = '/index.html';
            
        } catch (error) {
            alert(error.message)
        }
    }
});