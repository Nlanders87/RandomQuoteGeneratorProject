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

let html = document.getElementById('quote-box'); //sets the html variable to use the getElementbyId method to select the quote-box element
let emptyProp = ""; //variable that stores an empty string to be compared against in the printQuote() function


/***
 *  Function that creates a random number between 0 and the length of the quotes array. It then returns a random object within the quotes array. 
***/

function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length); 
    return quotes[randomQuote];
}

/* Function that creates a random color by generating a random number and multiplying it by the total number of possible hex values. 
   It then converts it to a string. With .toString it will return letters of the alphabet for any number higher than 9. So in this case it wil return 0123456789abcdef.
   Then it reduces the possible length to 6 and rounds it down to the nearest integer.  Then concatenates a '#' to the front to make it a readable hex value */

function getRandomColor() {
  let randomColor = '#' + Math.floor(Math.random() * (256* (256 * 256)).toString(16).padStart(6)); 
  return randomColor;
}

/***
 *  Function that calls the getRandomQuote() function and then uses its value to print html to the page
***/

function printQuote() {
  let firstQuote = getRandomQuote();
  let markup = `
            <p class="quote">${firstQuote.quote}</p>
            <p class="source">${firstQuote.source}`;
      
//Conditional statements to compare the citation, year and tag property values to an empty string. Then assigns a temperate literal to print to the page when it evaluates to true. 

      if (quotes.citation !== emptyProp){                                     
       markup += `<span class = "citation">${firstQuote.citation}</span>`;     
      } 

      if (quotes.year !== emptyProp) {
       markup += `<span class = "year">${firstQuote.year}</span>`;
      } 

      if (quotes.tag !== emptyProp) {
       markup += `<span>, ${firstQuote.tag}</span>`;
      } 
      markup += `</p>`; //adds the closing the paragraph tag to the html string

      html.innerHTML = markup;  //sets the html variable to inherit the .innerhtml property and gives it the value from the previous conditional statements

      document.body.style.background = getRandomColor(); // calls the random color function and sets it's value to the background element 
}

printQuote(); //call printQuote() function 

setInterval(printQuote, 8000); //sets a timer to refresh the quote every 8 seconds

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false);

 