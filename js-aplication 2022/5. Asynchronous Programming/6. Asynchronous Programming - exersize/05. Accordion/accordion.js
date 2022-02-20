async function solution() {

    let section = document.getElementById('main');

    let titleOfArticle = await getRequest(`http://localhost:3030/jsonstore/advanced/articles/list`);
    createHtmlElemetns(titleOfArticle);
    section.addEventListener('click', showInfo);


    function showInfo(ev) {
        let element = ev.target.parentElement.parentElement.querySelector('.extra');
        if (ev.target.textContent === 'More') {
            element.style.display = 'block';
            ev.target.textContent = 'Less'
        } else if (ev.target.textContent === 'Less') {
            element.style.display = 'none';
            ev.target.textContent = 'More'
        }
    }

    async function createHtmlElemetns(titleOfArticle) {
        for (const line of titleOfArticle) {
            let details = await getRequestById(line._id);
            section.innerHTML += `<div class="accordion">
            <div class="head">
                <span>${line.title}</span>
                <button class="button" id=${line._id}>More</button>
            </div>
            <div class="extra">
                <p>${details.content}</p>
            </div>
        </div>`;

        }
    }

    async function getRequestById(id) {
        let details = await getRequest(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`);
        return details;
    }

    async function getRequest(url) {
        try {
            let response = await fetch(url);
            if (response.status != 200) {
                throw new Error(response.status);
            }
            return response.json();
        } catch (error) {
            return error;
        }

    }
}



solution();