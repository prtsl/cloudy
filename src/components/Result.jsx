import React,{useState,useContext} from 'react'
import result from '../style/result.css'; 

function Result({Weatherdata}) {
  console.log(Weatherdata);
  return (
    <div className=' m-2 p-2  result'>
      {
        Weatherdata !== undefined
        ?
        <><h2 className='text-center '>City name: {Weatherdata.name}</h2><div className='d-flex justify-content-around'>
            <div>max temp: { Weatherdata.main.temp_max}</div>
            <div>min temp:  { Weatherdata.main.temp_min}</div>
          </div>
          <div >
              <div>
              <img src={`https://openweathermap.org/img/wn/${Weatherdata.weather[0].icon}@2x.png`} alt="" />
              </div>
              <div >{Weatherdata.weather[0].main} </div>
            </div></>
         :
         <>
         <h1 className='fw-bolder text-secondar'>Enter City Name</h1>
         </>
      }
                
      
                  
      
     
    </div>
  )
}

export default Result