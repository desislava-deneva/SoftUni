function attachEvents() {
    document.getElementById('refresh').addEventListener('click', loadMessages);
    loadMessages();
    document.getElementById('submit').addEventListener('click', onSubmit)
}

let list = document.getElementById('messages');

attachEvents();

async function loadMessages() {
    let url = 'http://localhost:3030/jsonstore/messenger';
    let res = await fetch(url)
    let data = await res.json();

    let messeges = Object.values(data)

    list.value = messeges.map(m => `${m.author}: ${m.content}`).join('\n')
}

async function createMessage(messege) {
    let url = 'http://localhost:3030/jsonstore/messenger'

    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(messege),
    }

    let res = await fetch(url, options);
    let result = await res.json();
    return result;
}

async function onSubmit(ev) {
    let [authorInput, contentInput] = document.querySelectorAll('input');
    let author = authorInput.value;
    let content = contentInput.value;
    
    await createMessage({ author, content });
    contentInput.value = '';
    list.value+= '\n' + `${author}: ${content}`
}