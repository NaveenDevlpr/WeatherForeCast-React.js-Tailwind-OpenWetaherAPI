import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { MdClear } from "react-icons/md";

const Navbar = ({setSearchQuery,current,setUnits}) => {

const [celcius,setCelcius]=useState(true)
const [farenheit,setFarenheit]=useState(false)
  const [search,setSearch]=useState('')


  const clearResult=()=>{
    setSearch('')
  }

  const searchResult=()=>{
    
      setSearchQuery((prevValue)=>(
        {...prevValue,q:search}
      ))
    
  }


  const convertCelcius=()=>{
    setCelcius(true)
    setFarenheit(false)
    setUnits('metric')
    
  }

  const convertFarenheit=()=>{
    setFarenheit(true)
    setCelcius(false)
    setUnits('imperial')
  }
  return (
    <div className='flex flex-col w-full space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 sm:items-center sm:justify-between'>
      <div className='flex flex-row items-center space-x-8'>
          <h2 className='text-3xl font-semibold text-black font-poppins'>
              WeatherForecast.
          </h2>
       
      </div>
      <div className='flex flex-row items-center space-x-2'>
          <div className='flex flex-row items-center space-x-2 '>
              <button className={`w-8 ring-1 ring-black text-center p-1 ${celcius? 'bg-black text-white':''}`} onClick={()=>{convertCelcius()}}>
                &deg;C
              </button>
              <button className={`w-8 p-1 text-center ring-1 ring-black ${farenheit? 'bg-black text-white':''}`} onClick={()=>{convertFarenheit()}}>
                &deg;F
              </button>
          </div>
          <div className="relative flex-grow">
              <input type="text" placeholder="Enter a place..." 
              className="bg-white focus:outline-none md:w-[300px] focus:shadow-outline border border-gray-300/80 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
              />
              {
                search ?(<div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={()=>{clearResult()}}>
                <MdClear className='text-black ' />
            </div>):(
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <IoSearchSharp className='text-gray-400/70'/>
                </div>
                )
              }
          </div>
          <div className='bg-black text-white rounded-lg px-4 py-[6.5px] flex items-center justify-center cursor-pointer font-poppins'
             onClick={()=>{searchResult()}}
             >
                 search
          </div>
      </div>
    </div>
  )
}

export default Navbar