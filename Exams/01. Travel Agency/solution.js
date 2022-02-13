window.addEventListener('load', solution);

function solution() {

  let fname = document.getElementById('fname');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let address = document.getElementById('address');
  let code = document.getElementById('code');

  let summitBTN = document.getElementById('submitBTN');
  let editBTN = document.getElementById('editBTN');
  let continueBTN = document.getElementById('continueBTN');

  let obj = {};

  let prevDivInfo = document.getElementById('infoPreview');

  summitBTN.addEventListener('click', onSummit);
  editBTN.addEventListener('click', edit);
  continueBTN.addEventListener('click', onClickContinie);

  function onSummit(ev) {
    ev.preventDefault();

    if (fname.value != '' && email.value != '') {

      ev.target.disabled = true;
      editBTN.disabled = false;
      continueBTN.disabled = false;

      createElement('li', `Full Name: ${fname.value}`, '', prevDivInfo);
      createElement('li', `Email: ${email.value}`, '', prevDivInfo)
      createElement('li', `Phone Number: ${phone.value}`, '', prevDivInfo);
      createElement('li', `Address: ${address.value}`, '', prevDivInfo);
      createElement('li', `Postal Code: ${code.value}`, '', prevDivInfo);

      obj = {
        fname: fname.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        code: code.value
      }

      fname.value = '';
      email.value = '';
      phone.value = '';
      address.value = '';
      code.value = '';

    }
  }

  function edit(ev) {
    ev.preventDefault();

    summitBTN.disabled = false;
    editBTN.disabled = true;
    continueBTN.disabled = true;

    fname.value = obj.fname;
    email.value = obj.email;
    phone.value = obj.phone;
    address.value = obj.address
    code.value = obj.code;

    Array.from(prevDivInfo.children).forEach(el=> el.remove());
  }

  function onClickContinie(ev) {
    let block = document.getElementById('block');
   
    block.innerHTML = '';

    createElement('h3', 'Thank you for your reservation!', '', block);

    
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
