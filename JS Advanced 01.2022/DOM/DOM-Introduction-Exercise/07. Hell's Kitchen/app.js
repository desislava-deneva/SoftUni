function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = document.getElementsByTagName('textarea')[0].value;
      let textarea = JSON.parse(input);
      let bestRestaurantHtml = document.querySelector('#bestRestaurant p');
      let bestWorkersHtml = document.querySelector('#workers p');

      let bestResturant = '';
      let currBestAverageSalary = 0;
      let bestSalary=0;

      let resturants = {} ;

      textarea.forEach(line => {
         let [resturant, workersString] = line.split(' - ');

         let splitedWorker = workersString.split(', ');

         splitedWorker.forEach(w => {
            let [name, salary] = w.split(' ');

            if (!resturants[resturant]) {
               resturants[resturant] = [];
            }

            resturants[resturant].push({ name : name, salary: Number(salary)});
         });

         let sumSalary = resturants[resturant].reduce((a, b) => a + b.salary, 0);

         let averageSalary = (sumSalary / resturants[resturant].length) || 0;

         if (averageSalary > currBestAverageSalary) {
            currBestAverageSalary = averageSalary;
            bestResturant = resturant;
         }
      });

      for (const key in resturants) {
           resturants[key].sort((a,b)=> b.salary - a.salary)
      }

      
      bestSalary = resturants[bestResturant][0].salary;
      bestRestaurantHtml.textContent += `Name: ${bestResturant} Average Salary: ${currBestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

      resturants[bestResturant].forEach(w => 
         bestWorkersHtml.textContent+=  `Name: ${w.name} With Salary: ${w.salary} `);
   }
}