const todoForm = document.getElementById("todo-form")
const todoList = document.getElementById("todo-list")
const toDoInput = todoForm.querySelector("input")

let toDos = []
const TODOS_KEY = "todos"

function handleToDoSubmit(event) {
    event.preventDefault()

    const newTodo = toDoInput.value
    toDoInput.value = ""
    
    const newToObj ={
        text:newTodo,
        id: Date.now()
    }

    toDos.push(newToObj)

    paintTodo(newToObj)
    saveToDos()
}

function deleteToDo(event) {
    li = event.target.parentElement
    toDos = toDos.filter(todo => todo.id != li.id)

    li.remove()
    saveToDos()
}


function saveToDos(event) {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    button.innerText = "✕"

    li.id = newTodoObj.id
    li.appendChild(span)
    li.appendChild(button)
    
    span.innerText = newTodoObj.text
    todoList.appendChild(li)

    button.addEventListener("click", deleteToDo )
}



todoForm.addEventListener("submit", handleToDoSubmit)


const savedTodos = localStorage.getItem(TODOS_KEY)
if (savedTodos) {
    const parsedToDos = JSON.parse(savedTodos)

    parsedToDos.forEach(paintTodo);

    toDos = parsedToDos
}