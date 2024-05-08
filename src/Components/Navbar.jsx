import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Contexts/UserContext";

const Navbar = () => {
    const { userToken, logout } = useUserContext();
    const navigate = useNavigate();
    return (
        <>
            <div className='bg-[#FF5880] w-screen '>
                <h1 className='text-md text-white p-2  '> your occasion, our profession</h1>
            </div>


            <nav className='h-[41px] w-screen bg-[#FFFBFB] py-6 px-5 flex items-center border gap-5 '>
                <a href="/" className='text-lg leading-4 p-2 '>Home</a>
                <a href="/services" className='text-lg leading-4 p-2 '>Services</a>
                <a href="/buytickets" className='text-lg leading-4 p-2 '>Buy Tickets</a>
                <a href="/contactus" className='text-lg leading-4 p-2 '>Contact Us</a>
            </nav>

            <div>

            </div>

        </>
    )
}

export default Navbar