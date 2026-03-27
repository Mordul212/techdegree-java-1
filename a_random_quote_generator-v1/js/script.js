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
  ["May the Force be with you", "Yoda", "Star Wars", "1977" ],
  ["There's no place like home", "Dorothy", "The Wizard of Oz", "1939" ],
  ["You can't handle the truth!", "Col. Nathan R. Jessep", "A Few Good Men", "1992" ],
  ["You're gonna need a bigger boat", "Chief Martin Brody", "Jaws", "1975" ],
  ["I'll be back", "T-800", "The Terminator", "1984" ],
];

/***
 * `getRandomQuote` function
***/
let quote = [];
let lastQuote = ["Every great developer you know got there by solving problems they were unqualified to solve until they actually did it."];

function getRandomQuote() {
  do {
  quote = quotes[ Math.floor( Math.random() * quotes.length ) ]; //randonly grab quote from selection
  } while ( quote[0] === lastQuote[0] ); // compare grabbed quote with previous displayed quote
  lastQuote = quote;
  return quote;
}

console.log(getRandomQuote());

/***
 * `printQuote` function
***/

function printQuote() {
  document.getElementById('quote-box').innerHTML = getRandomQuote();
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);