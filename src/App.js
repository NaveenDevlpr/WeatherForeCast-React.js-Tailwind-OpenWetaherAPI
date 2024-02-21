import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Details from './components/Details/Details';
import getNeededValues from './services/GetWeatherServices';
import { useEffect,useState } from 'react';

function App() {

  const [current,setCurrent]=useState({})
  const [forecast,setForecast]=useState([])
  const [searchQuery,setSearchQuery]=useState({q:'chennai'})
  const [units,setUnits]=useState("metric")

  const getData=async()=>{
    const data=await getNeededValues({...searchQuery,units})

    const {Currentdata,forecastData}=data

    setCurrent(Currentdata)

    setForecast(forecastData)
   
  }

 
 useEffect(()=>{
   //getData()
 },[searchQuery])
  return (
    <div className='max-w-7xl mx-auto p-4 flex flex-col space-y-5'>
      <header>
          <Navbar setSearchQuery={setSearchQuery}/>
      </header>
      <main className='space-y-5'>
          <Banner current={current}/>
          <Details forecast={forecast} current={current}/>
      </main>
    </div>
  );
}

export default App;
