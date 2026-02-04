const result = document.querySelector("#output");
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const reset = document.getElementById("reset")


let count = 0;
const MAX = 20;
addBtn.addEventListener("click",function(){
if(count >= MAX) return;
  count++;
   render();
});

deleteBtn.addEventListener("click", function(){
  if(count <= 0) return;
    count--;
      
     render();
    });

reset.addEventListener("click", function(){
  count = 0;
  render();
  
})
 
function render(){
result.textContent = count;

 addBtn.disabled = count>=MAX;
 reset.disabled = count===0;
}

render();