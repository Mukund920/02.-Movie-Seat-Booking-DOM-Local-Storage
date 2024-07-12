const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

// get the value of ticket of selected movie from list, here selected value datatype of ticket measns price is 'string' to convert into number by '+'
let ticketPrice = +movieSelect.value;
console.log(ticketPrice);

// save selected movie index
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// update total selected seat and their price
// here, all selected seat from row class are put in count and create a node list of seleted seats
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  // console.log(selectedSeats);

  // here save selected seat data in to local storage
  // copy selected seats into arr
  // map through array
  // return a new array (convert a node list into array)
  // return a index number of array element
  const seatsIndex = [...selectedSeats].map(function (seat) {
    return [...seats].indexOf(seat);
  });
  // console.log(seatsIndex);

  // save data locally
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  // get length of selected node list
  const selectedSeatsCount = selectedSeats.length;
  // console.log(selectedSeatsCount);

  // change the count number of selected seat, and change count id spam value to selectedSeatCount value
  count.innerText = selectedSeatsCount;
  // also change total id span value
  total.innerText = selectedSeatsCount * ticketPrice;
}

// get data from local storage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  // console.log(selectedSeats);
  // when select seat and reload page than this keep selected seat re-apprear wihtout selecting again
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  // also save a selected movie name after reload
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex != null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// change movie also change price of ticket, use 'change' to select from multiple option value
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  // create a index number for movie, index apperars when you select diff movies and their price
  // console.log(e.target.selectedIndex, e.target.value);
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// select whole container and use target to get know when ever click on conatiener it shows elemnt of it in console
// when click on seat it gives a class name as 'seat' with whole html line
// here e.target shows only 'seat' class name html tag when we click over seats and also check that is not occupied
// when we click over occupied seat that also doesnot show
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    // console.log(e.target);
    // turn blue a selected class using toogle which provide select and unselect method
    // here when we select seat toggle add 'selected' class on after 'seat' class in html tag and when select again same seat it removes that class
    e.target.classList.toggle("selected");

    // update the selected seats and price when ever seat is select or unselect, (first create function above )
    updateSelectedCount();
  }
});

// initial count and total set
updateSelectedCount();
