function filterEmployees(data, criteria) {

    let input = JSON.parse(data);

    let [key, value] = criteria.split('-');

    let index = 0;

    input.map(el => {

      if (el[key] == value) {
        console.log(`${index}. ${el.first_name} ${el.last_name} - ${el.email}`);
        index++;
      }
    })
}

filterEmployees(
    `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'

)