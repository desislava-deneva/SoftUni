function solve() {
  let generateTextAreaElement = document.querySelector('#exercise textarea:first-of-type');
  let generateButtonElement = document.querySelector('#exercise button:first-of-type');
  let resultTextAreaElement = document.querySelector('#exercise textarea:last-of-type');
  let buyButtonElement = document.querySelector('#exercise button:nth-of-type(2)');

  let boughtItemsNames = [];
  let totalPrice = 0;
  let avgDecFactors = [];

  generateButtonElement.addEventListener('click', () => {
      let furnitureArrayOfObjects = JSON.parse(generateTextAreaElement.value);
      let tableBodyElement = document.querySelector('table.table tbody');
      furnitureArrayOfObjects.forEach(item => {
          let name = item.name;
          let img = item.img;
          let price = item.price;
          let decFactor = item.decFactor;

          let newTableRowElement = document.createElement('tr');

          let nameTdElement = document.createElement('td')
          let imgTdElement = document.createElement('td')
          let priceTdElement = document.createElement('td')
          let decFactorTdElement = document.createElement('td')
          let checkboxTdElement = document.createElement('td')

          let namePElement = document.createElement('p')
          let imgElement = document.createElement('img')
          let pricePElement = document.createElement('p')
          let decFactorPElement = document.createElement('p')
          let checkboxElement = document.createElement('input');

          namePElement.textContent = name;
          imgElement.src = img;
          pricePElement.textContent = price;
          decFactorPElement.textContent = decFactor;
          checkboxElement.type = 'checkbox';

          imgTdElement.appendChild(imgElement)
          nameTdElement.appendChild(namePElement)
          priceTdElement.appendChild(pricePElement)
          decFactorTdElement.appendChild(decFactorPElement)
          checkboxTdElement.appendChild(checkboxElement)

          newTableRowElement.appendChild(imgTdElement)
          newTableRowElement.appendChild(nameTdElement)
          newTableRowElement.appendChild(priceTdElement)
          newTableRowElement.appendChild(decFactorTdElement)
          newTableRowElement.appendChild(checkboxTdElement)


          tableBodyElement.appendChild(newTableRowElement);
      })
  })

  buyButtonElement.addEventListener('click', () => {
      let markButtonElements = Array.from(document.querySelectorAll('table.table tbody tr td:nth-of-type(5) input'));

      markButtonElements.forEach(btn => {
          if (btn.checked){
              let trElement = btn.parentElement.parentElement;

              boughtItemsNames.push(trElement.querySelector('td:nth-of-type(2) p').textContent);
              totalPrice += Number(trElement.querySelector('td:nth-of-type(3) p').textContent);
              avgDecFactors.push(Number(trElement.querySelector('td:nth-of-type(4) p').textContent));
          }
      })
      let boughtItemsString = boughtItemsNames.join(', ');
      let totalPriceFixed = totalPrice.toFixed(2);
      let averageDecFactor = avgDecFactors.reduce((a,b) => {
          return (a + b) / avgDecFactors.length
      })
      resultTextAreaElement.value += `Bought furniture: ${boughtItemsString}\nTotal price: ${totalPriceFixed}\nAverage decoration factor: ${averageDecFactor}`
  })
}