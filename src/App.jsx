import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import WhyChooseUs from './Components/WhyChooseUs'
import BuyTickets from './Components/BuyTickets'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './Components/Home'


function App() {

  return (
    <div className='container overflow-hidden m-0'>
      
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }></Route>
          <Route path="/services" element={ <Services/> } />
          <Route path="/buytickets" element={ <BuyTickets/> } />
          <Route path="/contactus" element={ <ContactUs/> } />
        </Routes>
      </BrowserRouter>

      <Footer />


      


    </div>

  )
}

export default App
