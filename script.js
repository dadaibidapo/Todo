// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)

// Function
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    
    if(todoInput.value === ""){
        alert("plese enter a task")
    }else{
    // create the TODO DIV inside ul todo-list in my html
    const todoDiv = document.createElement('div');
    // Add a class of todo to the div
    todoDiv.classList.add('todo');

    // create li inside todo Div created above
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // check Button inside the li
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // delete Button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    // APPEND TO LIST
    todoList.appendChild(todoDiv);

    // clear todo input value
    todoInput.value = "";
    }
}

function deleteCheck(e){
    // console.log();
    const item =e.target; 
    // delete todo
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');

        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
        
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    // console.log(e.value);
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = "flex";
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";

                }
                else{
                    todo.style.display = "none";
                }
                break;
            case 'uncompleted':
                if(todo.classList.contains('completed')){
                    todo.style.display = "none";

                }
                else{
                    todo.style.display = "flex";
                }
                break;
        }
    })
}