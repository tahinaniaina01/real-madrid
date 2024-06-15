import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useCarts } from "@/hooks/carts";
import { productType } from "@/types/products";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Product({ product }: { product: productType }) {
  const { title, price, size, image, id } = product;
  const [Size, setSize] = useState<string>(size[0]);
  const { addProductCart } = useCarts();
  // console.log(id + ": " + Size);

  return (
    <div className="group cursor-pointer flex items-start flex-col gap-3 p-[10px] rounded-xl shadow-full-xl m-3">
      <div className="relative overflow-hidden">
        <Button
          onClick={() => addProductCart(product, Size)}
          variant={"ghost"}
          className="absolute top-1 group-hover:right-1 -right-16 transition-all duration-300 z-30"
        >
          <ShoppingCart />{" "}
        </Button>
        <Link to={`/product/${id}`} className="">
          <img
            className="group-hover:scale-75 transition-all duration-300 min-h-[200px]"
            src={image}
            alt="product items"
          />
        </Link>
        <ToggleGroup
          type="single"
          defaultValue={Size}
          variant="outline"
          onValueChange={(value) => {
            setSize(value);
          }}
          className="flex items-center justify-center w-full absolute transition-all gap-0 duration-300 bottom-0 translate-y-12 group-hover:translate-y-0"
        >
          {size.map((element: string, i: number) => {
            return (
              <ToggleGroupItem
                variant={"outline"}
                key={i}
                size={"sm"}
                value={element}
                className="shadow-full-sm rounded-full h-auto text-xs px-2 py-1 mb-0.5 w-fit cursor-default border-gray-150"
              >
                {element}
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      </div>
      <div className="flex flex-wrap justify-start h-[50px] w-[90%]">
        <Link
          className="mx-3 inline-flex items-center text-start font-bold text-muted-forground line-clamp-2 group-hover:underline leading-6 tracking-tighter sm:text-lg"
          to={`/product/${id}`}
        >
          {title}
        </Link>
      </div>
      <div className="mx-3 items-center h-[65px] border-t text-muted-forground font-bold w-[90%] inline-flex pt-3 ">
        <span>€ {price.toFixed(2)}</span>
      </div>
    </div>
  );
}
