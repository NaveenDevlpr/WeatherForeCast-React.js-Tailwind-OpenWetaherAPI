import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { MdClear } from "react-icons/md";

const Navbar = ({setSearchQuery}) => {

  const [message,setMessage]=useState('')

  const [search,setSearch]=useState('')

  useEffect(()=>{
    updateMessage()
  },[])

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

  const clearResult=()=>{
    setSearch('')
  }

  const searchResult=()=>{
    setSearchQuery((prevValue)=>(
      {...prevValue,q:search}
    ))
  }
  return (
    <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 sm:items-center sm:justify-between w-full'>
      <div>
          <h2 className='text-2xl text-black font-medium font-poppins'>
              Good {`${message}`}
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