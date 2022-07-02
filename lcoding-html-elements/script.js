const btn = document.querySelector("button");
btn.addEventListener("click", function() {

    const ul = document.querySelector("ul");
    const newLi = document.createElement("li");

    const liText = document.createTextNode("quattro");
    newLi.appendChild(liText);

    ul.appendChild(newLi);
});
const btnDelete = document.querySelector("button:nth-child(2)");
btnDelete.addEventListener("click", function() {

    const ul = document.querySelector("ul");

    ul.innerText = "";
});
