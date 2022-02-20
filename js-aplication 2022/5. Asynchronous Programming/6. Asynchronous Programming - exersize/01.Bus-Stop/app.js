async function getInfo() {
    let input = document.querySelector('#stopId');
    let stopNameEl = document.getElementById('stopName');
    let busesEl = document.getElementById('buses');
    let button =  document.getElementById('submit');

    let url = `http://localhost:3030/jsonstore/bus/businfo/${input.value}`;

    try {
        stopNameEl.textContent = 'Loading...';
        busesEl.innerHTML ='';
        let response = await fetch(url);
        if (response.status !=  200) {
            throw new Error();
        }
        
        let data = await response.json();
        stopNameEl.textContent = data.name;

        for (const key in data.buses) {
            let li = document.createElement('li');
            li.textContent = `Bus ${key} arrives in ${data.buses[key]} minutes`;
            li.style.textAlign = 'left';
            busesEl.appendChild(li);
        }
    } catch (error) {
        stopNameEl.textContent = error;
        console.log(error);
    }
}
