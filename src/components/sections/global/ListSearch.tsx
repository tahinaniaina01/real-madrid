import datas from "@/data/products.json";
import Product from "./Product";

export default function ListSearch({ search }: { search: string }) {
  const productsSearch = datas.filter((product) => {
    return (
      product.title.toUpperCase().indexOf(search.toUpperCase()) != -1 ||
      product.type.toUpperCase().indexOf(search.toUpperCase()) != -1
    );
  });
  // console.log(productsSearch);

  return (
    <div
      className={`search-box ${
        search === "" ? "hidden" : "flex"
      } absolute top-full -left-8 shadow-xl w-[100vw] min-h-[150px] overflow-x-auto z-[99] bg-background border-t border-muted-foreground items-center justify-center`}
    >
      {productsSearch.length > 0 ? (
        <div className="px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {productsSearch.slice(0, 4).map((prduct, index) => {
            return <Product key={index} product={prduct} />;
          })}
        </div>
      ) : (
        <div>aucune produits</div>
      )}
    </div>
  );
}
