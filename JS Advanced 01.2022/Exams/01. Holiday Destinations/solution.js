function addDestination() {
    let divInput = document.getElementById('input');
    let [inputCity, inputCountry] = divInput.querySelectorAll('input');
    let seasons = document.getElementById('seasons');
    let valueSeason = seasons.options[seasons.selectedIndex];

    let destinationsList = document.getElementById('destinationsList');

    if (inputCity.value != '' && inputCountry.value != '') {

        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = `${inputCity.value}, ${inputCountry.value}`;
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.textContent = valueSeason.textContent;
        tr.appendChild(td2);

        destinationsList.appendChild(tr);

        inputCity.value = '';
        inputCountry.value = '';

        if (valueSeason.value === 'summer') {

            let summBox = document.getElementById('summer');
            summBox.value = Number(summBox.value) + 1;

        } else if (valueSeason.value === 'autumn') {

            let summBox = document.getElementById('autumn');
            summBox.value = Number(summBox.value) + 1;

        } else if (valueSeason.value === 'winter') {

            let summBox = document.getElementById('winter');
            summBox.value = Number(summBox.value) + 1;

        } else if (valueSeason.value === 'spring') {

            let summBox = document.getElementById('spring');
            summBox.value = Number(summBox.value) + 1;

        }
    }
}