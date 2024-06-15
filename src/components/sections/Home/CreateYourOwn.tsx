import img from "@/assets/authentic-mens.webp";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import datas from "@/data/products.json";
import { useCarts } from "@/hooks/carts";
import { useState } from "react";

export default function CreateYourOwn() {
  const { addProductCart } = useCarts();
  const [size, setSize] = useState(datas[0].size[0]);

  return (
    <div className="w-full flex flex-col justify-center items-center my-12">
      <h1 className="font-primary lg:text-6xl xl:text-7xl text-4xl font-bold tracking-tight my-12 text-white text-center">
        Personnalisez votre maillot
      </h1>
      <div className="w-full max-w-screen-xl">
        <div className="relative grid grid-cols-1 items-start gap-4 min-h-auto mx-auto md:grid-cols-2 md:rounded-xl md:bg-background">
          <div className="relative px-0 pb-0 box-border flex flex-col col-span-1 z-0 md:py-6 md:ps-6 md:h-full md:pe-4">
            <img src={img} alt="" />
          </div>
          <div className="flex flex-col col-span-1 mx-auto w-full h-full z-[2] bg-background md:bg-transparent rounded-xl md:rounded-none p-6 md:pe-6 md:ps-4 justify-between gap-12">
            <div className="space-y-5">
              <div className="w-full">
                <h3 className="tracking-tighter text-inherit pb-5 font-normal text-2xl md:text-3xl xl:text-4xl">
                  Maillot Home Authentic 24/25 Blanc
                </h3>
                <div className="w-full flex flex-col items-start gap-1">
                  <p>150.00 €</p>
                  <span>Taxes incluses</span>
                </div>
              </div>
              <div>
                <h3 className="font-primary text-base font-bold leading-relaxed tracking-normal mb-2 mt-1">
                  Size
                </h3>
                <ToggleGroup
                  type="single"
                  defaultValue={size}
                  onValueChange={(value) => setSize(value)}
                  variant="outline"
                  className="w-full flex flex-row sm:flex-wrap justify-start"
                >
                  {datas[0].size.map((element, i) => {
                    return (
                      <ToggleGroupItem
                        key={i}
                        value={element}
                        className="border-muted-foreground rounded-full py-1 px-4 h-auto w-auto"
                      >
                        {element}
                      </ToggleGroupItem>
                    );
                  })}
                </ToggleGroup>
              </div>
              <div>
                <h3 className="font-primary text-base font-bold leading-relaxed tracking-normal mb-2 mt-1">
                  Badge
                </h3>
                <ToggleGroup
                  type="single"
                  defaultValue="none"
                  variant="outline"
                  className="w-full flex flex-row sm:flex-wrap justify-start"
                >
                  <ToggleGroupItem
                    value="none"
                    className="border-muted-foreground rounded-full py-1 px-4 h-auto w-auto"
                  >
                    Aucun
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <h3 className="font-primary text-base font-bold leading-relaxed tracking-normal mb-2 mt-1">
                  Nom et numéro
                </h3>
                <ToggleGroup
                  type="single"
                  defaultValue="none"
                  variant="outline"
                  className="w-full flex flex-row sm:flex-wrap justify-start"
                >
                  <ToggleGroupItem
                    value="none"
                    className="border-muted-foreground rounded-full py-1 px-4 h-auto w-auto"
                  >
                    Aucun
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
            <div className="w-full">
              <Button
                variant={"primary"}
                size={"xl"}
                onClick={() => addProductCart(datas[0], size)}
                className="w-full py-3 px-6 rounded-xl"
              >
                Ajouter au panier
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
