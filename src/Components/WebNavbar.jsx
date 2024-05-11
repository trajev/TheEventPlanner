import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Contexts/UserContext";


import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import Dropdown from "react-bootstrap/Dropdown";

const WebNavbar = () => {
    const { userToken, logout } = useUserContext();
    const navigate = useNavigate();
    return (
        <div className="bg-[#FFFBFB]">
            <div className='bg-[#FF5880] w-screen '>
                <h1 className='text-sm sm:text-md text-white p-2  italic '> your occasion, our profession</h1>
            </div>


            {/* <nav className='h-[41px] w-screen bg-[#FFFBFB] py-6 px-5 flex items-center border gap-5 '>
                <a href="/" className='text-lg leading-4 p-2 '>Home</a>
                <a href="/services" className='text-lg leading-4 p-2 '>Services</a>
                <a href="/buytickets" className='text-lg leading-4 p-2 '>Buy Tickets</a>
                <a href="/contactus" className='text-lg leading-4 p-2 '>Contact Us</a>
            </nav> */}

            <Navbar expand="lg" className="bg-body-primary navbarmain bg-[#FFFBFB]">
                <Container fluid>
                    <Navbar.Brand onClick={() => navigate("/")}>
                        TheEvent <TheaterComedyIcon />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="navmain">
                        <Nav
                            className="me-auto my-2 my-lg-0 navlink "
                            style={{ maxHeight: "200px" }}
                            navbarScroll
                        >
                            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                            <Nav.Link onClick={() => navigate("/services")}>Services</Nav.Link>
                            <Nav.Link onClick={() => navigate("/buytickets")}>Packages</Nav.Link>
                            <Nav.Link onClick={() => navigate("/contactus")}>ContactUs</Nav.Link>
                        </Nav>

                        <Dropdown>
                            <Dropdown.Toggle
                            // style={{backgroundColor:"#FF5880" , border:"none", focus:{border:}}}
                                variant="secondary"
                                id="dropdown-basic"
                                className="username bg-[#FF5880] border-none  focus:border-none"
                            >
                                User
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {userToken ? (
                                    <>
                                        <Dropdown.Item onClick={() => navigate("/profile")}>
                                            Profile
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {
                                                logout();
                                                navigate("/login");
                                            }}
                                        >
                                            Logout
                                        </Dropdown.Item>
                                    </>
                                ) : (
                                    <>
                                        <Dropdown.Item style={{ color:"white", backgroundColor: "#FF5880" , fontSize:"16px"}} onClick={() => navigate("/login")}>
                                            Login
                                        </Dropdown.Item>
                                        <Dropdown.Item style={{ color:"white", backgroundColor: "#FF5880" , fontSize:"16px"}}  onClick={() => navigate("/signup")}>
                                            Register
                                        </Dropdown.Item>
                                    </>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   

        </div>
    )
}

export default WebNavbar