// import { useState } from "react"
import { useForm } from 'react-hook-form';


const ContactUs = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    function handleForm(data) {
        console.log(data)

        //post data to backend api
        

        reset();
    }

    return (
        <section className="flex flex-col items-center py-8 sm:py-10 bg-[#FFFBFB]">
            <h1 className='text-center font-semibold text-2xl sm:text-4xl uppercase'>Contact Us</h1>
            <h4 className='text-zinc-400 text-md w-[70%] text-center sm:text-xl my-4'>Nihil officia ut sint molestiae tenetur.</h4>
            <div className='w-16 h-1.5 bg-[#FF5880]'></div>

            <div className='w-screen flex  flex-col items-center gap-10 pt-4 sm:pt-12'>

                <div className='w-full sm:w-[72%] flex flex-col items-center sm:flex-row'>
                    <div className='w-1/2 text-center sm:w-1/3 border-b-2 sm:border-r-2 sm:border-b-0 border-zinc-300 flex flex-col py-8 gap-3 items-center justify-center '>
                        <h1 className='uppercase font-bold text-lg'>Address</h1>
                        <h4 className='text-md'>A108 Adam Street, NY 535022, USA</h4>
                    </div>
                    <div className='w-1/2 text-center sm:w-1/3 flex flex-col py-8 gap-3 items-center justify-center'>
                        <h1 className='uppercase font-bold text-lg'>phone number</h1>
                        <a href='tel:+155895548855' className='text-md text-blue-700 hover:text-red-500 transition-transform transform duration-500'>+1 5589 55488 55</a>
                    </div>
                    <div className='w-1/2  text-center sm:w-1/3   border-t-2 sm:border-l-2 sm:border-t-0 border-zinc-300 flex flex-col py-8 gap-3 items-center justify-center'>
                        <h1 className='uppercase font-bold text-lg'>Email</h1>
                        <a href='mailto:info@example.com' className='text-md text-blue-700 hover:text-red-500 transition-transform transform duration-500' >info@example.com</a>
                    </div>
                </div>

                <form action='post' className='w-[72%] text-center' onSubmit={handleSubmit(handleForm)} >

                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between'>
                            <input type="text" placeholder='Your Name' {...register('fullname')} name='fullname' className='border w-full mr-3 border-zinc-300 placeholder-gray-500 px-3 py-2 focus:outline-none  focus:border-blue-400 text-md text-zinc-600' />
                            <input type="text" placeholder='Your Email' {...register('email')} name='email' className='border w-full border-zinc-300 placeholder-gray-500 px-3 py-2 focus:outline-none  focus:border-blue-400 text-md text-zinc-600' />
                        </div>
                        <input type="text" placeholder='Subject' {...register('subject')} name='subject' className='border border-zinc-300 placeholder-gray-500 px-3 py-2 focus:outline-none  focus:border-blue-400 text-md text-zinc-600' />
                        <textarea name="message" id="message" rows="5" placeholder='Message' {...register('message')} className='border border-zinc-300 placeholder-gray-500 px-3 py-2 focus:outline-none focus:border-blue-400 text-md text-zinc-600'  ></textarea>
                    </div>

                    <input type="submit" className='bg-[#FF5880] rounded-full px-10 py-2 mt-4 text-white text-lg hover:bg-[#ec4d72] font-semibold cursor-pointer' value="Send Message" />
                </form>


            </div>

        </section>
    )
}

export default ContactUs