function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', showMoreInfo))

    function showMoreInfo(ev) {

        let parent = ev.target.parentElement;
        let profileDiv = parent.getElementsByTagName('div')[0]
        let radioCheck = parent.children[4].checked;


        if (radioCheck) {
            if (ev.target.textContent == 'Show more') {
                ev.target.textContent = 'Hide it';
                profileDiv.style.display = 'block'
            } else {
                ev.target.textContent = 'Show more'
                profileDiv.style.display = '';
            }
        }
    }
}