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

   if(data){
    const {Currentdata,forecastData}=data

    setCurrent(Currentdata)

    setForecast(forecastData)

   }
  }
 useEffect(()=>{
  getData()
 },[searchQuery,units])
  return (
    <div className='flex flex-col p-4 mx-auto space-y-5 max-w-7xl'>
      <header>
          <Navbar setSearchQuery={setSearchQuery} current={current} setUnits={setUnits}/>
      </header>
      <main className='space-y-5'>
          <Banner current={current}/>
          <Details forecast={forecast} current={current}/>
      </main>
    </div>
  );
}

export default App;
