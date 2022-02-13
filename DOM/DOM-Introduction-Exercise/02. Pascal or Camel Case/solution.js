function solve() {
  let firstInput = document.getElementById('text').value;
  let secondInput = document.getElementById('naming-convention').value;
  firstInput = firstInput.toLowerCase();

  let result = document.getElementById('result');

  if (secondInput == 'Camel Case') {

    function convertTextInCamleCase(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
    }

    result.textContent +=  convertTextInCamleCase(firstInput);

  } else if (secondInput == 'Pascal Case') {

    function convertTextToPascalCase (str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toUpperCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
    }

    result.textContent += convertTextToPascalCase(firstInput);

  } else {
    result.textContent += 'Error!'
  }

}