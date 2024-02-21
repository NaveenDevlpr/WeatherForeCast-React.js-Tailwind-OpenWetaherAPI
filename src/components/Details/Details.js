import React from 'react'
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FiSunset } from "react-icons/fi";
import { FiSunrise } from "react-icons/fi";
import { FaWind } from "react-icons/fa";
import LineChart from './LineChart';

const Details = ({current,forecast}) => {


  const convertUnixToIST = (timestamp) => {
  var date = new Date(timestamp * 1000);

var hours = date.getHours();

var minutes = "0" + date.getMinutes();

let ampm = 'AM';
    if (hours >= 12) {
        ampm = 'PM';
        hours %= 12;
    }
    // Adjust 0 to 12 for midnight
    if (hours === 0) {
        hours = 12;
    }


var formattedTime = hours + ':' + minutes.substr(-2)+" "+ ampm

return formattedTime
  };

  const data=[
    {
      title:'Humidity',
      value:current.humidity+"%",
      icon:<WiHumidity className='w-8 h-8'/>
    },
    {
      title:'Wind Rate',
      value:current.speed,
      icon:<FaWind className='w-8 h-8'/>
    },
    {
      title:'High Temp',
      value:current.temp_max+"°",
      icon:<FaTemperatureArrowUp className='w-8 h-8'/>
    },
    {
      title:'Low Temp',
      value:current.temp_min+"°",
      icon:<FaTemperatureArrowDown className='w-8 h-8'/>
    },
    {
      title:'Sunrise',
      value:convertUnixToIST(current.sunrise),
      icon:<FiSunrise className='w-8 h-8'/>
    },
    {
      title:'Sunset',
      value:convertUnixToIST(current.sunset),
      icon:<FiSunset className='w-8 h-8'/>
    },
  ]

  const getDayFromDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { weekday: 'long' }; 
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className='flex md:flex-row flex-col font-poppins md:space-x-8'>
      <div className='lg:w-2/5 w-full flex flex-col space-y-5 mb-6'>
        <div className='grid grid-cols-2 grid-rows-2 gap-3'>
          {
            data.map((d)=>{
              return(
              <div className='w-full h-[90px] hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out bg-gray-100 shadow-xl p-4 md:p-2 flex flex-row items-center space-x-2 ring-1 ring-gray-300/90 justify-evenly shadow-gray-300/90 rounded-xl'>
                  {
                    d.icon
                  }
                <div className=''>
                  <h2 className='font-light text-[13px] text-black'>{d.title}</h2>
                  <h2 className='font-bold text-md lg:text-lg text-black'>{`${d.value}`}</h2>
                </div>
            </div>
              )
            })
          }
        </div>

        <div className='bg-black  shadow-xl shadow-gray-300/90 rounded-xl w-full h-[100px] p-4'>
          <h2 className='text-white font-semibold text-lg'>
            Today Rainfall
          </h2>
          <div className='flex flex-row items-center'>
              <h2 className='text-white text-sm'>{current.details}</h2>
              <img  src={`https://openweathermap.org/img/wn/${current.icon}@2x.png`} className='w-12 h-12'></img>
          </div>
        </div>
      </div>
      <div className='lg:w-3/5 w-full flex flex-col mb-6'>
        <h2 className='text-3xl text-black font-semibold'>
          Daily Forecast
        </h2>
        <div className='w-full h-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 md:gap-6 lg:gap-4 lg:h-1/3 mt-4'>
          {
            forecast.slice(1,5).map((data,i)=>{
              return(
                <div key={i} className='rounded-xl hover:scale-105 md:hover:scale-125 transition-all duration-500 cursor-pointer ease-in-out bg-black/90 shadow-gray-300/90 shadow-xl flex flex-col justify-evenly items-center w-full md:w-[140px] p-2 md:p-0'>
                    <h2 className='text-white font-bold text-sm '>{getDayFromDate(data.dt_txt)}</h2>
                    <div className='flex flex-col items-center justify-center -space-y-2'>
                      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} className='w-12 h-12' alt='cloud'></img>
                      <h2 className='text-white font-normal text-[12px]'>{`${data.weather[0].description}`}</h2>
                    </div>
                    <h2 className='text-white font-semibold text-sm'>
                      {data.main.temp}&deg;
                    </h2>
                </div>
              )
            })
          }
        </div>
        <LineChart/>
      </div>
    </div>
  )
}

export default Details