const request = require(`request`);

const arg = process.argv.slice(2);
let breed = arg[0];

const fetchBreedDescription = (breed, callback) => {

  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`${breed} not found.`);
    } else {
      console.log(data[0].description);
      //callback(data[0].description);
    }
  });
};
/*
const x = (data) => {
  console.log(data);
};
*/
fetchBreedDescription(breed);