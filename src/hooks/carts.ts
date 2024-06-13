import { CartsContext } from "@/contexts/CartsContext";
import { productType } from "@/types/products";
import { useContext } from "react";

export function useCarts() {
  const { productsCarts, setProductsCarts } = useContext(CartsContext);

  const addProductCart = (product: productType, id: number) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = productsCarts.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...productsCarts].map((item) => {
        if (item.id === id) return { ...item, amount: cartItem.amount + 1 };
        else return item;
      });
      setProductsCarts(newCart);
    } else setProductsCarts([...productsCarts, { ...newItem, size: "XS" }]);
  };

  const deleteOneProductCart = (id: number) => {
    const cartItem = productsCarts.find((item) => item.id === id);
    if (cartItem) {
      const newCart = productsCarts.filter((item) => item.id !== id);
      setProductsCarts(newCart);
    }
  };

  const incrementAmount = (id: number) => {
    const cartItem = productsCarts.find((item) => item.id === id);
    if (cartItem) {
      const newCart = [...productsCarts].map((item) => {
        if (item.id === id) return { ...item, amount: cartItem.amount + 1 };
        else return item;
      });
      setProductsCarts(newCart);
    }
  };

  const decrementAmount = (id: number) => {
    const cartItem = productsCarts.find((item) => item.id === id);
    if (cartItem) {
      if (cartItem.amount <= 1) {
        deleteOneProductCart(id);
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
    const cartItem = productsCarts.find((item) => item.id === id);
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
