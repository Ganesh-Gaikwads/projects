const input = document.querySelector("#searchInput")
const btn = document.querySelector('button');
const poster = document.querySelector('.poster');

// adding event listener to handle task

btn.addEventListener('click',async ()=>{
  let movie = input.value;

  if(!movie){
    alert("please enter a movie name")
    return;
  }
 
  try{
  const res = await fetch(`http://www.omdbapi.com/?apikey=40767341&t=${movie}`);
  const data =  await res.json()
 

 // error handling 
 
 if(data.Response ==="False"){
  poster.innerHTML = `<p>Movie not found,try valid movie name.</p>`
  return;
 }
  

 
// add html code to show poster on web ui

poster.innerHTML = `
<div>
<img src =" ${data.Poster}" width = "220px">
<h3> ${data.Title}</h3>
<p> Director : ${data.Director}</p>
<p> Genre : ${data.Genre}</p>
<p> Language : ${data.Language}</p>
<p> Year :${data.Year}</p>
<p> ${data.Plot}</p>

</div>

`
}catch(err){
  poster.innerHTML = `<p>something went wrong, please check your internet connection</p>`
  return;

}


  input.value = "";
})

 
