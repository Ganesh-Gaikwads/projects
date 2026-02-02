const result = document.querySelector("#output");
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const reset = document.getElementById("reset")


let count = 0;

addBtn.addEventListener("click",function(){
  count++;
  result.textContent = count;
});

deleteBtn.addEventListener("click", function(){
  if(count > 0){
    count--;
      }
    result.textContent = count;
    });

reset.addEventListener("click", function(){
  count = 0;
  result.textContent = count;
})
 

