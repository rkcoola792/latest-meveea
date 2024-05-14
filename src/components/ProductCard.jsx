import Link from 'next/link'
import React from 'react'

const ProductCard = ({data}) => {
  console.log("recived product prop" , data)
  return (
    <Link href="/product/1" className='transform overflow-hidden bg-white duration-200 hover:scale-105'>
      <img className='w-full h-[300px] object-cover'  src={data?.attributes?.image?.data[0]?.attributes?.url} alt=""  />
      <div className='description pt-4 px-2 text-black/[0.9]'>
       
       <h2 className='text-lg font-medium'>{data?.attributes?.name}</h2>
       <div className='prices flex items-center text-black/[0.5]'>
       <p className='mr-2 text-lg font-semibold'>₹{data?.attributes?.price}</p>
       <p className='text-base font-medium line-through'>₹{data?.attributes?.originalPrice}</p>
       <p className='text-base font-medium ml-auto text-green-500'>{(data?.attributes?.originalPrice-data?.attributes?.price)/(data?.attributes?.originalPrice)*100}% off</p>

       </div>

      </div>
    </Link>
  )
}

export default ProductCard
