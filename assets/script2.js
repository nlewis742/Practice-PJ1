console.log(`Here!`);
var resultTextEl = document.querySelector('#result-text');



// Fetches Bird API
// var selected = document.querySelector(`.country`);

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

function getParams() {
    // Get the search params out of the URL and the Query itself
    var countryParam = document.location.search.split('?').pop();
    console.log(countryParam);
  
    searchApi(countryParam);
  }

  function searchApi(countryParam) {
    var cntQueryUrl = 'https://xeno-canto.org/api/2/recordings?query=cnt:brazil';
  
    if (countryParam) {
        cntQueryUrl = 'https://xeno-canto.org/api/2/recordings?' + countryParam;
    }
    
    fetch(cntQueryUrl)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
  
        return response.json();
      })
      .then(function (cntBird) {
        console.log(cntBird);
      })
      .catch(function (error) {
        console.error(error);
      });
      
        // write query to page so user knows what they are viewing
//         resultTextEl.textContent = cntBird.countryParam;
  
//         console.log(locRes);
  
//         if (!locRes.results.length) {
//           console.log('No results found!');
//           resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
//         } else {
//           resultContentEl.textContent = '';
//           for (var i = 0; i < locRes.results.length; i++) {
//             printResults(locRes.results[i]);
//           }
//         }
//       })

//       });
    }