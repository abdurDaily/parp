import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header className="bg-[#121213] text-white py-3 hidden md:block px-5">
        <div className="container">
          <div className="flex justify-between">
            <div className="header-left-part space-x-5">
              <span>2 March, 2025</span>
              <span>Advertisement</span>
              <span>About</span>
              <span>Contact</span>
            </div>
            <div className="header-right-part flex space-x-5 items-center">
              <span><FaFacebookF /></span>
              <span><FaTwitter /></span>
              <span><FaInstagram /></span>
              <span><FaLinkedinIn /></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
