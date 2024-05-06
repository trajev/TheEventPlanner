import React from 'react'

const BuyTickets = () => {
    return (
        <section className='bg-[#FFFBFB] flex flex-col items-center pt-10'>
            <h1 className='font-semibold text-3xl uppercase'>Buy Tickets</h1>
            <h4 className='text-zinc-400 text-xl my-4'>Velit consequatur consequatur inventore iste fugit unde omnis eum aut.</h4>
            <div className='w-20 h-1.5 bg-[#FF5880]'></div>

            <div className='w-[70%] my-16 flex justify-between '>

                <div className='w-[30%]   rounded-lg border shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transform duration-500'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-zinc-500 font-semibold mt-4 mb-3 '>STANDARD ACCESS</h2>
                        <h2 className='text-4xl italic text-center'>$120</h2>
                        <hr className='h-2 border-zinc-300 my-4 w-[90%]' />
                    </div>

                    <ul class="fa-ul flex flex-col justify-start px-6 gap-3 text-xl">
                        <li><span className="fa-li"><i className="fa fa-check font-bold"></i></span>Regular Seating</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Coffee Break</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Custom Badge</li>
                        <li className="text-zinc-400"><span className="fa-li"><i className="fa fa-times "></i></span>Community Access</li>
                        <li className="text-zinc-400"><span className="fa-li"><i className="fa fa-times"></i></span>Workshop Access</li>
                        <li className="text-zinc-400"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
                    </ul>

                    <div className='flex flex-col items-center mt-2 mb-6'>
                        <hr className='h-2 border-zinc-300 my-4 w-[90%]' />
                        <button className='bg-[#FF5880] rounded-full px-10 py-2 text-white text-lg hover:bg-[#ec4d72] font-semibold'>Buy now</button>
                    </div>
                </div>

                <div className='w-[30%]   rounded-lg border shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transform duration-500'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-zinc-500 font-semibold mt-4 mb-3'>PRO ACCESS</h2>
                        <h2 className='text-4xl italic text-center'>$250</h2>
                        <hr className='h-2 border-zinc-300 my-4 w-[90%]' />
                    </div>

                    <ul class="fa-ul flex flex-col justify-start px-6 gap-3 text-xl">
                        <li><span className="fa-li"><i className="fa fa-check font-bold"></i></span>Regular Seating</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Coffee Break</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Custom Badge</li>
                        <li><span className="fa-li"><i className="fa fa-check "></i></span>Community Access</li>
                        <li className="text-zinc-400"><span className="fa-li"><i className="fa fa-times"></i></span>Workshop Access</li>
                        <li className="text-zinc-400"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
                    </ul>

                    <div className='flex flex-col items-center mt-2 mb-6'>
                        <hr className='h-2 border-zinc-300 my-4 w-[90%]' />
                        <button className='bg-[#FF5880] rounded-full px-10 py-2 text-white text-lg hover:bg-[#ec4d72] font-semibold'>Buy now</button>
                    </div>
                </div>

                <div className='w-[30%]   rounded-lg border shadow-lg hover:shadow-2xl hover:scale-105 transition-transform transform duration-500'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-zinc-500 font-semibold mt-4 mb-3'>PREMIUM ACCESS</h2>
                        <h2 className='text-4xl italic text-center'>$350</h2>
                        <hr className='h-2 border-zinc-300 my-4 w-[90%]' />
                    </div>

                    <ul class="fa-ul flex flex-col justify-start px-6 gap-3 text-xl">
                        <li><span className="fa-li"><i className="fa fa-check font-bold"></i></span>Regular Seating</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Coffee Break</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Custom Badge</li>
                        <li><span className="fa-li"><i className="fa fa-check "></i></span>Community Access</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>Workshop Access</li>
                        <li><span className="fa-li"><i className="fa fa-check"></i></span>After Party</li>
                    </ul>

                    <div className='flex flex-col items-center mt-2 mb-6'>
                        <hr className='h-2 border-zinc-300 my-4 w-[90%]' />
                        <button className='bg-[#FF5880] rounded-full px-10 py-2 text-white text-lg hover:bg-[#ec4d72] font-semibold'>Buy now</button>
                    </div>
                </div>

            </div>

        </section>


    )
}

export default BuyTickets