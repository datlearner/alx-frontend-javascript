import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

getFullResponseFromAPI(true)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

getFullResponseFromAPI(false)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
