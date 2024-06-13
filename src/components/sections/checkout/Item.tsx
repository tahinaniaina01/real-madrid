import { Card, CardContent } from "@/components/ui/card";
import { useCarts } from "@/hooks/carts";
import { cartType } from "@/types/carts";

export default function Item({ item }: { item: cartType }) {
  const { image, title, amount, price } = item;
  useCarts();

  return (
    <Card className="bg-muted rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 min-h-[150px]">
      <CardContent className="bg-background border-gray-200 dark:border-gray-800">
        <div className="flex items-center">
          <div className="w-[30%] p-4">
            <img src={image} alt="product amouts" className="object-content" />
          </div>
          <div className="w-[70%] pt-4 pr-4 space-y-3">
            <h2 className="text-base font-bold hover:underline">{title}</h2>
            <div className="flex flex-col tracking-normal">
              <p className="text-sm">Quantité: {amount}</p>
              <p className="text-sm">Size: XS</p>
            </div>
            <h5 className="pt-3 mt-3 border-t">€ {price * amount}</h5>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
