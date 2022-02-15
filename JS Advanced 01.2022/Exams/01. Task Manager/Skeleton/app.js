function solve() {
    let [section1,section2, section3, section4] = document.querySelectorAll('section');

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');

    let addBtn = document.getElementById('add');

    let openDiv = section2.querySelectorAll('div')[1];
    let inProgress = section3.querySelectorAll('div')[1];
    let complete = section4.querySelectorAll('div')[1];

    addBtn.addEventListener('click', addTask);
    openDiv.addEventListener('click', moveTask);
    inProgress.addEventListener('click', movefinishTask)

    function addTask(ev) {
        ev.preventDefault();

        if (task.value && description.value && date.value) {
            
            let article = createElement('article', '', '', openDiv);
            createElement('h3', `${task.value}`, '', article);
            createElement('p', `Description: ${description.value}`, '', article);
            createElement('p', `Due Date: ${date.value}`, '', article);
            let div = createElement('div','','flex', article);
            createElement('button', `Start`, 'green', div);
            createElement('button', `Delete`, 'red', div);

            task.value = '';
            description.value ='';
            date.value = '';
        }
    }

    function moveTask(ev) {
        ev.preventDefault();
        let currTargetArticle = ev.target.parentElement.parentElement;
        
        if (ev.target.textContent == 'Start') {

            currTargetArticle.querySelector('button').remove();
            let divEl = currTargetArticle.querySelector('div');
            inProgress.appendChild(currTargetArticle);
            
            createElement('button', 'Finish', 'orange', divEl);
        }else{
            currTargetArticle.remove();
        }
    }

    function movefinishTask(ev) {
        ev.preventDefault();
        let currTargetArticle = ev.target.parentElement.parentElement;

        if (ev.target.textContent == 'Finish') {
            
            currTargetArticle.querySelector('button').remove()
            currTargetArticle.querySelector('button').remove()

            complete.appendChild(currTargetArticle);
        }else{
            currTargetArticle.remove()
        }
    }

    function createElement(type, content, attribute, appender) {
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