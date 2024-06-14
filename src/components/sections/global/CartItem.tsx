import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCarts } from "@/hooks/carts";
import { cartType } from "@/types/carts";
import { Link } from "react-router-dom";

export default function CartItem({ item }: { item: cartType }) {
  const { id, image, title, amount, price } = item;
  const { deleteOneProductCart, incrementAmount, decrementAmount, setAmount } =
    useCarts();

  return (
    <Link to={`/product/${id}`}>
      <Card className="bg-muted rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 min-h-[260px]">
        <CardContent className="bg-background rounded-bl-[50px] rounded-br-[50px] border-gray-200 dark:border-gray-800">
          <div className="flex">
            <div className="w-2/5 p-4">
              <img
                src={image}
                alt="product amouts"
                className="object-content"
              />
            </div>
            <div className="w-3/5 pt-4 pr-4 space-y-3">
              <h2 className="text-base font-bold hover:underline">{title}</h2>
              <div className="flex flex-col tracking-normal">
                <p className="text-sm">Quantité: {amount}</p>
                <p className="text-sm">Size: XS</p>
              </div>
              <h5 className="pt-3 mt-3 border-t">€ {price * amount}</h5>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-muted">
          <div className="flex items-center justify-between w-full mt-2">
            <div className="flex items-center">
              <Button
                variant={"outline"}
                size={"icon"}
                onClick={() => decrementAmount(id)}
                className="border-none rounded-full"
              >
                -
              </Button>
              <input
                type="text"
                className="w-12 px-1 text-center outline-none border-none bg-transparent"
                value={amount}
                onChange={(e) => setAmount(id, e.target?.value)}
              />
              <Button
                variant={"outline"}
                size={"icon"}
                className="border-none rounded-full"
                onClick={() => incrementAmount(id)}
              >
                +
              </Button>
            </div>
            <Button
              variant={"primary"}
              onClick={() => deleteOneProductCart(id)}
            >
              Delete
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
