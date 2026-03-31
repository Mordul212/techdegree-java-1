/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

quotes = [
  { quote : "May the Force be with you", source : "Yoda", citation : "Star Wars", year : "1977", genre : "Science Fiction" },
  { quote : "There's no place like home", source : "Dorothy", citation : "The Wizard of Oz", year : "1939", genre : "Fantasy" },
  { quote : "You can't handle the truth!", source : "Col. Nathan R. Jessep", citation : "A Few Good Men", year : "1992", genre : "Drama" },
  { quote : "You're gonna need a bigger boat", source : "Chief Martin Brody", citation : "Jaws", year : "1975", genre : "Thriller" },
  { quote : "I'll be back", source : "T-800", citation : "The Terminator", year : "1984", genre : "Science Fiction" },
  //{ quote : "No Citation", source : "No Year", citation : "", year : "" } // Test quote
];

// function to change background color
function changeBGColor() {
  let redColor = Math.floor( Math.random() * 255 );
  let greenColor = Math.floor( Math.random() * 255 );
  let blueColor = Math.floor( Math.random() * 255 );
  // Source - https://stackoverflow.com/a/197761
  // Posted by user7094, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-03-30, License - CC BY-SA 4.0
  document.body.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`; //Divakar Rajesh helped with rgb syntax
}

/***
 * `getRandomQuote` function
***/
let choice = [];
let lastQuote = [];

function getRandomQuote() {
  do {
  let chance = Math.floor( Math.random() * quotes.length ) // NECESSARY - variable to store random number ranging from zero to the index of the last item in the quotes array.
  choice = quotes[ chance ]; //randomly grab quote from selection
  } while ( choice.quote === lastQuote.quote ); // compare grabbed quote with previous displayed quote
  lastQuote = choice; // update lastquote to new choice
  return choice;
}

/***
 * `printQuote` function
***/

function printQuote() {
  let grab = getRandomQuote();// NECESSARY - variable to store a random quote object returned from the getRandomQuote() function.
  let quoteHTML = `<p class = "quote"> ${grab.quote}</p> <p class = "source"> ${grab.source}`;
  if (choice.citation !== ""){
      quoteHTML += `<span class="citation"> ${grab.citation} </span>`
      }
  if (choice.year !== ""){
      quoteHTML += `<span class="year"> ${grab.year} </span>`
      } 
  if (choice.genre !== ""){ // additional property
      quoteHTML += `<span class="genre"> ${grab.genre} </span>`
      } 
  quoteHTML += "</p>" // close paragraph element
  document.getElementById('quote-box').innerHTML = quoteHTML; // change displayed quote on webpage
  changeBGColor();
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);