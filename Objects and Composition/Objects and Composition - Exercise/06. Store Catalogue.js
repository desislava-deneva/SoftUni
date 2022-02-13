function solve(array) {
    let obj = {};
    
      array.forEach(el => {
          let[name, price] = el.split(' : ');
          price = Number(price);
          let letter = name[0];
    
          if (!obj[letter]) {
            obj[letter] = {};
        }
        obj[letter][name] = price;
        
      });
      
      let letters = Object.keys(obj).sort((a,b)=> a.localeCompare(b));
      
      for (const key of letters) {
          let sortable = Object.entries(obj[key]).sort((a,b)=> a[0].localeCompare(b[0]));
          
          console.log(key);
    
          sortable.forEach(el => {
              console.log(`  ${el[0]}: ${el[1]}`);
          });
      }
    }