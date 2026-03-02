// accessing elements

const input = document.querySelector("#input");
const btn = document.querySelector("button");
const list = document.querySelector(".list ul");

// adding  eventlistner to add


btn.addEventListener("click", function () {
  let task = input.value;
  render(task);

  input.value = "";
});


// render events

function render(task) {
  let tasks = document.createElement("li");
  let delBtn = document.createElement("button");

  tasks.textContent = task;
  delBtn.textContent = "del";

  delBtn.addEventListener("click", function () {
    // remove elment form screen
    this.parentElement.remove();
  });

  tasks.appendChild(delBtn);
  list.appendChild(tasks);
}
