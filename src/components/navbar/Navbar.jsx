import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  let [search, setSearch] = useState(false);
  let [searchText, setSearchText] = useState("");
  let [mobileBar, setMobileBar] = useState(false);
  
  let searchHandler = () => {
    setSearch(!search);
  };

  let mobileMenuHandler = () => {
    setMobileBar(!mobileBar);
  }

  let searchCross = () => {
    setSearch(false);
    setSearchText(""); // Clear the input field
  };

  return (
    <nav className="shadow-lg bg-[#F9F9F9] md:py-0 p-5">
      <div className="container relative">
        <div className="flex items-center justify-between">
          <div className="first-part-nav flex items-center space-x-10">
            <img src="./images/logo.svg" alt="" />

            <div className={`hidden md:block`}>
              <ul className="flex space-x-[20px] font-[Poppins]">
                <li className="relative group flex items-center cursor-pointer">
                  <a href="#" className="font-popin py-6">
                    Home
                  </a>
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                  <ul className="absolute hidden group-hover/mobile:block bg-white min-w-40 top-full left-0 shadow-xl">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-3 hover:bg-[#FF416C] hover:text-white"
                      >
                        Sub 1
                      </a>
                    </li>
                    <li className="relative group/submenu">
                      <a
                        href="#"
                        className="block px-4 py-3 hover:bg-[#FF416C] hover:text-white"
                      >
                        Sub 2
                      </a>
                      <ul className="absolute hidden group-hover/mobile/submenu:block bg-white min-w-40 top-0 left-full shadow-xl">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-3 hover:bg-[#FF416C] hover:text-white"
                          >
                            Sub menu 2.1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-3 hover:bg-[#FF416C] hover:text-white"
                          >
                            Sub menu 2.2
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-3 hover:bg-[#FF416C] hover:text-white"
                          >
                            Sub menu 2.3
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-3 hover:bg-[#FF416C] hover:text-white"
                      >
                        Sub 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="py-6 inline-block" href="#">
                    Posts
                  </a>
                </li>
                <li>
                  <a className="py-6 inline-block" href="#">
                    Fashion
                  </a>
                </li>
                <li>
                  <a className="py-6 inline-block" href="#">
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a className="py-6 inline-block" href="#">
                    Technology
                  </a>
                </li>
                <li>
                  <a className="py-6 inline-block" href="#">
                    Sports
                  </a>
                </li>
                <li>
                  <a className="py-6 inline-block" href="#">
                    Pages
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <ul className="flex space-x-5">
            <li
              className="text-[#121213] text-[18px] cursor-pointer"
              onClick={searchHandler}
            >
              <IoSearch />
            </li>
            <li onClick={mobileMenuHandler} className="text-[#121213] text-[18px]">
              <FaBars />
            </li>
          </ul>
        </div>

        {/* Search Box */}
        <div
          className={`search_box absolute w-full top-0 ${
            search ? "visible" : "hidden"
          } h-full bg-[#F9F9F9]`}
        >
          <form
            action=""
            className="w-[70%] flex items-center mx-auto h-full relative"
          >
            <input
              type="text"
              className="outline-0 py-3 w-full border-b-1 border-b-[#121213]"
              placeholder="search..."
              value={searchText} // Controlled input
              onChange={(e) => setSearchText(e.target.value)} // Update state on input change
            />
            <button type="submit" className="absolute right-0">
              <IoSearch />
            </button>
          </form>

          {/* Cross Button */}
          <div
            className="search_cross absolute right-[5%] top-[50%] -translate-y-[50%]"
            onClick={searchCross}
          >
            <span className="bg-white shadow-2xl w-[30px] h-[30px] rounded-full flex items-center justify-center cursor-pointer">
              <RxCross2 />
            </span>
          </div>
        </div>



        
        <div className={` ${mobileBar == false ? 'hidden' : 'visible'} `}>
        <div className="mobile_menu md:hidden py-5">
           <ul className="space-y-5 text-center bg-white shadow-2xl p-5">
             <li className="group relative bg-white   w-full block py-3"> 
              <a href="#">Home</a>
                <ul className="hidden absolute w-full top-full group-hover:block bg-white shadow-2xl space-y-5 py-5">
                  <li><a href="#" className="bg-white w-full block py-1 hover:text-red-600" >Sub Menu 01</a></li>
                  <li><a href="#" className="bg-white w-full block py-1 hover:text-red-600" >Sub Menu 02</a></li>
                  <li><a href="#" className="bg-white w-full block py-1 hover:text-red-600" >Sub Menu 03</a></li>
                </ul>
             </li>
             <li><a className="bg-white w-full block py-3 hover:text-red-600" href="#">Posts</a></li>
             <li><a className="bg-white w-full block py-3 hover:text-red-600" href="#">Fashion</a></li>
             <li><a className="bg-white w-full block py-3 hover:text-red-600" href="#">Lifestyle</a></li>
             <li><a className="bg-white w-full block py-3 hover:text-red-600" href="#">Technology</a></li>
             <li><a className="bg-white w-full block py-3 hover:text-red-600" href="#">Sports</a></li>
             <li><a className="bg-white w-full block py-3 hover:text-red-600" href="#">Pages</a></li>
           </ul>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
