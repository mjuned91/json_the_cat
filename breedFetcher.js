const request = require(`request`);

const fetchBreedDescription = (breed, callback) => {

  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`${breed} not found.`);
    } else {
      //console.log(data[0].description);
      callback(null, data[0].description);
    }
  });
};
/*
const x = (data) => {
  console.log(data);
};
*/
//fetchBreedDescription(breed);

module.exports = { fetchBreedDescription };