const checkList = document.querySelectorAll(".custom-checkBox");
const inputFields = document.querySelectorAll('.goal-input');
const err = document.querySelector('.error-label') ;
const progressBar = document.querySelector('.progress-bar');
const progressValue = document.querySelector('.progress-value')


 const allGaols = JSON.parse( localStorage.getItem('allGaols')) || {}
 





checkList.forEach((checkBox)=>{
   checkBox.addEventListener('click', (e)=>{
    const allgaolAdded = [...inputFields].every((input)=>{
           return input.value;
          
    })

    if(allgaolAdded){
      
        checkBox.parentElement.classList.toggle('completed') ;
        progressValue.style.width = '33.33%';
    } else{
        progressBar.classList.add('show-error')
    }
   })
})


inputFields.forEach((input)=>{
  input.addEventListener('focus',()=>{
    progressBar.classList.remove('show-error')
  })
 
  input.addEventListener('input', (e)=>{
    allGaols[input.id]= {
     name: input.value,
     completed : false,
    }

    localStorage.setItem('allGoals',JSON.stringify(allGaols))
  })

})

 