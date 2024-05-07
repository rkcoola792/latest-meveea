"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import MobileMenu from "./MobileMenu";


const categories = ["Lower", "Pants", "Hoodies", "Tshirts"];

const Dropdown = () => {
  return (
    <div className="flex flex-col z-[100]   w-[150px]  bg-white  rounded h-auto mt-12 border border-gray-50 shadow-md">
      {categories.map((ele, index) => (
        <Link href={`category/${ele.toLowerCase()}`}>
          <p key={index} className="hover:bg-gray-100 px-4 my-1">
            {ele}
          </p>
        </Link>
      ))}
    </div>
  );
};

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  console.log(openDropdown);
  return (
    <>
      <div className="header-wrapper bg-white shadow-lg sticky top-0 z-[100]">
        <div className="header flex items-center justify-between max-w-[1280px] mx-auto lg:px-12  sm:px-8 px-4 py-6 sm:h-[60px] h-[50px]   ">
          <div className="left-logo text-2xl font-bold">MEVEEA</div>
          <div className="center-links sm:flex gap-8 items-center font-medium hidden  ">
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="about">
              <p>About</p>
            </Link>

            <div
              className="flex items-center cursor-pointer relative"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <p>Categories</p>
              <div className="absolute -top-3">
                {openDropdown && <Dropdown></Dropdown>}
              </div>
              <div>
                <RiArrowDropDownLine className="text-xl" />
              </div>
            </div>
            <Link href="/contact">
              <p>Contact</p>
            </Link>
          </div>
          <div className="right-cart flex gap-4 text-xl sm:text-2xl">
            <div className="cart-icon relative">
              <IoCartOutline />
              <div className="absolute bg-black text-white flex items-center justify-center rounded-[50%] h-4 w-4 sm:h-5 sm:w-5 -top-2 left-3 text-xs font-bold bg-opacity-90">
                <p>3</p>
              </div>
            </div>
            <div className="mobile-menu block sm:hidden cursor-pointer " onClick={()=>setMobileMenuOpen((prev)=>!prev)}>
              {mobileMenuOpen?<BiMenuAltRight />:<IoCloseSharp />}
                
            </div>
          </div>
        </div>
        <div className="sm:hidden">

        {!mobileMenuOpen&&<MobileMenu/>}
        </div>
        
      </div>
    </>
  );
};

export default Header;
