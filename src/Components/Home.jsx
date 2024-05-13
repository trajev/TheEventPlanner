import React from 'react'
import Hero from './Hero';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Gallery from './Gallery';
import BuyTickets from './BuyTickets';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    
    <>
    <Hero />

    <Services />

    <WhyChooseUs />

    <Gallery />

    {/* <BuyTickets/> */}

    <ContactUs />
    
    </>
  )
}

export default Home