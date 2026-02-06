// access the elements

 

const input = document.querySelector("#inputTask");
const addBtn = document.querySelector("button");
const tasks = document.querySelector("#lists");




let todos = [];
let savedTodo =  localStorage.getItem('todos');

if(savedTodo != null){
  
  todos = JSON.parse(savedTodo)

  for(let i= 0; i<todos.length; i++){
    addTask(todos[i].text);
  }
 
}

 

// addBtn

addBtn.addEventListener("click", function () {
  taskHandler();
  input.value = "";
});

// add task when user click enter key

input.addEventListener("keydown",function(e){
  if(e.code==="Enter"){
    taskHandler();
    input.value ="";
  }
})





// Add task function

function addTask(task) {
  let lis = document.createElement("li");
  lis.textContent = task;
  tasks.appendChild(lis);

// adding delet btn to delet task

let delBtn = document.createElement("button");
    delBtn.textContent = "remove";
    lis.appendChild(delBtn)
   
    delBtn.addEventListener("click", function(){
      this.parentElement.remove();
    }) 


 // task completed feature 
  
 
  lis.addEventListener("click",function(){
  lis.classList.toggle("completed");
  })


 


}




// task handler

function taskHandler() {
  let task = input.value.trim();
  if (task === "") {
    return;
  }

 
 const todo = { text: task , completed :false }
todos.push(todo);
console.log(todos);


localStorage.setItem('todos', JSON.stringify(todos))
 

 addTask(task);
  input.value = "";
}





// get good with local starage









































/* 

// first we access html elements

const input = document.querySelector("#inputTask");
const btn = document.querySelector("button");
const list = document.querySelector("#lists");

//  add task to to-do using Add task btn

btn.addEventListener("click", () => {
  handleTask();
});

// add task ot todo using enter key

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") handleTask();
});

// addTodo function to show data on ui

function addTodo(task) {
  const lis = document.createElement("li");
  lis.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.innerText = "x";

  delBtn.addEventListener("click", function () {
    this.parentElement.remove();
    console.log("task deleted");
  });

  // added featire of task is completed make it green and overline

  lis.addEventListener("click", () => {
    lis.classList.toggle("completed");
  });

  lis.appendChild(delBtn);
  list.appendChild(lis);
}

// handle task

function handleTask() {
  const task = input.value.trim();
  if (task === "") {
    return;
  }

  addTodo(task);
  input.value = "";
}
 */
