import React, { useState,useEffect } from 'react'
import weather from '../img/weather.jpg'
const Banner = ({current}) => {

  const [currentTime, setCurrentTime] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [message,setMessage]=useState('')

  useEffect(() => {


    updateMessage()

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
  

  const updateMessage=()=>{
    const getHour=new Date().getHours()

    if(getHour < 12){
      setMessage('Morning')
    }
    else if(getHour > 12 && getHour < 17)
    {
      setMessage('Afternoon')
    }
    else{
      setMessage('Evening')
    }
  }

  return (
    <div className='w-full max-sm:h-[200px] h-[300px] rounded-3xl shadow-xl shadow-gray-300/90 bg-white overflow-hidden relative font-poppins'>
        <img className='object-cover object-top w-full h-full ' src={weather} alt=''>
        </img>
        <div className='absolute bottom-0 flex flex-row items-center justify-between w-full h-full p-4'>
          <div className='flex flex-col justify-end h-full'>
              <h2 className='text-white text-[100px] max-sm:text-[35px] font-light sm:-mb-6 -mb-2'>
                  {`${Math.floor(current.temp)}`}&deg;
              </h2>
              <p className='text-white max-sm:text-sm text-[20px] max-sm:ml-0 ml-2 font-light'>{`${current.name}, ${current.country}`}</p>
          </div>
          <div className='flex flex-col items-end justify-end h-full'>
              <h2 className='text-2xl font-light text-white max-sm:text-sm font-poppins text-end'>
                  Good {`${message}!!`}
              </h2>
              <h2 className='text-3xl font-semibold text-white max-sm:text-xl'>
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