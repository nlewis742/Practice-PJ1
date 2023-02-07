var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content')

function getParams() {
    // Get the search params out of the URL and the Query itself
    var countryParam = document.location.search.split(':').pop();
    // Returns the country the user selected on homepage
    console.log(countryParam);
    // Passes the country value into the searchApi function
    searchApi(countryParam);
}


  function searchApi(countryParam) {
    // Takes the country the user selected and adds it into the URL to query the right country via the API, then fetches and returns the response
    var cntQueryUrl = 'https://xeno-canto.org/api/2/recordings?query=cnt:';
    if (countryParam) {
        // Limiting our query to country and only page 1
        cntQueryUrl = 'https://xeno-canto.org/api/2/recordings?query=cnt:' + countryParam + "&page=1";
        // Write the country that the user selected to the 2nd HTML page
        resultTextEl.textContent = countryParam;
    }
    // Logging for testing
    console.log(cntQueryUrl);

    fetch(cntQueryUrl)
        .then(function(response) {
            if (!response.ok) {
                throw response.json();
            }

            return response.json();
        })
        .then(function (birdData) {
        // Logging for testing again
        console.log(birdData);

        for (var i = 0; i < birdData.recordings.length; i++) {
            printResults(birdData.recordings[i]);
            console.log(birdData.recordings[i].en);
            console.log(birdData.recordings[i].file);
            console.log(birdData.recordings[i].cnt);
        }
})
}

// function printResults(recordingsObj) {

    // Created and appended a DIV to the DIV we have in HTML 2nd page
    var birdInfoEl = document.createElement('div');
    resultContentEl.append(birdInfoEl);

    // Created an <a> element to house the bird names, can style like a button with hover and make it link to more info
    var birdName = document.createElement('a');
    birdName.classList.add('bird-button');
    birdName.textContent = recordingsObj.en;
    // test

    // var birdCall = document.createElement('a');
    // birdCall.textContent = 'Bird Call';
    // birdCall.setAttribute('href', recordingsObj.fileName);

    resultContentEl.append(birdName);

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
