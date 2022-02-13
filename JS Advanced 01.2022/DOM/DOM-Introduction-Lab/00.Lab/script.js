// Change heading
let headingElement = document.getElementById('superhero-list-heading');
headingElement.textContent += ' from MCU and DCU';

// Show inner HTML or text only
let superheroSectionElement = document.getElementById('superhero-section');
console.log(superheroSectionElement.innerHTML);
console.log(superheroSectionElement.textContent);

// Change background
let siteWrapper = document.getElementById('wrapper');
siteWrapper.style.backgroundColor = 'lightblue';

// Get value from input
function addSuperhero() {
    let superheroNameInputElement = document.getElementById('superhero-name');
    let superheroName = superheroNameInputElement.value;
    console.log(superheroNameInputElement.value);
    

    // Delete value when add button is clicked
    superheroNameInputElement.value = '';

    // Add hero to list
    let superheroListElement = document.getElementById('superhero-list');
    superheroListElement.innerHTML += `<li class="good">${superheroName}</li>`; // Dangerous!!! XSS attacks
}

// Targeting elements by class, returns HTMLCollection
let goodSuperheroesLiElements = document.getElementsByClassName('good');
goodSuperheroesLiElements[0].textContent += ' The Strongest Avenger';
for (const heroElement of goodSuperheroesLiElements) { // This works in JUDGE
    console.log('good superhero: ', heroElement.textContent);
}

// Targeting with css selecotr, returns NodeList
let allSuperheroesLiEelements = document.querySelectorAll('#superhero-list li');
allSuperheroesLiEelements.forEach((x) => { // Doesn't work in JUDGE!!!
    console.log(x.textContent)
});

// Convert HTMLCollection and NodeList to JS Array
let goodSuperheroes = Array.from(goodSuperheroesLiElements); // This is JUDGE Safe
let goodSuperheroes2 = [...goodSuperheroesLiElements] // This is not JUDGE Safe!!
console.log(Array.isArray(goodSuperheroes));

// Get parent element and change background
let bodyElement = siteWrapper.parentElement;
bodyElement.style.backgroundColor = 'lightblue';

// Get children of element
let superheroListElement = document.getElementById('superhero-list');
let childrenElements = superheroListElement.children;
console.log(childrenElements);

// Use show/hide css logic
function toggleSuperheroes() {
    let toggleHeroesButtonElement = document.getElementById('toggle-heroes-button');

    if (superheroListElement.style.display == 'none') {
        superheroListElement.style.display = 'block';
        toggleHeroesButtonElement.textContent = 'Hide';
    } else {
        superheroListElement.style.display = 'none';
        toggleHeroesButtonElement.textContent = 'Show';
    }
}

// Add striped style
let oddHeroes = document.querySelectorAll('#superhero-section li:nth-of-type(2n)');
for (const hero of oddHeroes) {
    hero.style.backgroundColor = 'lightgray';
}