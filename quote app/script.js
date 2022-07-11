let btn = document.querySelector("button");
let randomQuote = document.querySelector("p");
let author = document.querySelector("small");





fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
  .then((response) => {
    return response.json();
  })
  .then((randomObject) => {
    randomQuote.innerText = randomObject.data[0].quoteText + ", " + randomObject.data[0].quoteAuthor;
     ", " + randomObject.data[0].quoteAuthor;
  });

btn.addEventListener("click", () => {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      return response.json();
    })
    .then((randomObject) => {
      randomQuote.innerText = randomObject.data[0].quoteText + ", " + randomObject.data[0].quoteAuthor;
    });
});