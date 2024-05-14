import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { useUserContext } from "./Contexts/UserContext";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Ourprices from "./Components/Ourprices";
import ContactUs from "./Components/ContactUs";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ProfilePage from "./Components/ProfilePage";
import Footer from "./Components/Footer";
import WebNavbar from "./Components/WebNavbar";
import BookingForm from "./Components/BookingForm";
import Halls from "./Components/Halls";
import Browsehalls from "./Components/Browsehalls";

function App() {
  const navigate = useNavigate();
  const { userToken, logout } = useUserContext();

  // useEffect(() => {
  // AOS.init({
  //   once:true,
  //   disable: "phone",
  //   duration: 700,
  //   easing: "ease-out-cubic",
  // });
  // }, []);

  return (
    <div className="overflow-hidden">

      <WebNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/occasionhubs" element={<Halls />} />

        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
        
        <Route path="/halls" element={<Halls />} />
        <Route path="/browsehalls" element={<Browsehalls />} />
        <Route path="/ourprices" element={<Ourprices />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
