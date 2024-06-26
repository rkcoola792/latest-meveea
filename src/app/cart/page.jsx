"use client"
import CartItems from "@/components/CartItems";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const subtotal=useMemo(()=>{
    return cartItems.reduce((acc,curr)=>acc+curr.attributes.price,0)
  },[cartItems])

 
  return (
    <div className="w-full md:py-12">
      <Wrapper>
      {cartItems.length>0?<div className="cart-items">
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cart
          </div>
        </div>
        {/* cart content starts here */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* cart items start here */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
            
            {cartItems.map(ele=><CartItems item={ele} />)}
            
            
          </div>
          {/* cart item ends here */}
          {/* summary start */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>
            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="left-heading uppercase text-base md:text-lg font-medium">
                  <p>Subtotal</p>
                </div>
                <div className="right-price text-base md:text-lg font-medium">
                  <p>{subtotal}</p>
                </div>
              </div>
              <div className="text:sm md:text-base py-5 border-t mt-5">
                <p>
                The subtotal reflects the total price of
                                        your order, including duties and taxes,
                                        before any applicable discounts. It does
                                        not include delivery costs and
                                        international transaction fees.
                </p>
              </div>
            </div>
            <button className="w-full py-4 rounded-full  bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              <p>Add to cart</p>
            </button>
          </div>
          {/* summary ends */}
        </div>
        </div>
        : <div className="empty-cart flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.jpg"
            height={300}
            width={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            <p>Looks like you have not added anything in your cart.</p>
            <br />
            Go ahead and explore the categories.
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div>
        }
      
        
       
        
      </Wrapper>
    </div>
  );
};

export default page;
