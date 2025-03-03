import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header className="bg-[#121213] text-white py-3 hidden md:block px-5 font-[Roboto]">
        <div className="container">
          <div className="flex justify-between">
            <div className="header-left-part space-x-5 text-[14px]">
              <span className="text-[#cecece]">2 March, 2025</span>
              <span> <a className="hover:text-red-500 text-[#cecece]" href="#">Advertisement</a></span>
              <span> <a className="hover:text-red-500 text-[#cecece]" href="#">About</a></span>
              <span> <a className="hover:text-red-500 text-[#cecece]" href="#">Contact</a></span>
            </div>
              <ul className="header-right-part flex space-x-5 items-center">
                <li><a className="hover:text-red-500 text-[#cecece]" href=""><FaFacebookF /></a></li>
                <li><a className="hover:text-red-500 text-[#cecece]" href=""><FaTwitter /></a></li>
                <li><a className="hover:text-red-500 text-[#cecece]" href=""><FaInstagram /></a></li>
                <li><a className="hover:text-red-500 text-[#cecece]" href=""><FaLinkedinIn /></a></li>
              </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
