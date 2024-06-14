import { useCarts } from "@/hooks/carts";
import Item from "./Item";

export default function Cart() {
  const { productsCarts } = useCarts();
  const total = productsCarts.reduce(
    (total, product) => product.amount * product.price + total,
    0
  );

  return (
    <div className="lg:fixed flex flex-col lg:w-[37%] justify-between relative max-h-[calc(80svh-4rem)] lg:h-[calc(100vh-4rem)] lg:max-h-[calc(100vh-4rem)]">
      <div className="border-b px-3 py-3 flex items-center justify-between mt-10">
        <h2 className="font-bold text-2xl">Votre pannier</h2>
        <h2 className="font-bold text-2xl">
          {productsCarts.length === 1
            ? "1 Item"
            : `${productsCarts.length} Items`}
        </h2>
      </div>
      <div className="flex flex-col overflow-y-auto gap-3 max-h-[100vh] h-full pb-[350px] my-5">
        {productsCarts.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
      <div className="absolute w-full py-9 px-7 flex flex-col gap-y-3 right-0 bottom-0 bg-white">
        <div className="w-full mb-5 flex flex-col gap-1">
          <div className="w-full flex items-center justify-between">
            <span className="text-base font-normal leading-tighter tracking-tight text-foreground">
              Subtotal
            </span>
            <span className="text-base font-normal leading-tighter tracking-tight text-foreground">
              € {total.toFixed(2)}
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-base font-normal leading-tighter tracking-tight text-foreground">
              Shipping
            </span>
            <span className="text-base font-normal leading-tighter tracking-tight text-foreground">
              Calculated at next step
            </span>
          </div>
          <div className="w-full flex items-center justify-between mt-5 pt-3 border-t">
            <span className="leading-tighter tracking-tight text-foreground font-bold text-2xl xl:text-4xl">
              Total
            </span>
            <span className="leading-tighter tracking-tight text-foreground font-bold text-2xl xl:text-4xl">
              € {total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
