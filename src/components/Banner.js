import React, { useState,useEffect } from 'react'
import weather from '../img/weather.jpg'
const Banner = ({current}) => {

  const [currentTime, setCurrentTime] = useState('');
  const [currentDay, setCurrentDay] = useState('');


  useEffect(() => {

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0'); 
    const ISTTime = `${hours}:${minutes}`;
    setCurrentTime(ISTTime);

    const intervalId = setInterval(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0'); 
    const ISTTime = `${hours}:${minutes}`;
    setCurrentTime(ISTTime);
    }, 60000);

    const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    setCurrentDay(day);
    return () => clearInterval(intervalId);
  },[]);
  


  return (
    <div className='w-full max-sm:h-[200px] h-[300px] rounded-3xl shadow-xl shadow-gray-300/90 bg-white overflow-hidden relative font-poppins'>
        <img className=' w-full h-full object-cover object-top ' src={weather} alt=''>
        </img>
        <div className='absolute bottom-0 w-full flex flex-row items-center justify-between p-4 h-full'>
          <div className='flex flex-col  h-full justify-end'>
              <h2 className='text-white text-[100px] max-sm:text-[35px] font-light -mb-2 md:-mb-6 '>
                  {`${current.temp}`}&deg;
              </h2>
              <p className='text-white max-sm:text-sm text-[20px] max-sm:ml-0 ml-2 font-light'>{`${current.name}, ${current.country}`}</p>
          </div>
          <div className='flex flex-col items-end h-full justify-end'>
              <h2 className='text-white text-3xl font-semibold'>
                {currentTime}
              </h2>
              <h2 className='text-white max-sm:text-sm text-[20px] font-light'>
                {currentDay}
              </h2>
          </div>
        </div>
    </div>
  )
}

export default Banner