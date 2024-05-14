
import wcuimage from '../assets/wcu-bgremoved.png'

const WhyChooseUs = () => {
    return (
        <div>
            <h1 className='pb-10 bg-[#FFFBFB] text-center text-2xl sm:text-4xl'>Why Choose Us</h1>
            <section className='flex justify-center bg-[#FFFBFB] pb-16 '>
                <img src={wcuimage} alt="why choose us image" className='h-[80vh] drop-shadow-2xl ' />
            </section>
        </div>

    )
}

export default WhyChooseUs