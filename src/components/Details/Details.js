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
          data?(  data.map((d,i)=>{
            return(
            <div key={i} className='w-full h-[90px] hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out bg-gray-100 shadow-xl p-4 md:p-2 flex flex-row items-center space-x-2 ring-1 ring-gray-300/90 justify-evenly shadow-gray-300/90 rounded-xl'>
                {
                  d.icon
                }
              <div className=''>
                <h2 className='font-light text-[13px] text-black'>{d.title}</h2>
                <h2 className='font-bold text-md lg:text-lg text-black'>{`${d.value}`}</h2>
              </div>
          </div>
            )
          })):(
            <div role="status">
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
          )
          }
        </div>

        <div className='bg-black  shadow-xl shadow-gray-300/90 rounded-xl w-full h-[100px] p-4'>
          <h2 className='text-white font-semibold text-lg'>
            Today's Weather
          </h2>
          <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-row items-center'>
                  <h2 className='text-white text-sm'>{current.details}</h2>
                  <img  src={`https://openweathermap.org/img/wn/${current.icon}@2x.png`} className='w-12 h-12' alt=''></img>
              </div>
              <div className='flex flex-row items-center space-x-2'>
                <h2 className='text-white text-sm'>Pressure: </h2>
                <h2 className='text-white text-md font-semibold'>{`${Math.ceil(current.pressure*0.0295299875)} Hg`}</h2>
              </div>
              <div className='flex flex-row items-center space-x-2'>
                <h2 className='text-white text-sm'>Visibility: </h2>
                <h2 className='text-white text-md font-semibold'>{`${current.visibility}`}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-3/5 w-full flex flex-col mb-6'>
        <h2 className='text-3xl text-black font-semibold'>
          Daily Forecast
        </h2>
        <div className='w-full h-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 md:gap-6 lg:gap-4 lg:h-1/3 mt-4'>
          {
           forecast?(
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
           ):(
            <div role="status">
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
           )
          }
        </div>
       <div className='h-1/2 w-full md:w-[90%] lg:w-full flex-1 mt-4'>
        <LineChart forecast={forecast}/>
       </div>
      </div>
    </div>
  )
}

export default Details