 // access the elements


const input = document.querySelector("#inputTask");
const addBtn = document.querySelector("button");
const tasks = document.querySelector("#lists");


let todos = [];

// load saved todos

let savedTodos = localStorage.getItem('todos');

if(savedTodos !== null){
  todos = JSON.parse(savedTodos);

  // Display each todo

todos.forEach(el => {
   addTask(el.text, el.id)
});

}



// addBtn

addBtn.addEventListener("click", function () {
  taskHandler();
  input.value = "";
});


// add task when user click enter key

input.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    taskHandler();
    input.value = "";
  }
});


// Add task function

function addTask(task , id) {
  let lis = document.createElement("li");
  lis.textContent = task;
  tasks.appendChild(lis);


 // check if this todo is completed

 const todo = todos.find(t=>t.id ===id);
 if(todo && todo.completed){
  lis.classList.add("completed")
 }







  // adding delet btn to delet task

  let delBtn = document.createElement("button");
  delBtn.textContent = "remove";
  lis.appendChild(delBtn);

  delBtn.addEventListener("click", function () {
  
    // find index of this todo in the array

    const index = todos.findIndex(todo=> todo.id ===id);

    // remove form array 

    todos.splice(index, 1);


    // update localStoarage

    localStorage.setItem('todos', JSON.stringify(todos));


// remove form screen
    this.parentElement.remove();
  });



  // task completed feature

  lis.addEventListener("click", function () {
    // Toggle the css class
    lis.classList.toggle("completed");

    // find the todo in the array
    const todo = todos.find(t=>t.id ===id);

    // toggle the completed property

    todo.completed = !todo.completed;

    //save to localStorage

    localStorage.setItem('todos', JSON.stringify(todos))

  });
}



// task handler

function taskHandler() {
  let task = input.value.trim();
  if (task === "") {
    return;
  }

  // create todo object

  const todo = {
    id: Date.now(),
    text:task,
    completed:false
  }
 
  // add to array
 
  todos.push(todo)

// Save to localStorage

localStorage.setItem('todos', JSON.stringify(todos));

  addTask(task, todo.id);
  input.value = "";
}


 
 
 