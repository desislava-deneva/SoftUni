function encodeAndDecodeMessages() {
    let main = document.querySelector('main');
  
    main.addEventListener('click', onClicked);

    function onClicked(ev) {

        let parent = ev.target.parentElement;
        let textArea = parent.children[1];
        let btn = ev.target;

        let parentParentEl = parent.parentElement;
        let arrText = Array.from(textArea.value);
        let convertText = '';


        if (btn.textContent.includes('Encode')) {
            for (let index = 0; index < arrText.length; index++) {
                const element = arrText[index].charCodeAt(0) +1;
                let char = String.fromCharCode(element);
                convertText+= char;
            }

            let textAreaDecode = parentParentEl.children[1].children[1];
            textAreaDecode.value = convertText;
            textArea.value = '';

        }else if(btn.textContent.includes('Decode')) {

            for (let index = 0; index < arrText.length; index++) {
                const element = arrText[index].charCodeAt(0) -1;
                let char = String.fromCharCode(element);
                convertText+= char;
            }

            let textAreaEncode = parentParentEl.children[1].children[1];
            textAreaEncode.value = convertText;
            
        }
    }
    

}