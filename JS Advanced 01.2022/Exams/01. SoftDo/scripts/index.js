function mySolution() {
    let inputSection = document.querySelector('section');
    let textareaEl = inputSection.querySelector('textarea');
    let usernameEl = inputSection.querySelector('input');
    let pendingQuestions = document.getElementById('pendingQuestions');
    let openQuestions = document.getElementById('openQuestions');

    let sendButton = inputSection.querySelector('button');

    sendButton.addEventListener('click', (ev) => {
        ev.preventDefault();

        let name = usernameEl.value ? usernameEl.value : 'Anonymous';
        let question = textareaEl.value;

        let divEl1 = createElement('div', '', 'pendingQuestion', pendingQuestions)
        let imgEl = createElement('img', '', '', divEl1);
        imgEl.src = "./images/user.png";
        imgEl.width = "32";
        imgEl.height = "32";

        let spanEl = createElement('span', `${name}`, '', divEl1);
        let p = createElement('p', `${question}`, '', divEl1);

        let divEl2 = createElement('div', '', 'actions', divEl1);
        let archiveBtn = createElement('button', 'Archive', 'archive', divEl2);
        let openBtn = createElement('button', 'Open', 'open', divEl2);
    });

    pendingQuestions.addEventListener('click', (ev) => {
        ev.preventDefault();
        let div = ev.target.parentElement.parentElement;
        if (ev.target.textContent == 'Archive') {
            div.remove()
        }

        if (ev.target.textContent == 'Open') {
            div.querySelector('button').remove();
            div.classList = 'openQuestion';

            let btnReply = div.querySelector('button');
            btnReply.classList = 'reply';
            btnReply.textContent = 'Reply'
            let divOpen = createElement('div', '', 'replySection', div);
            divOpen.style.display = 'none';
            let replyInput = createElement('input', '', 'replyInput', divOpen);
            replyInput.type = 'text';
            replyInput.placeholder = 'Reply to this question here...';
            let sendButton = createElement('button', 'Send', 'replyButton', divOpen);
            let ol = createElement('ol', '', '', divOpen);
            ol.classList = 'reply';
            ol.type = '1';

            openQuestions.appendChild(div);

            btnReply.addEventListener('click', (ev) => {
                if (ev.target.textContent == 'Reply') {
                    divOpen.style.display = '';
                    btnReply.textContent = 'Back'
                } else if (ev.target.textContent == 'Back') {
                    divOpen.style.display = 'none';
                    btnReply.textContent = 'Reply'
                }
            })

            sendButton.addEventListener('click', () => {

                if (replyInput.value != '') {
                    createElement('li', `${replyInput.value}`, '', ol);
                }
            });
        }
    });

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