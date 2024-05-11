import React from "react";
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
import Footer from "./Components/Footer";
import WebNavbar from "./Components/WebNavbar";

function App() {
  const navigate = useNavigate();
  const { userToken, logout } = useUserContext();
  return (
    <div className="overflow-hidden">
      
      <WebNavbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/buytickets" element={<BuyTickets />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
