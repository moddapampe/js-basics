const btnAdd = document.querySelector("#add-todo");
const state = {
    todos: [],
};

renderTodos();

function renderTodos() {
    const list = document.querySelector("#list");
    list.innerText = "";

    state.todos.forEach((todo) => {
        const listEl = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.addEventListener("change", (event) => {
            changeTodoState(event, todo);
        });

        const text = document.createElement("p");
        text.innerText = todo.description;

        listEl.append(checkbox, text);
        list.append(listEl);
    });
}

function changeTodoState(e, el) {
    const todoDoneState = e.target.checked;
    el.done = todoDoneState;
}

btnAdd.addEventListener("click", addTodo);

function addTodo() {
    const todoText = document.querySelector("#todo-description");
    const description = todoText.value;

    const todo = new Todo(description);

    state.todos.push(todo);

    renderTodos();
    todoText.value = "";
}

class Todo {
    constructor(description) {
        (this.description = description), (this.done = false);
    }
}