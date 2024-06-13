// import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import { fetchDataFromApi } from '../../../../utils/api'
import ProductCard from '@/components/ProductCard'

export default async function page ({params}){
const obj=await getProduct(params.categoryId)
  // console.log("category data",props.products)

  // const {products,category}=await getProduct("t-")
  // console.log("asdasdsa",params.categoryId)

  // console.log("products category",obj.props)
    return (
    <div className='w-full md:py-20'>
   {/* category page {props.params.categoryId} */}

   <Wrapper>
    <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
        <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight' >
        {obj.props.slug.toUpperCase()}
        </div>
    </div>
    {/* products grid start */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14 px-5 md:px-0 ">
                     {obj.props.products.data.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))} 
                    
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
 
async function getProduct(slug) {
  const category =await fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`)
  const products =await fetchDataFromApi(`/api/products?populate=*&filters[categories][slug][$eq]=${slug}`)
//  console.log("ccccccccccccccccc",products)
  return {
    props:{
      category,
      products,
      slug
    }
  }
}