import React, { useState, useEffect } from 'react'
import HallCard from './HallCard';

const Browsehalls = () => {

  // useEffect( async ()=>{
  //   const webdata = await fetch("https://www.wedmegood.com/api/v2/vendor/filter?version=2.0&filter=0&seo=0&offset=40&random=4170&category_slug=wedding-venues&venue_type=banquet-hall&token=66433d76ac9e93.65258069&source=1&filter_slug=all%2Fwedding-venues%2Fall%2Fbanquet-hall")

  //   const jsondata = await webdata.json();

  //   console.log( jsondata.data );

  // } )


  
  const data = [

    {
      imageUrl: 'https://www.gamintraveler.com/wp-content/uploads/2019/09/Taj-Mahal-Palace.jpg',
      name: 'Grand Palace',
      location: 'Apollo Bunder, Mumbai, IN 400001',
      type: 'Banquet Hall',
      rating: 4.5,
      numberOfRooms: 50,
      capacity: 200,
      coordinates: [19.0760, 72.8777]
    },
    {
      imageUrl: 'https://www.treehugger.com/thmb/gcjP98yg6Jh5uPJVmwuH_23RLUc=/2109x1422/filters:fill(auto,1)/GettyImages-541060616-7964beed984c4dc39eff64588548aae9.jpg ',
      name: 'Royal Gardens',
      location: 'Delhi',
      type: 'Outdoor Venue',
      rating: 4.8,
      numberOfRooms: 30,
      capacity: 300,
      coordinates: [28.7041, 77.1025]
    },
    {
      imageUrl: 'https://www.vacationstoremiami.com/oceanbluesand/images/slides/slide-68.jpg',
      name: 'Oceanic Resort',
      location: 'Goa',
      type: 'Beach Resort',
      rating: 4.7,
      numberOfRooms: 100,
      capacity: 500,
      coordinates: [15.2993, 74.1240]
    },
    // Existing venues...
    {
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnewsinfo.inquirer.net%2Ffiles%2F2023%2F05%2FNews479480.jpg&f=1&nofb=1&ipt=b805e0178a0787ac74e612628ad2f8025f2bb0598ed7967bed2092b937cfeb87&ipo=images',
      name: 'Heritage Mansion',
      location: 'Jaipur',
      type: 'Heritage Hotel',
      rating: 4.6,
      numberOfRooms: 80,
      capacity: 250,
      coordinates: [26.9124, 75.7873]
    },
    // New venues in Pune, Delhi, or Jaipur
    {
      imageUrl: 'https://chiclocations.com/wp-content/uploads/2020/11/Exterior-Anantara-Riverside-Bangkok-Resort.jpg',
      name: 'Riverside Retreat',
      location: 'Pune',
      type: 'Riverside Venue',
      rating: 4.3,
      numberOfRooms: 6,
      capacity: 150,
      coordinates: [18.5204, 73.8567]
    },
    {
      imageUrl: 'https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,c_fill,g_center,h_1000,w_2000/v1616630402/g5/g5-c-idgh48mn-pacific-urban-residential/g5-cl-1k6x8sbo07-skyline-terrace-apartments/uploads/Skyline_Terrace-POI-008_elc2pu.jpg',
      name: 'Skyline Terrace',
      location: 'Delhi',
      type: 'Rooftop Venue',
      rating: 4.9,
      numberOfRooms: 4,
      capacity: 100,
      coordinates: [28.7041, 77.1025]
    },
    {
      imageUrl: 'http://www.saint-petersburg.com/images/hotels/golden-garden-boutique-hotel/golden-garden-boutique-hotel-st-petersburg.jpg',
      name: 'Golden Gardens',
      location: 'Jaipur',
      type: 'Garden Venue',
      rating: 4.7,
      numberOfRooms: 5,
      capacity: 200,
      coordinates: [26.9124, 75.7873]
    },
    {
      imageUrl: 'https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/18176/property/227193.jpg',
      name: 'Lakeview Lodge',
      location: 'Pune',
      type: 'Lakefront Resort',
      rating: 4.6,
      numberOfRooms: 7,
      capacity: 180,
      coordinates: [18.5204, 73.8567]
    },
    {
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/07/86/2f/00/caption.jpg',
      name: 'Golden Palace',
      location: 'Delhi',
      type: 'Luxury Hotel',
      rating: 4.7,
      numberOfRooms: 12,
      capacity: 300,
      coordinates: [28.7041, 77.1025]
    },
    {
      imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/07/86/2f/00/caption.jpg',
      name: 'Silver Palace',
      location: 'Delhi',
      type: 'Luxury Hotel',
      rating: 4.7,
      numberOfRooms: 12,
      capacity: 300,
      coordinates: [28.7041, 77.1025]
    }
  ];

  
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
        <input type="text" placeholder='Search...' onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} className='border rounded-sm w-[20vw] px-3 py-2 focus:outline-none placeholder-zinc-500'  />
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
        { (filteredData.length>0) ? filteredData.map((item) => {
           return <HallCard imageUrl={item.imageUrl} name={item.name} location={item.location} type={item.type} rating={item.rating} numberOfRooms={item.numberOfRooms} capacity={item.capacity} />
        }) : <h1 className='ml-3'>No Items Found..</h1> }
        
      </div>

    </div>
  )
}

export default Browsehalls