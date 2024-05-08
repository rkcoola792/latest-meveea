"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const ProductDetailsCarousel = () => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1280px] mx-auto sticky top-[50px]'>
      <Carousel    
        infiniteLoop={true}
        showStatus={false}
        thumbWidth={60}
        showIndicators={false}
        className='productCarousel'
        >
        <img src="https://m.media-amazon.com/images/I/71mh8ZJZFuL._SY879_.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/71vSLpVgZpL._SY879_.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/71J8pbcn8WL._SY879_.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/71Xu6C8X5sL._SY879_.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/81ad2heJVXL._SY879_.jpg" alt="" />
        {/* <img src=".jpg" alt="" /> */}
        {/* <img src="" alt="" /> */}

        </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel
