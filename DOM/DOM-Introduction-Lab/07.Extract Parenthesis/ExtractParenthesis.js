function extract(content) {
    let regex = /\((.+?)\)/gm;
    let text = document.getElementById('content').textContent;

    let maches = regex.exec(text);
    let result = [];

    while (maches != null) {
        result.push(maches[1]);
        maches = regex.exec(text);
    }

    console.log(result.join('; '));
}


