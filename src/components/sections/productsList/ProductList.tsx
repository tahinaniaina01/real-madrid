import datas from "@/data/products.json";
import Product from "../global/Product";

export default function ProductList({ type }: { type: string }) {
  const products = datas.filter((product) => product.type === type);
  return (
    <section className="my-12">
      <div className="mx-8 md:mx-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {products.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </div>
    </section>
  );
}
