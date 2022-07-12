let btn = document.querySelector("button");
let randomQuote = document.querySelector("p");

function randomQuoteLoader() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      return response.json();
  })
  .then((randomObject) => {
    randomQuote.innerText = randomObject.data[0].quoteText + ", " + randomObject.data[0].quoteAuthor;
  });
}
  
btn.addEventListener("click", () => {
randomQuoteLoader();
});