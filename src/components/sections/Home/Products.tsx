import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import datas from "@/data/products.json";
import { productType } from "@/types/products";
import Product from "../global/Product";

export function Products({ productType }: { productType: string }) {
  const products = datas.filter((product) => product.type === productType);

  return (
    <>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {products.map((data: productType, index: number) => {
            return (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-2 w-full h-full">
                  <Product product={data} />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-left-5" />
        <CarouselNext className="-right-5" />
      </Carousel>
    </>
  );
}
