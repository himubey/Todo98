// Variables
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const dateEle = document.getElementById("date")


// Today Date

let today = new Date();
let options = { weekday:'long', month:'short', day:'numeric'};
dateEle.innerHTML = today.toLocaleDateString("en-US", options )



// Get todo list on start
// Get the content typed into the input
// Add todo task

function addTask(){
    if(todoInput.value === ''){
        alert("You must write some todo task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = todoInput.value;
        todoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    todoInput.value = "";
    saveData();

}

// Remove todo

todoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save in localstorage

function saveData(){
    localStorage.setItem("data", todoList.innerHTML);
}

function showTask(){
    todoList.innerHTML = localStorage.getItem("data");
}
showTask();