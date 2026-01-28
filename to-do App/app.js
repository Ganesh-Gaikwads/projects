
const adBtn = document.getElementById("addHabitBtn");
const input = document.getElementById("habitInput");
const list = document.getElementById("habitList")



let habits = JSON.parse(localStorage.getItem("habits")) || [ ];
renderHabits();

adBtn.addEventListener("click", function(){
   const habitText = input.value.trim();

   if(habitText ==="") return;

   habits.push(habitText);
   localStorage.setItem("habits", JSON.stringify(habits));
   renderHabits();
   input.value = ""; 
  
  
});


function renderHabits(){
 
  list.innerHTML = "";

  habits.forEach(function(habit, index){
    const li = document.createElement("li");
    li.textContent = habit;


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = " X ";

    deleteBtn.addEventListener("click", function(){
      habits.splice(index, 1);
      localStorage.setItem("habits", JSON.stringify(habits))
      renderHabits();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li)

  })


}