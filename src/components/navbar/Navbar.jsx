import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";


const Navbar = () => {
  return (
    <nav className="shadow-lg ">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="firt-part-nav flex items-center space-x-10">
            <img src="./images/logo.svg" alt="" />

            <ul className="flex space-x-[20px] font-[Poppins]">
              <li className="flex relative items-center cursor-pointer">
                <a href="#" className="font-popin py-6">Home </a>
                <span><MdKeyboardArrowDown /></span>

                <ul className="absolute bg-sky-400 w-full">
                    <li><a href="#">Sub</a></li>
                    <li><a href="#">Sub</a></li>
                    <li><a href="#">Sub</a></li>
                </ul>
              </li>
              <li>
                <a className="py-6 inline-block" href="#">Posts</a>
              </li>
              <li>
                <a className="py-6 inline-block" href="#">Fashion</a>
              </li>
              <li>
                <a className="py-6 inline-block" href="#">Lifestyle</a>
              </li>
              <li>
                <a className="py-6 inline-block" href="#">Technology</a>
              </li>
              <li>
                <a className="py-6 inline-block" href="#">Sports</a>
              </li>
              <li>
                <a className="py-6 inline-block" href="#">Pages</a>
              </li>
            </ul>
          </div>
          <ul className="flex space-x-5">
            <li className="text-[#121213] text-[18px]">
              <IoSearch />
            </li>
            <li className="text-[#121213] text-[18px]">
              <FaBars />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
