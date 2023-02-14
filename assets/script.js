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


  // this saves our searched in local storage
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
      div.style.cursor = "pointer";
      div.classList.add(country)
      console.log(country);
      searchedList.appendChild(div);
      div.addEventListener('click', function() {
        var queryString = `./bird_list.html?query=cnt:${this.textContent}`;
        location.assign(queryString);
      });

  }
}
