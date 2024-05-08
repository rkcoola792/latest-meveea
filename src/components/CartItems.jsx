import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

const CartItems = () => {
  return (
    <div className='flex py-5 gap-3 md:gap-5 border-b'>

        <div className='shrink-0 aspect-sqaure w-[50px] md:w-[120px]'>
            <img src="/tshirt.jpg" alt="" />
        </div>

        <div className='product-details w-full flex flex-col'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='product-title text-lg md:text-2xl  font-semibold text-black/[0.8]'>
                    <p>Drake  T-shirt</p>
                </div>
                <div className='product-subtitle text-sm md:text-md  font-medium text-black/[0.5] block md:hidden'>
                    <p>Men's T-shirt</p>
                </div>
                <div className='product-price text-sm md:text-md  font-medium text-black/[0.5] mt-2'>
                    <p>MRP : $ 20.00</p>
                </div>
            </div>
            <div className='product-subtitle text-sm md:text-md  font-medium text-black/[0.5] '>
                    <p>Men's T-shirt</p>
                </div>

                <div className='flex items-center justify-between mt-1'>
                    <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>
                        <div className='flex items-center gap-1'>
                            <div className='font-semibold'>Size:</div>
                            <select className='hover:text-black cursor-pointer'>
                            <option value="1">UK 6</option>
                            <option value="2">UK 6.5</option>
                            <option value="3">UK 7</option>
                            <option value="4">UK 7.5</option>
                            <option value="5">UK 8</option>
                            <option value="6">UK 8.5</option>
                            <option value="7">UK 9</option>
                            <option value="8">UK 9.5</option>
                            <option value="9">UK 10</option>
                            <option value="10">UK 10.5</option>
                            <option value="11">UK 11</option>
                            </select>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className='font-semibold'>Quantity:</div>
                            <select className='hover:text-black cursor-pointer'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11"> 11</option>
                            </select>
                        </div>
                    </div>
                    <RiDeleteBinLine 
 className='delete-icon cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]'/>
                </div>
        </div>
    </div>
  )
}

export default CartItems
