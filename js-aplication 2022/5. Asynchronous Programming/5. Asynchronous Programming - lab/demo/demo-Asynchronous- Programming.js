    //document.querySelector('button').addEventListener('click',solve() );


function solve() {
    function onClick() {
        let req = makeRequest('http swapi.dev/api/planets/1/');
        req
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    return onClick();

    //universal Function get request
    function makeRequest(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(resolve)
                .catch(reject);
        });
    }
}

    //document.querySelector('button').addEventListener('click', makeRequest1);


//Make a Error when response in failed 
function makeRequest1() {
    fetch('https://swapi.dev/api/peoplessss/1/') // error in url
        .then(response => {
            if (response.ok == false) {
                throw new Error('Request Error')
            }
            return response.text();
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

//document.querySelector('button').addEventListener('click', makeRequest3);

async function makeRequest3() {
    try {
        // await response to finish and then return request async
        const response = await fetch('https://swapi.dev/api/peoplessss/1/'); //error in url
        if (response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`)
        }
        const data = await response.text();
        console.log(data);
    } catch (error) {
        console.log(`Error ${error}`)
    }
}


try {

    //document.querySelector('button').addEventListener('click', makeRequest);

    // await response to finish and then return request printed in brouser 
    const response = await fetch('https://swapi.dev/api/people/1/');
    if (response.ok == false) {
        throw new Error(`${response.status} ${response.statusText}`)
    }
    const data = await response.text();
    let dataJson = JSON.parse(data);
    let body = document.querySelector('body');
    let ul = document.createElement('ul');
    body.appendChild(ul);

    for (const line of Object.entries(dataJson)) {
        let li = document.createElement('li');
        li.textContent = (`${line[0]}: ${line[1]}`) + '\n';
        ul.appendChild(li);
    }
} catch (error) {

    console.log(`Error ${error}`)
}



//get 3 requests with one await
let [v1,v2,v3] = await Promise.all([
    fetch('v1'),
    fetch('v2'),
    fetch('v3')
]);
