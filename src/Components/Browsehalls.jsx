import React, { useState, useEffect } from 'react'
import HallCard from './HallCard';
import data from '../utils/data'

const Browsehalls = () => {

  // useEffect( async ()=>{
  //   const webdata = await fetch("https://www.wedmegood.com/api/v2/vendor/filter?version=2.0&filter=0&seo=0&offset=40&random=4170&category_slug=wedding-venues&venue_type=banquet-hall&token=66433d76ac9e93.65258069&source=1&filter_slug=all%2Fwedding-venues%2Fall%2Fbanquet-hall")

  //   const jsondata = await webdata.json();

  //   console.log( jsondata.data );

  // } )


  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCityClick = (city) => {
    setSearchQuery(city);
  };



  return (
    <div className='flex flex-col items-center py-4 bg-[#FFFBFB]'>

      <div className='flex justify-between items-center w-[80%] mb-10'>
        <h1 className='text-3xl ml-3'>Browse Halls</h1>
        <input type="text" placeholder='Search...' onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} className='border rounded-sm w-[20vw] px-3 py-2 focus:outline-none placeholder-zinc-500' />
      </div>

      <div className='flex justify-center gap-8 w-[80%]  mb-10'>
        <div class="flex flex-col items-center cursor-pointer " onClick={() => handleCityClick("Delhi")} >
          <img class="rounded-full h-20 w-20 object-cover object-center" src="https://image.wedmegood.com/resized/100X/uploads/city_image/1/delhi.png" alt="delhi-ncr" />
          <p class="mt-2">Delhi NCR</p>
        </div>
        <div class="flex flex-col items-center cursor-pointer " onClick={() => handleCityClick("Mumbai")} >
          <img class="rounded-full h-20 w-20 object-cover object-center" src="	https://image.wedmegood.com/resized/100X/uploads/city_image/6/bombay.png" alt="delhi-ncr" />
          <p class="mt-2">Mumbai</p>
        </div>
        <div class="flex flex-col items-center cursor-pointer " onClick={() => handleCityClick("Bangalore")} >
          <img class="rounded-full h-20 w-20 object-cover object-center" src="https://image.wedmegood.com/resized/100X/uploads/city_image/9/banglore.png" alt="delhi-ncr" />
          <p class="mt-2">Bangalore</p>
        </div>
        <div class="flex flex-col items-center cursor-pointer " onClick={() => handleCityClick("Hyderabad")}>
          <img class="rounded-full h-20 w-20 object-cover object-center" src="https://image.wedmegood.com/resized/100X/uploads/city_image/11/hyderabad.png" alt="delhi-ncr" />
          <p class="mt-2">Hyderabad</p>
        </div>
        <div class="flex flex-col items-center cursor-pointer " onClick={() => handleCityClick("Chennai")} >
          <img class="rounded-full h-20 w-20 object-cover object-center" src="https://image.wedmegood.com/resized/100X/uploads/city_image/10/chennai.png" alt="delhi-ncr" />
          <p class="mt-2">Chennai</p>
        </div>
        <div class="flex flex-col items-center cursor-pointer " onClick={() => handleCityClick("Goa")} >
          <img class="rounded-full h-20 w-20 object-cover  object-center" src="https://image.wedmegood.com/resized/100X/uploads/city_image/16/goa.png" alt="delhi-ncr" />
          <p class="mt-2">Goa</p>
        </div>
        <div class="flex flex-col items-center cursor-pointer " onClick={() => handleCityClick("Jaipur")} >
          <img class="rounded-full h-20 w-20 object-cover object-center" src="https://image.wedmegood.com/resized/100X/uploads/city_image/17/jaipur.png" alt="delhi-ncr" />
          <p class="mt-2">Jaipur</p>
        </div>
        <div class="flex flex-col items-center cursor-pointer " onClick={() => handleCityClick("Pune")} >
          <img class="rounded-full h-20 w-20 object-cover object-center" src="https://image.wedmegood.com/resized/100X/uploads/city_image/7/pune.jpg" alt="delhi-ncr" />
          <p class="mt-2">Pune</p>
        </div>
        <div class="flex flex-col items-center cursor-pointer " onClick={() => handleCityClick("Kolkata")} >
          <img class="rounded-full h-20 w-20 object-cover object-center" src="https://image.wedmegood.com/resized/100X/uploads/city_image/12/kolkata.png" alt="delhi-ncr" />
          <p class="mt-2">Kolkata</p>
        </div>
        <div class="flex flex-col items-center cursor-pointer " onClick={() => handleCityClick("Lucknow")} >
          <img class="rounded-full h-20 w-20 object-cover object-center" src="https://image.wedmegood.com/resized/100X/uploads/city_image/22/lucknow.png" alt="delhi-ncr" />
          <p class="mt-2">Lucknow</p>
        </div>
        <div class="flex flex-col items-center cursor-pointer" onClick={() => handleCityClick("")}>
          <img class="rounded-full h-20 w-20 object-cover object-center" src="https://image.freepik.com/free-icon/blocking-symbol_318-40339.jpg" alt="clear-filter" />
          <p class="mt-2">Clear Filters</p>
        </div>
      </div>


      <div className='w-[80%] flex flex-wrap gap-10 '>
        {(filteredData.length > 0) ?
          filteredData.map((item) => {
            return <HallCard imageUrl={item.imageUrl} name={item.name} location={item.location} type={item.type} rating={item.rating} numberOfRooms={item.numberOfRooms} capacity={item.capacity} />
          }) :
          <h1 className='ml-3'>No Items Found..</h1>}

      </div>

    </div>
  )
}

export default Browsehalls