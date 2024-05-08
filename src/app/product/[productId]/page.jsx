import ProductCard from "@/components/ProductCard";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

const page = ({ params }) => {
  return (
    <div className="w-full py-12">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-8 gap-[50px] lg:gap-[100px]">
          <div className="left w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          <div className="right flex-[1] py-3">
            <div className="product-title">
              <h2 className="text-[34px] font-semibold mb-2">Drake T-shirt</h2>
            </div>

            <h3 className="subtitle text-lg font-semibold mb-5">
              Drake's exclusive t-shirts
            </h3>

            <p className="text-md font-medium text-black/[0.5]">
              incl. of all taxes
            </p>
            <p className="text-md font-medium text-black/[0.5] mb-2">
              {`( Also includes all applicable duties)`}
            </p>

            {/* product size range starts */}
            <div className="mt-10">
              <div className="justify-between flex mb-2">
                <div className="size text-md font-semibold">
                  <p>Select size</p>
                </div>
                <div className="guide text-md font-medium text-black/[0.5] cursor-pointer">
                  <p>Select guide</p>
                </div>
              </div>

              {/* size start */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  <p>UK 6</p>
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  <p>UK 6.5</p>
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  <p>UK 7</p>
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  <p>UK 7.5</p>
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  <p>UK 8</p>
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  <p>UK 8.5</p>
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  <p>UK 9</p>
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  <p>UK 9.5</p>
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  <p>UK 10</p>
                </div>
                <div className="border bg-black/[0.1] cursor-not-allowed opacity-50 rounded-md text-center py-3 font-medium hover:border-black ">
                  <p>UK 10.5</p>
                </div>
                {/* size ends here> */}
              </div>

              {/* show start error */}
              <div className="text-red-600 mt-2 mb-6">
                <p>Size selection is required</p>
              </div>
            </div>
            {/* product size range ends         */}

            {/* add  cart button */}
            <button className="w-full py-4 rounded-full  bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              <p>Add to cart</p>
              </button>
{/* add cart button ends */}

{/* wish button start */}

<button className="w-full py-4 rounded-full  border border-black  text-lg font-medium transition-transform flex items-center justify-center gap-2 active:scale-95 mb-10 hover:opacity-75">
<p>Wishlist</p>
<FaRegHeart/>
</button>
{/* wishlist button end */}
            
            {/* product desctiption starts here */}
            <div className="" > 
              <div className="text-lg font-bold mb-5">
                <p>Product Details</p>
              </div>
              <div className="text-md mb-5">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nihil temporibus dicta quam. Molestiae, illo ut corporis dicta blanditiis dolores velit officia adipisci quasi, quos error exercitationem praesentium quisquam vel?</p>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts/>
      </Wrapper>
    </div>
  );
};

export default page;
