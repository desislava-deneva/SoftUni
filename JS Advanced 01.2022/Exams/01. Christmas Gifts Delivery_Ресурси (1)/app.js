function solution() {
    let [sectionAddGift,sectionListOfGift,sectionSendGift, sectionDiscardedGift ] =  document.querySelectorAll('section');

    let input = sectionAddGift.querySelector('input');
    let btnAddGift = sectionAddGift.querySelector('button');

    let ulListGift = sectionListOfGift.querySelector('ul');
    let ulSendGift = sectionSendGift.querySelector('ul');
    let ulDiscardedGift = sectionDiscardedGift.querySelector('ul');

    btnAddGift.addEventListener('click', addGift)

    function addGift(ev) {
        ev.preventDefault();

        if (input.value != '') {
            let li = createElement('li', `${input.value}`, 'gift', ulListGift);
            let btnSend = createElement('button', 'Send', '', li);
            btnSend.id = 'sendButton';
            
            let btnDiscard = createElement('button', 'Discard', '', li);
            btnDiscard.id = 'discardButton';

        Array.from(ulListGift.querySelectorAll('li'))
        .sort((a,b)=> a.textContent.localeCompare(b.textContent))
        .forEach(li => ulListGift.appendChild(li));

            btnSend.addEventListener('click', (ev)=>{
                moveOnClick(ev, ulSendGift)
            });

            btnDiscard.addEventListener('click', (ev)=>{
                moveOnClick(ev,ulDiscardedGift);
            });

            input.value = '';
        }
    }

    function moveOnClick(ev, appender){
        let liList = ev.target.parentElement;
        liList.querySelector('button').remove();
        liList.querySelector('button').remove();
        appender.appendChild(liList);
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
