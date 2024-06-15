import { cartType } from "@/types/carts";
import { ReactNode, createContext, useEffect, useState } from "react";

type cartsContextType = {
  productsCarts: cartType[];
  setProductsCarts: (productCarts: cartType[]) => void;
};

const defaultValues = {
  productsCarts: [],
  setProductsCarts: () => {},
};

export const CartsContext = createContext<cartsContextType>(defaultValues);

export default function CartsProvider({ children }: { children: ReactNode }) {
  const [productsCarts, setProductCart] = useState<cartType[]>([]);

  const setProductsCarts = (productCarts: cartType[]) => {
    localStorage.setItem("productsCarts", JSON.stringify(productCarts));
    setProductCart(productCarts);
  };

  useEffect(() => {
    const carts = localStorage.getItem("productsCarts");
    setProductCart(carts === null ? [] : JSON.parse(carts));
  }, []);

  return (
    <CartsContext.Provider value={{ productsCarts, setProductsCarts }}>
      {children}
    </CartsContext.Provider>
  );
}
