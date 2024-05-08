"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <div className="hero my-6  relative max-w-[1280px]  mx-auto px-4 sm:px-8 lg:px-12  object-cover">
      <Carousel
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 text-white opacity-60 flex items-center justify-center cursor-pointer hover:opacity-90 rounded-l-full"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center text-white  justify-center cursor-pointer opacity-60 hover:opacity-90 rounded-r-full"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <div className=" overflow-hidden lg:h-[500px] h-auto">
          <img src="/slide1.webp " className="aspect-[16/9]  object-cover " />
          <div className="px-[15px] rounded-r-full md:px-[30px] py-[10px] md:py-[25px] font-oswald bg-black absolute bottom-[25px] md:bottom-[75px] left-0 text-white/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer opacity-60 hover:opacity-90">
            Shop now
          </div>
        </div>
        <div className=" overflow-hidden lg:h-[500px] h-auto">
          <img src="/slide2.webp " className="aspect-[16/9] object-cover" />
          <div className="px-[15px] md:px-[30px] py-[10px] md:py-[25px] font-oswald bg-black rounded-r-full absolute bottom-[25px] md:bottom-[75px] left-0 text-white/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer opacity-60 hover:opacity-90">
            Shop now
          </div>
        </div>
        <div className=" overflow-hidden lg:h-[500px] h-auto">
          <img src="/slide3.webp " className="aspect-[16/9] object-cover " />
          <div className="px-[15px] md:px-[30px] rounded-r-full py-[10px] md:py-[25px] font-oswald bg-black  absolute bottom-[25px] md:bottom-[75px] left-0 text-white/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer opacity-60 hover:opacity-90">
            Shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
