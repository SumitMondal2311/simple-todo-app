let todos = [];

const todoContainer = document.getElementsByClassName("todo-container")[0];

const clearTodo = () => {
  document.getElementById("todo").value = "";
};

const input = document.getElementById("todo");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTodo();
  }
});

let todoId = 1;

const addTodo = () => {
  const todo = document.getElementById("todo");
  if (!todo.value) {
    alert("Enter a valid content");
    return;
  }
  const emptyTodosMsg = document.querySelector(".todo-container > strong");
  if (emptyTodosMsg) {
    todoContainer.removeChild(emptyTodosMsg);
  }

  todos.push({ id: todoId, todo: todo.value.trim() });

  todoContainer.innerHTML = "";

  for (let i = todos.length - 1; i >= 0; i--) {
    const todoBox = document.createElement("div");
    todoBox.classList.add("todo-box");
    todoBox.setAttribute("id", todos[i].id);
    const todoContent = document.createElement("p");
    todoContent.innerText = todos[i].todo;
    todoContent.setAttribute("onClick", `checkTodo(${todos[i].id})`);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("onClick", `deleteTodo(${todos[i].id})`);
    todoBox.appendChild(todoContent);
    todoBox.appendChild(deleteBtn);
    todoContainer.appendChild(todoBox);
  }

  todo.value = "";
  todoId++;
};

const checkTodo = (id) => {
  const todo = document.getElementById(id);
  const todoContent = todo.getElementsByTagName("p")[0];
  todoContent.classList.toggle("check-todo");
};

const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  const todo = document.getElementById(id);
  todoContainer.removeChild(todo);

  if (todos.length <= 0) {
    const emptyTodosMsg = document.createElement("strong");
    emptyTodosMsg.innerText = "No todos available!";
    todoContainer.appendChild(emptyTodosMsg);
  }
};
