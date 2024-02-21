import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { MdClear } from "react-icons/md";

const Navbar = ({setSearchQuery,current}) => {


  const [search,setSearch]=useState('')


  const clearResult=()=>{
    setSearch('')
  }

  const searchResult=()=>{
    
      setSearchQuery((prevValue)=>(
        {...prevValue,q:search}
      ))
    
  }

  useEffect(()=>{
   
  },[])

  return (
    <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 sm:items-center sm:justify-between w-full'>
      <div className='flex flex-row space-x-8 items-center'>
          <h2 className='text-3xl text-black font-semibold font-poppins'>
              WeatherForecast.
          </h2>
       
      </div>
      <div className='flex flex-row items-center space-x-2'>
          <div className="relative flex-grow">
              <input type="text" placeholder="Enter a place..." 
              className="bg-white focus:outline-none md:w-[300px] focus:shadow-outline border border-gray-300/80 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
              />
              {
                search ?(<div className="absolute inset-y-0 right-0 pr-3 flex cursor-pointer items-center" onClick={()=>{clearResult()}}>
                <MdClear className='text-gray-400 ' />
            </div>):(
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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