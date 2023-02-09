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

selected.addEventListener('change', (countryInput));
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
}
