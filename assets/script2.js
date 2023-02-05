console.log(`Here!`);

var selected = document.querySelector(`.country`);

function getCountry (event) {
  var countryURL = 'https://xeno-canto.org/api/2/recordings?query=cnt:brazil';
fetch(countryURL, {
  cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (birdData) {
    console.log(birdData);
  });
}