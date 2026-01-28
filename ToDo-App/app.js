let addTask = document.querySelector('button');
let tasks = document.querySelector('input');
let taskList = document.querySelector('ul')

addTask.addEventListener("click", function(){

    let item = document.createElement('li')
    item.innerText=tasks.value;
   

    let delbtn = document.createElement("button");
    delbtn.classList.add("delete-btn");
    delbtn.innerText= "delete";


    item.appendChild(delbtn)
    taskList.appendChild(item)

   tasks.value = "";

     
})


// let delbtns = document.querySelectorAll(".delet-btn");

// for(let delbtn of delbtns){
//    delbtn.addEventListener('click', function(){
//        let par = delbtn.parentElement;
//        console.log(par);
//        par.remove();
//     })
// }



// Event Delegation

taskList.addEventListener("click", function(event){
   if ( event.target.nodeName =="BUTTON"){
    let listIteam = event.target.parentElement;
    console.log(listIteam);
    listIteam.remove();
    
   
   }
   
})