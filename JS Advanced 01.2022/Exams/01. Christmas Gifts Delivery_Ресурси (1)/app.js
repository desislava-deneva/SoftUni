function solution() {
    let [sectionAdd, sectionListOfGift, sectionSend, sectionDiscarded] = document.querySelectorAll('section');

    let input = sectionAdd.querySelector('input');
    let btnAdd = sectionAdd.querySelector('button');

    btnAdd.addEventListener('click', addGift);
    sectionListOfGift.addEventListener('click', onClick)

    function addGift(ev) {
        ev.preventDefault();

        if (input.value == '') {
            return;
        }

        let listOfGiftUlEl = sectionListOfGift.querySelector('ul');

        let li = createElement('li', `${input.value}`, 'gift', listOfGiftUlEl);

        let sendBtn = createElement('button', `Send`, '', li);
        sendBtn.setAttribute('id', 'sendButton');

        let discardBtn = createElement('button', `Discard`, '', li);
        discardBtn.setAttribute('id', 'discardButton');

        let liElements = Array.from(listOfGiftUlEl.querySelectorAll('li'));

        sortElements(liElements, listOfGiftUlEl);

        input.value = '';

    }

    function onClick(ev) {
        ev.preventDefault();

        let currEvent = ev.target;
        let buttons = Array.from(currEvent.parentElement.querySelectorAll('button'));

        if (currEvent.textContent == 'Send') {

            let sendGiftsUl = sectionSend.querySelector('ul');
            sendGiftsUl.appendChild(currEvent.parentElement);

            removeElements(buttons);

            let sendGiftsLis = Array.from(sectionSend.querySelectorAll('li'));
            sortElements(sendGiftsLis, sendGiftsUl);

        }else if(currEvent.textContent == 'Discard'){

            let discardUlEl = sectionDiscarded.querySelector('ul');
            discardUlEl.appendChild(currEvent.parentElement);

            removeElements(buttons);

            let discardLi = Array.from(discardUlEl.querySelectorAll('li'))
            sortElements(discardLi, discardUlEl);
            
        }
    }

    function sortElements(arr, appender) {
        arr.sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => appender.appendChild(li))

    }

    function removeElements(arr) {
        arr.filter(el => el.remove());
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