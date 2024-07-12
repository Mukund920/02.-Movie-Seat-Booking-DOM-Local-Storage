# Movie-Seat-Booking
A simple movie seat booking system that allows users to select a movie, choose seats, and see the total cost. The selected seats and movie are saved in local storage to persist between page reloads.

## Overview

This project demonstrates a basic movie seat booking system using HTML, CSS, and JavaScript. Users can:
- Select a movie from a dropdown list.
- Choose seats from the seating layout.
- See the total cost based on the selected seats and movie price.
- The system saves the selected seats and movie in local storage, ensuring the selection persists even after the page is reloaded.

## Usage

1. Clone the repository:
   git clone https://github.com/your-username/movie-seat-booking.git
2. Open the index.html file in your web browser.

3. Select a movie from the dropdown menu.

4. Click on the seats to select or deselect them.

5. The total price and the number of selected seats will be updated automatically.

## How It Works

HTML :
The HTML file contains the structure of the movie seat booking system, including :-

- A dropdown menu to select the movie.
- A section showcasing the meaning of seat colors (available, selected, occupied).
- A container that holds the seating layout.
- A paragraph displaying the number of selected seats and the total price.

CSS :
The CSS file styles the movie seat booking system. It includes styles for :-

- The body, to center the content and set background and text colors.
- The dropdown menu, to style its appearance.
- The container and seats, to create the seating layout and handle different seat states (available, selected, occupied).
- Hover effects for interactive feedback.

JavaScript :
The JavaScript file provides the functionality of the movie seat booking system :-

- Fetches and updates the movie price when a movie is selected.
- Updates the number of selected seats and the total price dynamically.
- Saves and retrieves the selected seats and movie from local storage to maintain state between page reloads.
