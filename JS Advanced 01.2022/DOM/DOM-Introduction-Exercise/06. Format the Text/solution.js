function solve() {

  function findSentenceCount() {

    let textInp = document.getElementById('input');

    let sentences = textInp.value.split('. ');

    sentences = sentences.filter(el => el !== ' ' && el !== '');

    console.log(sentences);

    return [sentences.length, sentences];

  }


  function paragraphCreation() {

    let countOfSent = findSentenceCount()[0];

    let sentences = findSentenceCount()[1];

    let paragraphs = [];

    let curPar = [];

    if (countOfSent <= 3) {

      let curSent = `<p>`;

      while (sentences.length > 0) {

        if (sentences.length === 1) {

          curSent += `${sentences.shift()}`;

        } else {

          curSent += `${sentences.shift()}.`;

        }

      }

      curSent += `</p>`;

      curPar.push(curSent);

      paragraphs.push(curPar);

      curPar = [];

    } else {

      while (sentences.length > 0) {

        let i = 1;

        let curSent = `<p>`;

        while (i <= 3) {

          curSent += `${sentences.shift()}.`;

          i++;

        }

        curSent += `</p>`;

        curPar.push(curSent);

        paragraphs.push(curPar);

        curPar = [];

      }


    }

    console.log(paragraphs);


    let output = document.getElementById('output');

    output.innerHTML = paragraphs.join(' ');



  }


  paragraphCreation();


}