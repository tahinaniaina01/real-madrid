import datas from "@/data/products.json";
import { productType } from "@/types/products";
import Product from "../global/Product";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export function Products({ productType }: { productType: string }) {
  const products = datas.filter((product) => product.type === productType);

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {products.map((data: productType, index: number) => {
          return (
            <SwiperSlide key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
              <div className="p-2 w-full h-full">
                <Product product={data} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
