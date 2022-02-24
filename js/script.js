/*** 
 *  Array that holds 5 objects each with up to 5 properties and values. 
***/
const quotes = [
  {
    quote: "No amount of money ever bought a second of time",
    source: "Tony Stark",
    citation: "Avengers: Endgame",
    year: 2019,
    tag: "Movies"
  },
  {    
    quote: "The world is big and I want to have a good look at it before it gets dark",
    source: "John Muir",  
    citation: "",
    year: "",
    tag: "Inspirational"
  },
  { 
    quote: "I wake up every morning in a bed that's too small, drive my daughter to a school that's too expensive, and then I go to work to a job for which I get paid too little. But on pretzel day....well I like pretzel day.",
    source: "Stanley Hudson",
    citation: "The Office",
    year: 2006,
    tag: "TV Shows"
  },
  {
    quote: "Leslie, I typed your symptoms into the thing up here, and it says you could have network connectivity problems",
    source: "Andy Dwyer",
    citation: "Parks and Recreation",
    year: 2011,
    tag: "TV Shows"
  },
  {
    quote: "We all make choices, but in the end our choices make us",
    source: "Andrew Ryan",
    citation: "Bioshock",
    year: 2007,
    tag: "Video Games"
  }
];

let html = document.getElementById('quote-box');
let lastQuote;
let emptyProp = "";

/***
 *  Function that creates a random number between 0 and the length of the quotes array. It then returns a random object within the quotes array. 
***/

function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
}

/***
 * `printQuote` function
***/

function printQuote() {
  let firstQuote = getRandomQuote();
  let markup = `
            <p class="quote">${firstQuote.quote}</p>
            <p class="source">${firstQuote.source}`;
      
     /* if (firstQuote === lastQuote ) {
        firstQuote = getRandomQuote();
      } else {
        lastQuote = getRandomQuote();
      } */

      if (quotes.citation !== emptyProp){
       markup += `<span class = "citation">${firstQuote.citation}</span>`;
      } 

      if (quotes.year !== emptyProp) {
       markup += `<span class = "year">${firstQuote.year}</span>`;
      } 

      if (quotes.tag !== emptyProp) {
      markup += `<span class = ""source">, ${firstQuote.tag}</span>`;
      } 
      markup += `</p>`;

      html.innerHTML = markup;
}

printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false);