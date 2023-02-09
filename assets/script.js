console.log(`JavaScript file is linked`);

// event listener for our drop-down input to search by country
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    console.log(elems);
    options = {}
    var instances = M.FormSelect.init(elems, options);
  });

  //slide show
  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000)
}

// When a user clicks on a link in the header, the're directed to bottom of page to select from dropdown
// $(document).ready(function() {
//     $("a[href='#search']").click(function(e) {
//       e.preventDefault();
//       $("html, body").animate({
//         scrollTop: $("#searchCountry").offset().top
//       }, 500);
//     });
//   });

//   $(document).ready(function() {
//     $("a[href='#poploc']").click(function(e) {
//       e.preventDefault();
//       $("html, body").animate({
//         scrollTop: $("#poploc").offset().top
//       }, 500);
//     });
//   });

//   $(document).ready(function() {
//     $("a[href='#descrip']").click(function(e) {
//       e.preventDefault();
//       $("html, body").animate({
//         scrollTop: $("#descrip").offset().top
//       }, 500);
//     });
//   });


// // When a user selects a city (or country?) from the dropdown they're redirected to the next page the 2nd html page 
    // Destination is diplayed
    // Local weather is displayed
    // List of local common birds
        // click on icon to play bird sounds?

// At bottom of page one, list of most searched countries
    // this will link to 2nd page

// ** BEHIND THE SCENES ** //

// Need to fetch both APIs

// ** HOMEPAGE ** //

// When a user searches for a city/country on the home page
// Then autofilled options appear based on the data that we have through the Bird API
    // TODO: Create ID on Input Field in HTML (#country)
        // Refer to Third Party APIs, Activity 22
        //  Autocomplete widget using a function
        // Array of possible countries/data points

// When user clicks on "Submit" button after inputting text, then "Submit" button takes them to "Search by Country Page", JavaScript populates the bird data based on the country the user searches
    // 'Click' event listener on "Submit" button
    // Need a function that pulls selected data from API
    // Creates new HTML elements on 2nd HTML page, and appends to that HTML        

// ** SEARCH BY COUNTRY PAGE ** //

    // Creates new HTML elements on this HTML page, and appends to that HTML
        // How we want it to format
        //  DIV > <a> elements, appended to DIV
        // ${Country} // ${Bird Name} // Play Icon (Font Awesome?), starts playing MP3 audio file of bird call, when clicked
            // Click Event listener on Play Icon
        // When you click a bird (another event listener?), show/hide the above and then display more stats about the bird, wikipedia info about country(?), format data in HTML table or something?

        



selected.addEventListener('change', (countryInput));
var searched = [];

// Listening for a change on the drop down input on home page
function countryInput(event) {
  event.preventDefault();

  // Get the value of the input to determine which country to query
  var countryInputVal = document.querySelector(`.country`).value;
  console.log(countryInputVal);

  // Adds the country the user selected to the URL
  var queryString = `./bird_list.html?query=cnt:${countryInputVal}`;

  // Goes to our 2nd HTML page based on above URL
  location.assign(queryString);
    
    var country = countryInputVal.trim();
    if (country === "") {
      return;
    }
    searched.push(country)
    countryInputVal = "";
    localStorage.setItem("searched", JSON.stringify(searched))
  }
  init()

function init() {
  var savedCountries = JSON.parse(localStorage.getItem("searched"));
  var searchedList= document.getElementById('searched-list')
  if (savedCountries !== null) {
      searched = savedCountries;
      console.log(searched);
  }
  for (let i = 0; i < searched.length; i++) {
      var country = searched[i];
      var div = document.createElement("div");
      div.style.textIndent = '30px'
      div.textContent = country;
      div.classList.add(country)
      console.log(country);
      searchedList.appendChild(div);
  }
}
