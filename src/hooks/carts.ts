import { CartsContext } from "@/contexts/CartsContext";
import { cartType } from "@/types/carts";
import { productType } from "@/types/products";
import { useContext } from "react";

export function useCarts() {
  const { productsCarts, setProductsCarts } = useContext(CartsContext);

  const addProductCart = (product: productType, size: string) => {
    const cartItem = productsCarts.find((item: cartType) => {
      return item.id === product.id && item.size === size;
    });

    if (cartItem) {
      const newCart = [...productsCarts].map((item) => {
        if (item.id === product.id)
          return { ...item, amount: cartItem.amount + 1 };
        else return item;
      });
      setProductsCarts(newCart);
    } else
      setProductsCarts([
        ...productsCarts,
        { ...product, amount: 1, size: size },
      ]);
  };

  const deleteOneProductCart = (id: number, size: string) => {
    const cartItem = productsCarts.find(
      (item: cartType) => item.id === id && item.size === size
    );
    if (cartItem) {
      const newCart = productsCarts.filter(
        (item: cartType) => item.id !== id || item.size !== size
      );
      setProductsCarts(newCart);
    }
  };

  const incrementAmount = (id: number) => {
    const cartItem = productsCarts.find((item: cartType) => item.id === id);
    if (cartItem) {
      const newCart = [...productsCarts].map((item) => {
        if (item.id === id) return { ...item, amount: cartItem.amount + 1 };
        else return item;
      });
      setProductsCarts(newCart);
    }
  };

  const decrementAmount = (id: number) => {
    const cartItem = productsCarts.find((item: cartType) => item.id === id);
    if (cartItem) {
      if (cartItem.amount <= 1) {
        deleteOneProductCart(id, cartItem.size);
        return;
      }
      const newCart = [...productsCarts].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount > 1 ? cartItem.amount - 1 : 1,
          };
        } else return item;
      });
      setProductsCarts(newCart);
    }
  };

  const setAmount = (id: number, amount: string) => {
    const cartItem = productsCarts.find((item: cartType) => item.id === id);
    if (cartItem) {
      if (parseInt(amount) < 0) {
        const n = parseInt(amount);
        const newCart = [...productsCarts].map((item) => {
          if (item.id === id) return { ...item, amount: Math.abs(n) };
          else return item;
        });
        setProductsCarts(newCart);
        return;
      }
      if (/[0-9]/.test(amount)) {
        const n = parseInt(amount);
        const newCart = [...productsCarts].map((item) => {
          if (item.id === id) return { ...item, amount: n > 100 ? 100 : n };
          else return item;
        });
        setProductsCarts(newCart);
      }
    }
  };

  return {
    productsCarts,
    setProductsCarts,
    addProductCart,
    deleteOneProductCart,
    incrementAmount,
    decrementAmount,
    setAmount,
  };
}
