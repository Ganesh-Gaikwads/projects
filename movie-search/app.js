const input = document.querySelector('#searchInput');
const searchBtn = document.querySelector('button');
const card = document.querySelector('.movies')
 

searchBtn.addEventListener('click', async()=>{
  let movie = input.value;

const response = await fetch(`http://www.omdbapi.com/?apikey=40767341&t=${movie}`)
const data = await response.json();



  console.log(data);


  card.innerHTML = `
  <div>
    <img src="${data.Poster}" width="200px">
    <h2>${data.Title}</h2>
    <p>Year: ${data.Year}</p>
    <p>Rating: ${data.imdbRating}</p>
    <p>${data.Plot}</p>
  </div>
`

  input.value = "";
})