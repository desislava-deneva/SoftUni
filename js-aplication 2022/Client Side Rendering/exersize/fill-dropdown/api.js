
export async function getAllData() {
    let url = 'http://localhost:3030/jsonstore/advanced/dropdown';
    try {

        let res = await fetch(url);
        if (res.status != 200) {
            let error = await res.json();
            throw new Error(error.message);
        }

        let data = await res.json();
        return Object.values(data);
    } catch (error) {
        alert(error.message);
        throw new Error(error.message)
    }
}

export async function postData(text) {
    let url = 'http://localhost:3030/jsonstore/advanced/dropdown';

    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text})
    }

    try {
        let res = await fetch(url, options);
        if (res.status != 200) {
            let error = await res.json();
            throw new Error(error.message);
        }

        return

    } catch (error) {
        alert(error.message);
        throw new Error(error.message)
    }
}



