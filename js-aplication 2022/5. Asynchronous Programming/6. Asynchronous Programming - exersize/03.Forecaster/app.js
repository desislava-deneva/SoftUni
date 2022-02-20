function attachEvents() {
   let input = document.getElementById('location');
   let button = document.getElementById('submit');

   let forecast = document.getElementById('forecast');
   let current = document.getElementById('current');
   let upcoming = document.getElementById('upcoming');

   let emojies = {
      'Sunny': `\u2600`, // ☀
      'Partly sunny': `\u26C5`, //⛅
      'Overcast': `\u2601`, // ☁
      'Rain': `\u2614`, // ☂
      'Degrees': `\u00B0`  // °
   }

   button.addEventListener('click', async () => {

      try {
         let url = `http://localhost:3030/jsonstore/forecaster/locations`;
         let response = await fetch(url);
         if (response.status != 200) {
            throw new Error(`${response.status}`);
         }
         let data = await response.json();
         let element = data.find(e => e.name === input.value);

         if (element) {
            try {
               let url2 = `http://localhost:3030/jsonstore/forecaster/today/${element.code}`;
               let response2 = await fetch(url2);
               let data2 = await response2.json();

               if (response2.status != 200) {
                  throw new Error('the server doesn\'t respond or the location name cannot be found')
               }
               current.innerHTML = '<div class="label">Current conditions</div>';

               forecast.style.display = 'block';

               let div = createElement('div', '', ['class', 'forecasts'], current);
               let currEmoji = `${emojies[data2.forecast.condition]}`;

               createElement('span', `${currEmoji}`, ['class', 'condition symbol'], div);

               let spanCondition = createElement('span', '', ['class', 'condition'], current);
               createElement('span', data2.name, ['class', 'forecast-data'], spanCondition);
               createElement('span', `${data2.forecast.low}${emojies.Degrees}/${data2.forecast.high}${emojies.Degrees}`, ['class', 'forecast-data'], spanCondition);
               createElement('span', data2.forecast.condition, ['class', 'forecast-data'], spanCondition);

               try {
                  let url3 = `http://localhost:3030/jsonstore/forecaster/upcoming/${element.code}`;
                  let response3 = await fetch(url3);
                  let data3 = await response3.json();
                  
                  if (response3.status != 200) {
                     throw new Error('the server doesn\'t respond or the location name cannot be found')
                  }

                  upcoming.innerHTML = '<div class="label">Three-day forecast</div>';

                  let div = createElement('div', '', ['class', 'forecasts-info'], upcoming);
                  let span1 = createSpan(data3.forecast[0])
                  let span2 = createSpan(data3.forecast[1])
                  let span3 = createSpan(data3.forecast[2])


                  [span1, span2, span3].foreach(x=> div.appendChild(x));

               } catch (error) {
                  console.log(error);
               }
            } catch (error) {
               console.log(error);
            }
         }
      } catch (error) {
         console.log(error);
      }
   });

   function createSpan(data) {

      let currEmoji = `${emojies[data.condition]}`;
      let spanCondition = createElement('span', '', ['class', 'upcoming'], upcoming);
      createElement('span', currEmoji, ['class', 'symbol'], spanCondition);
      createElement('span', `${data.low}${emojies.Degrees}/${data.high}${emojies.Degrees}`, ['class', 'forecast-data'], spanCondition);
      createElement('span', data.condition, ['class', 'forecast-data'], spanCondition);

      return spanCondition;
   }

   function createElement(type, content, attributes = [], appender) {
      const element = document.createElement(type);

      if (content) {
         element.textContent = content;
      }

      if (attributes.length > 0) {
         element.setAttribute(attributes[0], attributes[1]);
      }

      if (appender) {
         appender.appendChild(element);
      }

      return element;
   }
}

attachEvents();