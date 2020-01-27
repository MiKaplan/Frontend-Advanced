var quotes = [
    'first',
    'second',
    'third',
    'forth',
    'fifth'
];

var paragraph = document.getElementById("quote");
var button = document.getElementById("button");

function setRandomQuote() {
    paragraph.innerText = quotes[Math.round(Math.random()*(quotes.length-1))];
}

button.addEventListener("click", setRandomQuote, false);