import Head from 'next/head'
import axios from 'axios'
import {BsSearch} from 'react-icons/bs'
import { useState } from 'react'
import Image from 'next/image'
import weather_image from '../public/weather.jpg'
import { Weather } from '../components/Weather'
import { Spinner } from '../components/Spinner'

export default function Home() {
  const [city,setCity]=useState('');
  const [weather,setWeather] = useState({});
  const [loading,setLoading] = useState(false);

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`

  

const fetchWeather=(e)=>{
  e.preventDefault();
  setLoading(true);
  axios.get(url).then(res=>{
    setWeather(res.data)
  })
  setCity('');
  setLoading(false);
}

if (loading) {
  return <Spinner></Spinner>
}else{
  return (
    <div>
      <Head>
        <title>Search Weather</title>
        <meta name="weather app" content=" this isweather app" />
        <link rel="icon" href=" " />
      </Head>
      <div className=' absolute top-0 right-0 left-0 bottom-0  bg-black/10 z-[1]' />
      <Image src={weather_image} alt='/' className=' object-cover' fill></Image>
      <div className=' relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white  z-[10]'>
        <form onSubmit={fetchWeather} className=' flex justify-between items-center m-auto w-full p-3 bg-transparent border border-gray-300 rounded-2xl text-white'>
          <div>
          <input onChange={(e)=>setCity(e.target.value)} className=' bg-transparent border-none text-white focus:outline-none text-2xl' type="text" placeholder='City Name' />
          </div>
          <button onClick={fetchWeather}><BsSearch size={20}></BsSearch></button>
        </form>
      </div>
      {weather.main?<Weather weather={weather} />:null}
    </div>
  )
}
}

  
