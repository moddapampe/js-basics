const state = {
    todos: [
        { description: "learn to walk", done: true },
        { description: "learn to run", done: false },
        { description: "learn to fly", done: false },
    ],
}

function renderTodos() {
    const list = document.querySelector('#list');
    list.innerHTML = "";

    state.todos.forEach(todo => {
        const todoLi = document.createElement("li");

        todoLi.todoObj = todo;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.done;
        todoLi.appendChild(checkbox);

        const todoText = document.createTextNode(todo.description);
        todoLi.append(todoText);

        list.appendChild(todoLi);
    });
}

renderTodos();

const list = document.querySelector('#list');
list.addEventListener("change", (e) => {
    const checkbox = e.target;
    const LiElement = checkbox.parentElement;
    const todo = LiElement.todoObj;

    todo.done = checkbox.checked;

});