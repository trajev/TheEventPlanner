
const Services = () => {
  return (
    <section className='bg-[#FFFBFB]'>
        <h1 className='py-10 text-center text-2xl sm:text-4xl'>Our Services</h1>
        <div className=' px-2 sm:px-10 pb-10 sm:pb-0 flex flex-wrap justify-around '>

          <div className=' w-[44%] sm:w-[30%] flex flex-col items-center'>
            <img src="src\assets\decoration-service.jpeg" alt="service-1" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4 ' />
            <h3 className='font-semibold mb-2  text-md sm:text-xl'>Decoration</h3>
            <p className='pl-3 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae illum consectetur quas architecto </p>
          </div>

          <div className=' w-[44%] sm:w-[30%] flex flex-col items-center'>
            <img src="src\assets\videography-service.jpg" alt="service-2" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4' />
            <h3 className='font-semibold mb-2 text-md sm:text-xl'>Videography</h3>
            <p className='pl-3 sm:pl-10 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae illum consectetur quas architecto </p>
          </div>

          <div className=' w-[44%] sm:w-[30%] flex flex-col items-center'>
            <img src="src\assets\photography-service.jpeg" alt="service-1" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4 ' />
            <h3 className='font-semibold mb-2  text-md sm:text-xl'>Photography</h3>
            <p className='pl-3 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae illum consectetur quas architecto </p>
          </div>

          <div className=' w-[44%] sm:w-[30%] flex flex-col items-center'>
            <img src="src\assets\foodcatering-service.jpeg" alt="service-2" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4' />
            <h3 className='font-semibold mb-2 text-md sm:text-xl'>Food Catering</h3>
            <p className='pl-3 sm:pl-10 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae illum consectetur quas architecto </p>
          </div>

          <div className=' w-[44%] sm:w-[30%] flex flex-col items-center'>
            <img src="src\assets\lighting-service.jpeg" alt="service-1" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4 ' />
            <h3 className='font-semibold mb-2  text-md sm:text-xl'>Lighting</h3>
            <p className='pl-3 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae illum consectetur quas architecto </p>
          </div>

          <div className=' w-[44%] sm:w-[30%] flex flex-col items-center'>
            <img src="src\assets\entertainment-service.jpg" alt="service-2" className='rounded-lg w-full h-[40%] sm:h-[60%] object-cover mb-4' />
            <h3 className='font-semibold mb-2 text-md sm:text-xl'>Entertainment</h3>
            <p className='pl-3 sm:pl-10 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae illum consectetur quas architecto </p>
          </div>

        </div>
      </section>
  )
}

export default Services