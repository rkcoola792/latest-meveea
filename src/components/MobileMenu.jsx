"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const MobileMenu = () => {
    const categories = ["Lower", "Pants", "Hoodies", "Tshirts"];
    const [categoryOpen,setCategoryOpen]=useState(false)
  return (
    <div className='flex flex-col w-full px-6 gap-3'>

<Link href="/">
              <p>Home</p>
            </Link>
            <hr />
            <Link href="about">
              <p>About</p>
            </Link>
            <hr />
            <div className='contact flex justify-between cursor-pointer' onClick={()=>setCategoryOpen(prev=>!prev)}>
                <p>Categories</p>
                <div className='icon'>
                    <RiArrowDropDownLine className='text-xl'/>
                </div>
            </div>
            <hr />

            {categoryOpen && <div className='flex flex-col gap-2'>{categories.map((ele, index) => (
        <Link href={`category/${ele.toLowerCase()}`}>
          <p key={index} className="hover:bg-gray-100 px-4 my-1">
            {ele}
            <hr />
          </p>
        </Link>
      ))}</div>}
         
      <Link href="/contact">
              <p>Contact</p>
            </Link>
            <hr />
    </div>
  )
}

export default MobileMenu
