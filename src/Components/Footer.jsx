import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";

function Footer() {
  const data = [
    { name: "Home" },
    { name: "About us" },
    { name: "Service" },
    { name: "Terms of service" },
    { name: "Privacy policy" },
  ];
  return (
    <div className="w-full h-70 bg-[#131010] px-14 py-10 text-white flex justify-between">
      <div className="w-1/4 h-full p-4 overflow-hidden">
        <h1 className="text-4xl mb-6">TheEvent</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a,
          consectetur voluptas sint itaque quidem fugiat molestiae, repellat,
          dignissimos voluptatum velit soluta esse quas optio ex commodi qui
          dolorum et.
        </p>
      </div>

      <div className="w-1/3 h-full p-4">
        <h1>USEFUL LINK</h1>
        <div className="w-full h-[2px] bg-[#FF5880] my-2"></div>
        {data.map((d, i) => (
          <div className="flex gap-2 items-center py-2 ">
            <IoIosArrowForward /> <p className="cursor-pointer">{d.name}</p>
            <hr className="my-2" />
          </div>
        ))}
      </div>

      <div className="w-1/4 h-full p-4">
        <h1>CONTACT US</h1>
        <div className="w-full h-[2px] bg-[#FF5880] my-2"></div>
        <div>
          <h3 className="my-2">
            <p className="my-2 pt-2">404 Adam Street</p> <p>Lucknow, UP 2260020</p> <p>India</p>
          </h3>
          <h3 className="flex my-1">
            <p className=" font-semibold">Phone: &nbsp;</p>
            <p>+91 8191919199</p>
          </h3>
          <h3 className="flex my-1">
            <p className=" font-semibold">Email: &nbsp;</p>
            <p>info@email.com</p>
          </h3>
        </div>
        
        <div className="flex gap-2 my-5">
          <div className="bg-white text-black rounded-full text-xl p-1 cursor-pointer"> <FaXTwitter /> </div>
          <div className="bg-white text-black rounded-full text-xl p-1 cursor-pointer"> <FaFacebookF /> </div>
          <div className="bg-white text-black rounded-full text-xl p-1 cursor-pointer"> <FaInstagram /> </div>
          <div className="bg-white text-black rounded-full text-xl p-1 cursor-pointer"> <FaGoogle /> </div>
          <div className="bg-white text-black rounded-full text-xl p-1 cursor-pointer"> <FaLinkedin /> </div>


        </div>
      
      </div>
    </div>
  );
}

export default Footer;
