function colorize() {
    let tableElements = Array.from(document.getElementsByTagName('tr'));
    
    for (let index = 1; index < tableElements.length; index+=2) {
        
        tableElements[index].style.background = 'teal';
    }
}