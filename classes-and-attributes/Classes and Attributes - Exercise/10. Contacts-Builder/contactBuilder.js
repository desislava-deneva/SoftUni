class Contact {
    constructor(firstName, lastName, phone, email) {
        this.names = `${firstName} ${lastName}`;
        this.phone = `\u260E ${phone}`;
        this.email = `\u2709 ${email}`;
        this._online = false;
        this.divTitleElement = document.createElement('div');
    }

    get online(){
        return this._online;
    }

    set online(value){
        this._online = value;

        this._online = this._online == true ? this.divTitleElement.classList.add('online')
        : this.divTitleElement.classList.remove('online');
    }
    

    render(id) {
        let divEl = document.getElementById(id);

        let article = createElement('article', '', '', divEl);
        let divTitle = createElement('div', `${this.names}`, 'title', article)
        let button = createElement('button', `\u2139`, '', divTitle);
        let divInfo = createElement('div', '', 'info', article);
        divInfo.style.display = 'none'
        createElement('span', `${this.phone}`, '', divInfo);
        createElement('span', `${this.email}`, '', divInfo);

        button.addEventListener('click', (ev)=>{

            divInfo.style.display = divInfo.style.display == 'none' ? 'block' : 'none';

        })

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
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];  contacts.forEach(c => c.render('main'));
  
//   // After 1 second, change the online status to true
//   setTimeout(() => contacts[1].online = true, 2000);
  