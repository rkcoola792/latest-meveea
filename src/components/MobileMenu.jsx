"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { fetchDataFromApi } from '../../utils/api';

const MobileMenu = () => {
    // const categories = ["Lower", "Pants", "Hoodies", "Tshirts"];
    const [categoryOpen,setCategoryOpen]=useState(false)
    const [categories,setCategories]=useState(null)
    useEffect(()=>{
      fetchCategories()

    },[])
    
    const fetchCategories=async()=>{
      const {data}=await fetchDataFromApi("/api/categories?populate=*")
        setCategories(data)
    }

   console.log(categories)
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

            {categoryOpen && <div className='flex flex-col gap-2'>{categories?.map((category, index) => (
        <Link key={index}  href={`/category/${category?.attributes?.slug}`}>
          <p className="hover:bg-gray-100 px-4 my-1">
            {category?.attributes.name}
            <hr />
          </p>
        </Link>
      ))}
      </div>}
         
      <Link href="/contact">
              <p>Contact</p>
            </Link>
            <hr />
    </div>
  )
}

export default MobileMenu
