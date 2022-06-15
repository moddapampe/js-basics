const todos = [];
const list = document.querySelector("#list");

for (let i = 0; i < todos.length;  i++); {
  const li = document.createElement("li");
  li.innerText = todos [i];
  list.append(li);
}
