const btn = document.querySelector('button');
const randomQuote = document.querySelector('randomquote')


btn.addEventListener("click", function() {
  
  const p = document.querySelector("p");
  fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
  .then(response => response.json())

  .then(data => { 
    p.innerText = "test", data.quoteText;  
    console.log(data);
  });
});
