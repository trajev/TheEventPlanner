import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import Dropdown from "react-bootstrap/Dropdown";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { useUserContext } from "./Contexts/UserContext";
import Home from "./Components/Home";
import Services from "./Components/Services";
import BuyTickets from "./Components/BuyTickets";
import ContactUs from "./Components/ContactUs";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ProfilePage from "./Components/ProfilePage";

function App() {
  const navigate = useNavigate();
  const { userToken, logout } = useUserContext();
  return (
    <>
      <Navbar expand="lg" className="bg-body-primary navbarmain">
        <Container fluid>
          <Navbar.Brand onClick={() => navigate("/")}>
            Sports <SportsHandballIcon />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navmain">
            <Nav
              className="me-auto my-2 my-lg-0 navlink"
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
                variant="secondary"
                id="dropdown-basic"
                className="username"
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
                    <Dropdown.Item onClick={() => navigate("/login")}>
                      Login
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/signup")}>
                      Register
                    </Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/buytickets" element={<BuyTickets />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
