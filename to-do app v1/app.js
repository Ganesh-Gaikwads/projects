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
