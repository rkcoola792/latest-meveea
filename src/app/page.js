// "use client"
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
// import { useEffect, useState } from "react";
// import { fetchDataFromApi } from "../../utils/api";

export default async function Home() {
  const getProducts = async () => {
    let headers = {
      Authorization:
        "Bearer 409cfe9017d8e15a5d631b572f4ac2d34e459beaaeeb3638717c4c1f27bfeb4cfe95e3134635699cab4b463ad797f5f4442c7798d2e4ee5371595c3e32774b594d24a1639ed94126ca2e3d2d5ef767ee5cbc26c502d9c08cb4b0884e7f6484b6f90d30853eb676c35f3422adb9693af219e2f275143ac13ab4352c0275a97ef7",
    };
    let res = await fetch("http://127.0.0.1:1337/api/products?populate=*", {
      headers: headers,
      cache:"no-store"
    });
    
    return res.json();
  };
  const {data} = await getProducts();
  console.log(data);
  return (
    <div className="">
      <HeroBanner />
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* heading and paragaph end */}

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14 px-5 md:px-0 ">
          {data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
          {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
        </div>
        {/* products grid end */}
      </Wrapper>
    </div>
  );
}
