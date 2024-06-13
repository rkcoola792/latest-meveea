// page.js
import React from "react";
import { fetchDataFromApi } from "../../../../utils/api";
import Wrapper from "@/components/Wrapper";
import ProductPageClient from "./productPage";
const Page = async ({ params }) => {
  const product = await getProduct(params.productId);

  return (
    <Wrapper>
      <ProductPageClient product={product} />
    </Wrapper>
  );
};

export default Page;

export async function generateStaticParams() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products.data.map((ele) => ({
    slug: ele.attributes.slug,
  }));
  return paths;
}

async function getProduct(slug) {
  const product = await fetchDataFromApi(`/api/products?populate=*&filters[slug][$eq]=${slug}`);
  return product;
}
