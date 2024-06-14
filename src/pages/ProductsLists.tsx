import Footer from "@/components/sections/global/Footer";
import Header from "@/components/sections/global/Header";
import Hero from "@/components/sections/productsList/Hero";
import ProductList from "@/components/sections/productsList/ProductList";
import productTypes from "@/data/productsTypeList.json";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

export type ProductType = {
  id: number;
  params: string;
  type: string;
  imageBackground: string;
  imageForground: string;
  title: string;
  description: string;
};

export default function ProductsLists() {
  const { productType } = useParams();

  const prodType: ProductType | undefined = productTypes.find(
    (prod) => prod.params == (productType || "999999999999999")
  );

  if (!prodType) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <Hero prodType={prodType} />
      <ProductList type={prodType.type} />
      <Footer />
    </>
  );
}
