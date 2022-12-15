
import React, { useState} from 'react'
import search from '../style/search.css';
import axios from 'axios'
import { useRef } from 'react';
import { createContext } from 'react';
import Result from './Result.jsx';
import ResultDemo from './ResultDemo';

function Search() {
  const searchInput = useRef();
  const [search, setSearch] = useState("");
  const [weather,setWeather]=useState([]);
  const changeSerach = (value) => {
    setSearch(value);
  }
  const getWeatherData = () => {
    if(search!==''){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`)
      .then((res)=>{
    setWeather(res.data);
      })
      .catch((err)=>{
      console.log(err);
      
      })
    }
    
  }
  console.log();
  return (
    <div className='search flex  m-2 p-2'>
{
  weather.length!==0
  ?
  <>
  <input type="serach"   onChange={(e) =>changeSerach(e.target.value)} className='w-75  p-3 inp' />
  <button onClick={getWeatherData} className='p-3 btn1 border-dark'>Search</button>
  <Result Weatherdata={weather}/>
 </>
   :
  <>
  <input type="serach" placeholder='Enter city name'  onChange={(e) =>changeSerach(e.target.value)} className='w-75 inp p-3 ' />
  <button onClick={getWeatherData} className='p-3 btn1 border-dark'>Search</button>
  <Result></Result>
  </>
  
}      
   
  
   
 </div>

    
      )
}

export default Search