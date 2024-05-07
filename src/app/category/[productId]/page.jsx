import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import React from 'react'

const page = ({params}) => {
    return (
    <div className='w-full md:py-20'>
   {/* category page {params.productId} */}

   <Wrapper>
    <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
        <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight' >
        T-shirts
        </div>
    </div>
    {/* products grid start */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14 px-5 md:px-0 ">
                    {/* {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))} */}
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                {/* products grid end */}
   </Wrapper>
    </div>
  )
}

export default page
