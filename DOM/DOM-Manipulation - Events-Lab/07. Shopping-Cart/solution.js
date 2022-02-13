function solve() {
   let productDivEl = Array.from(document.querySelectorAll('.product'));
   let textArea = document.getElementsByTagName('textarea')[0];
   let checkoutBtn = document.querySelector('.checkout');
   let total = 0;
   let list = [];
   
   productDivEl.forEach(product => {
      let childrenDiv = product.children;
      let nameProduct = childrenDiv[1].children[0].textContent;
      let btn = childrenDiv[2].children[0];
      let priseProduct = Number(childrenDiv[3].textContent);

      btn.addEventListener('click', addProduct);

      function addProduct() {
         total += priseProduct
         textArea.textContent += `Added ${nameProduct} for ${priseProduct.toFixed(2)} to the cart.\n`

         if (!list.includes(nameProduct)) {
            list.push(nameProduct);
         }
      };
   })

   checkoutBtn.addEventListener('click', chekuot);

   
   function chekuot() {

      if (list.length > 0) {
         textArea.textContent += `You bought ${list.join(', ')} for ${total.toFixed(2)}.`
      }else{
         textArea.textContent += `You bought  for ${total.toFixed(2)}.`
      }

      Array.from(document.querySelectorAll('button')).forEach(x => x.disabled = true);
   }
   
}