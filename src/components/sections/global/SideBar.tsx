import img from "@/assets/Rm-empty-bag.webp";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCarts } from "@/hooks/carts";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export function SideBar() {
  const { productsCarts } = useCarts();
  const totalPrice = productsCarts.reduce(
    (acc, curr) => acc + curr.price * curr.amount,
    0
  );

  // console.log(carts);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className="relative border-none"
        >
          {productsCarts.length > 0 && (
            <span className="absolute top-0 right-0 w-4 h-4 rounded-full flex items-center text-primary-foreground text-sm justify-center bg-red-500">
              {productsCarts.length}
            </span>
          )}
          <ShoppingCart className="text-muted-foreground" />
        </Button>
      </SheetTrigger>
      <SheetContent className="lg:rounded-tl-[50px] lg:rounded-bl-[50px] w-[100vw] max-w-[512px] overflow-hidden">
        <SheetHeader className="border-b pb-3 mx-3">
          <SheetTitle>
            Votre panniers{" "}
            {productsCarts.length > 0
              ? productsCarts.length === 1
                ? `| 1 product`
                : `| ${productsCarts.length} products`
              : ""}
          </SheetTitle>
        </SheetHeader>
        {productsCarts.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center gap-5 px-7 md:px-8">
            <h4>Votre pannier est vide</h4>
            <div>
              <img src={img} alt="" />
            </div>
            <Button variant={"primary"}>Continuer l'achats</Button>
          </div>
        ) : (
          <div className="mx-2 mt-3">
            <div className="flex flex-col overflow-y-auto gap-3 max-h-[100vh] h-full pb-[350px]">
              {productsCarts.map((item) => {
                return <CartItem item={item} key={item.id} />;
              })}
            </div>
            <div className="absolute w-full py-9 px-7 flex flex-col gap-y-3 right-0 bottom-0 bg-white">
              <div className="w-full mb-5 flex flex-col gap-1">
                <div className="w-full flex items-center justify-between">
                  <span className="text-base font-normal leading-tighter tracking-tight text-foreground">
                    Subtotal
                  </span>
                  <span className="text-base font-normal leading-tighter tracking-tight text-foreground">
                    € {totalPrice.toFixed(2)}
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
                <div className="w-full flex items-center justify-between mt-3 border-t">
                  <span className="leading-tighter tracking-tight text-foreground font-bold text-2xl">
                    Total
                  </span>
                  <span className="leading-tighter tracking-tight text-foreground font-bold text-2xl">
                    € {totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant={"secondary"}
                  className="py-7 border-none"
                  asChild
                >
                  <Link to={"#products"}>Continuer l'achat</Link>
                </Button>
                <Button variant={"primary"} className="py-7" asChild>
                  <Link to="/checkout">Checkout</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
