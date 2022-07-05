const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click", (e) => {
  if (document.title === "Good Morning") {
      document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
  button.classList.toggle("button-dark");
  body.classList.toggle("body-dark");
});

