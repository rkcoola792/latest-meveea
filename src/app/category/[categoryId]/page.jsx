// import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import { fetchDataFromApi } from '../../../../utils/api'

export default async function page ({params,category,products,slug}){
// const {category,products,slug}=await getProducts
  console.log("category data",category)
    return (
    <div className='w-full md:py-20'>
   {/* category page {params.productId} */}

   <Wrapper>
    <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
        <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight' >
        {/* {params.categoryId.toUpperCase ()} */}
        {category?.data?.[0].attributes?.name}
        </div>
    </div>
    {/* products grid start */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14 px-5 md:px-0 ">
                     {/* {product[0]?.attributes?.products.data.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}  */}
                    Hey
                </div>
                {/* products grid end */}
   </Wrapper>
    </div>
  )
}

export async function generateStaticParams() {
  const category =await fetchDataFromApi("/api/categories?populate=*")
  const paths=category.data.map((ele)=>({
      params:{
        slug:ele.attributes.slug
      }
    }
  )
)
   return paths 
}
 
async function getProduct({params:{slug}}) {
  const category =await fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`)
  const products =await fetchDataFromApi(`/api/products?populate=*&filter[categories][slug][$eq]=${slug}`)
 
  return {
    props:{
      category,
      products,
      slug
    }
  }
}