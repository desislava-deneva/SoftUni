
async function lockedProfile() {
    // Test it without turning on the server :)
    document.querySelector('.profile').remove();
    const main = document.getElementById('main');
     let url = 'http://localhost:3030/jsonstore/advanced/profiles';
     fetch(url)
     .then(body => body.json())
     .then(response => {
           Object.values(response).forEach(person => {
               main.appendChild(profileCreator(person.username, person.age, person.email));
           })
     })
     .catch(err => {
         let img = document.createElement('img');
         img.src = 'http://www.quickmeme.com/img/bd/bdcd6e56b51e5bd690db16f4ba2116c4c44bb285e7a740fda4c1734217ffcbc1.jpg';
         main.appendChild(img)
     })
 
     function showMoreHandler(e) {
        let profile = e.target.parentNode;
        let divToReveal = profile.querySelector('#userHiddenFields');
        let isChecked = profile.querySelector('input').checked === true;
        if(!isChecked) {
            divToReveal.style.display = divToReveal.style.display === 'none' ? 'block' : 'none';
        }
     }
    
    function profileCreator(name, age, email) {
        let profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');
 
        let img = document.createElement('img');
        img.src = './iconProfile2.png';
        img.classList.add('userIcon');
 
        let lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';
        let lockInput = document.createElement('input');
        lockInput.setAttribute('type', 'radio')
        lockInput.setAttribute('name', 'userLocked')
        lockInput.setAttribute('value', 'lock');
        lockInput.checked = true;
 
        let unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';
        let unlockInput = document.createElement('input');
        unlockInput.setAttribute('type', 'radio')
        unlockInput.setAttribute('name', 'userLocked')
        unlockInput.setAttribute('value', 'unlock');
        let br = document.createElement('bg');
        unlockInput.appendChild(br);
 
        let hr = document.createElement('hr');
 
        let userNameLabel = document.createElement('label');
        userNameLabel.textContent = 'Username';
 
        let usernameField = document.createElement('input');
        usernameField.setAttribute('type', 'text');
        usernameField.setAttribute('name', 'userUsername')
        usernameField.setAttribute('value', '');
        usernameField.value = name;
        usernameField.disabled = true;
        usernameField.readOnly = true;
 
        let divForHiddenFields = document.createElement('div');
        divForHiddenFields.setAttribute('id', 'userHiddenFields');
        divForHiddenFields.style.display = 'none';
 
        let hr1 = document.createElement('hr');
 
        let emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:'
        let emailField = document.createElement('input');
        emailField.setAttribute('type', 'text');
        emailField.setAttribute('name', 'userEmail')
        emailField.setAttribute('value', '');
        emailField.value = email;
        emailField.disabled = true;
        emailField.readOnly = true;
 
 
        let ageLabel = document.createElement('label');
        ageLabel.textContent = 'Age:'
        let ageField = document.createElement('input');
        ageField.setAttribute('type', 'text');
        ageField.setAttribute('name', 'userAge')
        ageField.setAttribute('value', '');
        ageField.value = age;
        ageField.disabled = true;
        ageField.readOnly = true;
 
        let showMoreButton = document.createElement('button');
        showMoreButton.textContent = 'Show More';
        showMoreButton.addEventListener('click', showMoreHandler);  
 
        profileDiv.appendChild(img);
        profileDiv.appendChild(lockLabel);
        profileDiv.appendChild(lockInput);
        profileDiv.appendChild(unlockLabel);
        profileDiv.appendChild(unlockInput);
        profileDiv.appendChild(hr);
        profileDiv.appendChild(userNameLabel);
        profileDiv.appendChild(usernameField);
 
        divForHiddenFields.appendChild(hr1);
        divForHiddenFields.appendChild(emailLabel);
        divForHiddenFields.appendChild(emailField);
        divForHiddenFields.appendChild(ageLabel);
        divForHiddenFields.appendChild(ageField);
        
        profileDiv.appendChild(divForHiddenFields);
        profileDiv.appendChild(showMoreButton);
        
       return profileDiv;
    }
}