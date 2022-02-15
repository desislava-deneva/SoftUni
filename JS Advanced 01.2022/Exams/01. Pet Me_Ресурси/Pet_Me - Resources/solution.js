function solve() {
    const form = document.getElementById('container');
    const petsList = document.querySelector('#adoption > ul');
    const adoptedList = document.querySelector('#adopted > ul');

    let [name, age, kind, owner, addBtn] = Array.from(form.children);
    addBtn.addEventListener('click', addPet);

    function addPet(e) {
        e.preventDefault();
        if (!(name.value && Number(age.value) && kind.value && owner.value)) {
            return;
        }

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;

        const sOwner = document.createElement('span');
        sOwner.textContent = `Owner: ${owner.value}`;

        const contactBtn = document.createElement('button');
        contactBtn.textContent = 'Contact with owner';

        li.appendChild(p);
        li.appendChild(sOwner);
        li.appendChild(contactBtn);
        petsList.appendChild(li);

        contactBtn.addEventListener('click', makeContact);

        name.value = '';
        age.value = '';
        kind.value = '';
        owner.value = '';
    }

    function makeContact(e) {
        const parent = e.target.parentElement;
        e.target.remove();

        const takeBtn = document.createElement('button');
        takeBtn.textContent = 'Yes! I take it!';

        const div = document.createElement('div');
        const inputEl = document.createElement('input');
        inputEl.setAttribute('placeholder', 'Enter your names');

        div.appendChild(inputEl);
        div.appendChild(takeBtn);

        parent.appendChild(div);

        takeBtn.addEventListener('click', (e) => {
            if (!inputEl.value) {
                return;
            }

            e.target.textContent = 'Checked';
            adoptedList.appendChild(e.target.parentElement.parentElement);

            const span = e.target.parentElement.parentElement.querySelector('span');
            span.textContent = `New Owner: ${inputEl.value}`;

            const checkBtn = document.createElement('button');
            checkBtn.textContent = 'Checked';

            e.target.parentElement.parentElement.appendChild(checkBtn);
            e.target.parentElement.remove();

            checkBtn.addEventListener('click', (ev) => {
                ev.target.parentElement.remove();
            });
        });
    }
}