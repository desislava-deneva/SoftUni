function solve() {

    let [name, age, kind, currOwner] = document.querySelectorAll('input');
    let btnAdd = document.querySelector('button');

    let adoptionUl = document.querySelector('#adoption > ul');

    let adoption = document.getElementById('adoption');
    let adopted = document.querySelector('#adopted ul');

    btnAdd.addEventListener('click', addPet);
    adoption.addEventListener('click', movePet);

    adopted.addEventListener('click', (ev) => {

        if (ev.target.tagName === 'BUTTON' && ev.target.textContent == 'Checked') {
            ev.target.parentElement.remove();
        }
    })

    function movePet(ev) {

        if (ev.target.tagName === 'BUTTON' && ev.target.textContent == 'Contact with owner') {

            let currTarget = ev.target.parentElement;

            ev.target.textContent = 'Yes! I take it!';
            let div = createAnElement('div', '', '', currTarget);

            let input = createAnElement('input', '', '', div);
            input.setAttribute('placeholder', 'Enter your names');
            div.appendChild(ev.target);
        }

        if (ev.target.tagName === 'BUTTON' && ev.target.textContent == 'Yes! I take it!') {

            let inputNewOwner = ev.target.parentElement.querySelector('input');
            let liElAdoption = ev.target.parentElement.parentElement;

            let [name ,age, kind] = Array.from(liElAdoption.querySelectorAll('strong')).map(el=> el.textContent);

            if (inputNewOwner.value) {
               
                let li = createAnElement('li', '', '', adopted);
                let p = createAnElement('p','','',li);
                createAnElement('strong', `${name}`, '', p);
                p.textContent+= " is a ";
                createAnElement('strong', `${age}`, '', p);
                p.textContent+= " year old ";
                createAnElement('strong', `${kind}`, '', p);
                createAnElement('span', `New Owner: ${inputNewOwner.value}`,'', li);
                createAnElement('button', 'Checked', '', li);
                liElAdoption.remove();

            }
        }
    }

    function addPet(ev) {
        ev.preventDefault();

        if (!name.value || !age.value || !kind.value || !currOwner.value) {
            return;
        }

        let li = createAnElement('li', '', '', adoptionUl)
        let p = createAnElement('p', '', '', li);
        createAnElement('strong', `${name.value}`, '', p);
        p.append(' is a ');
        createAnElement('strong', `${age.value}`, '', p);
        p.append(' year old ');
        createAnElement('strong', `${kind.value}`, '', p);
        createAnElement('span', `Owner: ${currOwner.value}`, '', li);
        createAnElement('button', `Contact with owner`, '', li);


        [name, age, kind, currOwner].map(el => el.value = '');
    }

    function createAnElement(type, content, attribute, appender) {
        const el = document.createElement(type);
        if (attribute) {
            el.setAttribute('class', attribute);
            el.textContent = content;
        } else if (content) {
            el.textContent = content;
        }
        if (appender) {
            appender.appendChild(el);
        }
        return el;
    }

}