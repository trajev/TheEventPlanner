import React from 'react'

const MyBookings = () => {

    const data = [{
        "userId": "663bc072ec4cb300821885d8",
        "hallName": "Oceanic Resort",
        "hallType": "Beach Resort",
        "capacity": 500,
        "image": "https://www.vacationstoremiami.com/oceanbluesand/images/slides/slide-68.jpg",
        "hallAddress": "Goa",
        "firstName": "John",
        "lastName": "Williamson",
        "address": "Dhaka, Bangladesh",
        "email": "john@gmail.com",
        "contactNo": 1234565412,
        "eventCategory": "Anniversary",
        "eventDate": "2024-05-31",
        "startTime": "18:30",
        "endTime": "22:00",
        "services": {
            "decoration": true,
            "foodCatering": true,
            "entertainment": true,
            "photography": true,
            "invitations": false,
            "transportation": false
        }
    }]



    return (
        <div className='w-full flex justify-center py-10'>
            <div className='w-[80%] h-screen'>
                <h1 className='text-3xl font-semibold'>My Bookings</h1>

                {data.map((item) => {
                    return (<div className='flex flex-col items-center my-10  '>
                        <div className='w-full flex justify-around bg-pink-50 hover:bg-white border py-2 hover:shadow-lg rounded-lg ' >
                            <div className='w-[25vw] h-[15vw] rounded-lg bg-zinc-200'>
                                <img src={item.image} alt="" className='w-full h-full object-cover object-center rounded-md' />
                            </div>
                            <div className='w-[50.5vw]  py-2 flex flex-col justify-around'>
                                <div>
                                    <h2 className='font-semibold text-2xl text-zinc-700'>{item.hallName}</h2>
                                    <div className='flex gap-10 mt-2 justify-start  text-lg'>
                                        <h3 className=' font-semibold text-md text-zinc-500 flex items-center  '> <i class="fa-solid fa-location-dot mr-2"></i> {item.hallAddress} </h3>
                                        <h3 className=' font-semibold text-md text-zinc-500 flex justify-end items-center '> <i class="fa-solid fa-hotel mr-2"></i> {item.hallType}</h3>
                                        <h3 className=' font-semibold text-md text-zinc-500 flex justify-end items-center '> <i class="fa-solid fa-people-group mr-2"></i> {item.capacity} pax</h3>
                                    </div>
                                </div>
                                <div className='mt-2 flex flex-col gap-1 '>
                                    <h2 className='text-base'> <span className='font-semibold'> Event Name: </span> {item.eventCategory}</h2>
                                    <h2 className='text-base'> <span className='font-semibold'>  Event Date: </span> {item.eventDate}</h2>
                                    <h2 className='text-base'> <span className='font-semibold'> Event Time: </span> {item.startTime} - {item.endTime}</h2>
                                    <h2 className='text-base'><span className='font-semibold '>Services Added: </span>
                                        {Object.entries(item.services).map(([service, value], index, arr) => (
                                            value && (
                                                <span className='capitalize' key={service}>
                                                    {index !== 0 && ', '} {service}
                                                </span>
                                            )
                                        ))}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>

    )
}

export default MyBookings