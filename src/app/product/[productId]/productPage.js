// ProductPageClient.js
"use client";

import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import { FaRegHeart } from "react-icons/fa";
import store from "../../../../store/store";
import { addToCart } from "../../../../store/cartSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPageClient = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log("cart items", cartItems);

  const { name, subtitle, price, description, size, originalPrice, image } = product?.data[0]?.attributes;
  const [selectSize, setSelectSize] = useState("");
  const [showError, setShowError] = useState(false);
  const notify=()=>{
    toast.success('Added to cart!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
      });
  }
  return (
    <div className="w-full py-12">
      <Provider store={store}>
      <ToastContainer />
        <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-8 gap-[50px] lg:gap-[100px]">
            <div className="left w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              <ProductDetailsCarousel image={image} />
            </div>
            <div className="right flex-[1] py-3">
              <div className="product-title">
                <h2 className="text-[34px] font-semibold mb-2">{name}</h2>
              </div>

              <h3 className="subtitle text-lg font-semibold mb-5">
                {subtitle}
              </h3>
              <div className="flex price-section gap-2">
                <h3 className="subtitle text-lg font-semibold mb-5">
                  MRP: ₹{price}
                </h3>
                {originalPrice && (
                  <p className="text-xs sm:text-base text-gray-400 font-medium line-through">
                    ₹{originalPrice}
                  </p>
                )}
                {originalPrice && (
                  <p className="text-xs sm:text-base font-medium ml-auto text-green-500">
                    {Math.floor(
                      ((originalPrice - price) / originalPrice) * 100
                    )}
                    % off
                  </p>
                )}
              </div>

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
                <div id="sizeGrid" className="grid grid-cols-3 gap-2">
                  {size.data.map((ele, index) => (
                    <div
                      key={index}
                      className={`border 
                      opacity-50 rounded-md text-center py-3 font-medium ${
                        ele.enabled
                          ? `hover:border-black cursor-pointer`
                          : `cursor-not-allowed bg-black/[0.1] opacity-50`
                      } ${ele.enabled && selectSize == ele.size?"border-black" : ""}`}
                      onClick={() => {
                        setSelectSize(ele.size);
                        setShowError(false);
                      }}
                    >
                      <p>{ele.size}</p>
                    </div>
                  ))}

                  {/* size ends here> */}
                </div>

                {/* show start error */}
                {showError && (
                  <div className="text-red-600 mt-2 ">
                    <p>Size selection is required</p>
                  </div>
                )}
              </div>
              {/* product size range ends         */}

              {/* add cart button */}
              <button
                onClick={() => {
                  if(!selectSize){setShowError(true)
                                  document.getElementById("sizeGrid").scrollIntoView({
                                    block:"center",
                                    behavior:"smooth"
                                  })
                }
                else{
                  dispatch(addToCart({
                  ...product?.data[0],
                  selectSize,
                  oneQuantityPrice:price
                }))
                notify()
                }
                }
                
                }
                className="mt-8 w-full py-4 rounded-full  bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              >
                <p>Add to cart</p>
              </button>
              {/* add cart button ends */}

              {/* wish button start */}
              <button className="w-full py-4 rounded-full  border border-black  text-lg font-medium transition-transform flex items-center justify-center gap-2 active:scale-95 mb-10 hover:opacity-75">
                <p>Wishlist</p>
                <FaRegHeart />
              </button>
              {/* wishlist button end */}

              {/* product description starts here */}
              <div className="">
                <div className="text-lg font-bold mb-5">
                  <p>Product Details</p>
                </div>
                <div className="text-md mb-5">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <RelatedProducts/> */}
        </Wrapper>
      </Provider>
    </div>
  );
};

export default ProductPageClient;
