import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
  let  [city, setCity]= useState("");
  let [error,setError]=useState(false)
  const  API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY ="d281db2ecce7db6ae06174c0b4e7f8fa"

  let getWeatherInfo = async ( )=>{
    
   let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric `);
   let jsonResponse = await response.json();
   console.log(jsonResponse);
   let result = {
    city:city,
    temp:jsonResponse.main.temp,
    tempMin:jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,
    humidity:jsonResponse.main.humidity,
    feelsLike:jsonResponse.main.feels_like,
    weather:jsonResponse.weather[0].description,
   }
   console.log(result);
   return result;
  }


  

  let handleChange = (evt)=>{
   setCity(evt.target.value);
  }


  let hadleSubmit = async (evt)=>{
   try{
    evt.preventDefault();
    console.log(city);
    setCity("");
   let newInfo =  await getWeatherInfo();
    updateInfo(newInfo);
   } catch(err){
     setError("This place is not found in our databse!")
   }
    
  }

  return (
    <div className='SearchBox'>

       
      <form onSubmit={hadleSubmit}>
        <TextField id='city' label="City Name"  variant='outlined' required onChange={handleChange} />
        <br /><br />
        <Button   variant='contained' type='submit'>search</Button>
        {error && <p style={{color:"red"}}>No such place exist</p>}
      </form>
    </div>
  )
}