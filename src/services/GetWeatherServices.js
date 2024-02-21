

const API_KEY='d4d3a060e8b93750087d999c945e392d'
const BASE_URL='https://api.openweathermap.org/data/2.5'

const getWeatherData=(type,searchParam)=>{
 const url=new URL(BASE_URL +'/'+ type)

 url.search=new URLSearchParams({...searchParam,appid:API_KEY})

 return fetch(url).then((res)=>res.json()).then((data)=>data)
}

const getCurrentNeededValues=(data)=>{
 const {
    coord:{lon,lat},
    main:{temp,feels_like,temp_min,temp_max,humidity},
    name,
    dt,
    sys:{country,sunrise,sunset},
    weather,
    wind:{speed}

 }=data

 const {main:details,icon}=weather[0]



 return{
    lat,lon,temp,feels_like,temp_max,temp_min,humidity,name,dt,country,sunrise,sunset,details,icon,speed
 }
}

const getNeededValues=async(searchParams)=>{

    const Currentdata=await getWeatherData("weather",searchParams).then((data)=>getCurrentNeededValues(data))

    const {lat,lon}=Currentdata;


    const forecastData=await getWeatherData('forecast',{
        lat,lon,units:'metric'
    }).then((getForecastData))

    return {forecastData,Currentdata}


}

const getForecastData=(data)=>{
    const {list}=data
     const firstObj=list[0].dt_txt.split(' ')[1]
     return list.filter((d)=>d.dt_txt.endsWith(firstObj))
}


export default getNeededValues