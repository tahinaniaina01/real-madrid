import { cartType } from "@/types/carts";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type cartsContextType = {
  productsCarts: cartType[];
  setProductsCarts: Dispatch<SetStateAction<cartType[]>>;
};

const defaultValues = {
  productsCarts: [],
  setProductsCarts: () => {},
};

export const CartsContext = createContext<cartsContextType>(defaultValues);

export default function CartsProvider({ children }: { children: ReactNode }) {
  const [productsCarts, setProductsCarts] = useState<cartType[]>([]);

  return (
    <CartsContext.Provider value={{ productsCarts, setProductsCarts }}>
      {children}
    </CartsContext.Provider>
  );
}
