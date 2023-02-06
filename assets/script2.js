console.log(`Here!`);
var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content')


function printResults(resultObj) {
  console.log(resultObj);

  // set up `<div>` to hold result content
  var resultCard = document.createElement('div');
  resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

  var resultBody = document.createElement('div');
  resultBody.classList.add('card-body');
  resultCard.append(resultBody);

  var titleEl = document.createElement('h3');
  titleEl.textContent = resultObj.title;

  var bodyContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + resultObj.date + '<br/>';

  if (resultObj.subject) {
    bodyContentEl.innerHTML +=
      '<strong>Subjects:</strong> ' + resultObj.subject.join(', ') + '<br/>';
  } else {
    bodyContentEl.innerHTML +=
      '<strong>Subjects:</strong> No subject for this entry.';
  }

  if (resultObj.description) {
    bodyContentEl.innerHTML +=
      '<strong>Description:</strong> ' + resultObj.description[0];
  } else {
    bodyContentEl.innerHTML +=
      '<strong>Description:</strong>  No description for this entry.';
  }

  var linkButtonEl = document.createElement('a');
  linkButtonEl.textContent = 'Read More';
  linkButtonEl.setAttribute('href', resultObj.url);
  linkButtonEl.classList.add('btn', 'btn-dark');

  resultBody.append(titleEl, bodyContentEl, linkButtonEl);

  resultContentEl.append(resultCard);
}
// Fetches Bird API
// var selected = document.querySelector(`.country`);

// function getCountry (event) {
//   var countryURL = 'https://xeno-canto.org/api/2/recordings?query=cnt:brazil';
// fetch(countryURL, {
//   cache: 'reload',
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (birdData) {
//     console.log(birdData);
//     console.log(`here next`);
//   });
// }

function getParams() {
    // Get the search params out of the URL and the Query itself
    var countryParam = document.location.search.split(':').pop();
    console.log(countryParam);
  
    searchApi(countryParam);
  }

  function searchApi(countryParam) {

    var cntQueryUrl = 'https://xeno-canto.org/api/2/recordings?query=cnt:';
    if (countryParam) {
    
        cntQueryUrl = 'https://xeno-canto.org/api/2/recordings?query=cnt:' + countryParam + "&page=1";
        resultTextEl.textContent = countryParam;
    }
    console.log(cntQueryUrl);

    fetch(cntQueryUrl)
        .then(function(response) {
            if (!response.ok) {
                throw response.json();
            }

            return response.json();
        })
        .then(function (birdData) {
        
        console.log(birdData);

        for (var i = 0; i < birdData.recordings.length; i ) {
            // printResults(birdData.recordings[i]);
            console.log(birdData.recordings[i].en);
            console.log(birdData.recordings[i].file);
            console.log(birdData.recordings[i].cnt);
            
        }

        })
    // fetch(cntQueryUrl)
    //   .then(function (response) {
    //     if (!response.ok) {
    //       throw response.json();
    //     }
  
    //     return response.json();
    //   })
    //   .then(function (cntBird) {
    //     console.log(cntBird);
    //     resultTextEl.textContent = cntBird.search.query;

    //     if (!cntBird.results.length) {
    //       console.log('No results found!');
    //       resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
    //     } else {
    //       resultContentEl.textContent = '';
    //       for (var i = 0; i < cntBird.results.length; i++) {
    //         printResults(cntBird.results[i]);
    //       }
    //     }
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
      
      // searchApi()
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

    getParams();

    
    function weather() {
      var weatherCountry = document.getElementById('weather');
      var weatherApiKey = "d02feca2db0e95acf19c297c2c394117";
    // var requestWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherCountry}&appid=${weatherApiKey}&units=imperial`
    var requestWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=Qatar&appid=${weatherApiKey}&units=imperial`

     fetch(requestWeatherURL)
    .then(function (response) {
     console.log(response);
      return response.json(); 
      })
    }


weather()
