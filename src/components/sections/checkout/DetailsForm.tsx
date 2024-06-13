import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export default function DetailsForm() {
  return (
    <div className="rounded-3xl shadow-full-xl lg:p-7 p-5 flex flex-col gap-12">
      <div className="flex flex-col gap-7">
        <h2>Vos détails</h2>
        <div className="grid md:grid-col-2 grid-col-1 gap-3">
          <div className="relative w-full col-span-1 md:col-span-2 flex flex-1 md:grow-0">
            <Input
              type="text"
              placeholder="Nom complet"
              className="input-focus bg-muted border-none h-[56px] lg:h-[48px] text-inherit pr-16 pl-3 py-2 appearance-none w-full transition duration-150 ease-in-out focus:outline-none font-bold placeholder:font-normal focus:border-deep-purple-700 focus:ring-deep-purple-700 focus:ring-2 rounded-xl"
            />
            <span className="x flex-1 items-center justify-center w-full h-full cursor-pointer hidden">
              <X className="absolute right-2.5 top-2.5 h-6 w-6 text-input" />
            </span>
          </div>
          <div className="relative w-full flex flex-1 md:grow-0">
            <Input
              type="email"
              placeholder="Email"
              className="input-focus bg-muted border-none h-[56px] lg:h-[48px] text-inherit pr-16 pl-3 py-2 appearance-none w-full transition duration-150 ease-in-out focus:outline-none font-bold placeholder:font-normal focus:border-deep-purple-700 focus:ring-deep-purple-700 focus:ring-2 rounded-xl"
            />
            <span className="x flex-1 items-center justify-center w-full h-full cursor-pointer hidden">
              <X className="absolute right-2.5 top-2.5 h-6 w-6 text-input" />
            </span>
          </div>
          <div className="relative w-full flex flex-1 md:grow-0">
            <Input
              type="tel"
              placeholder="Téléphone"
              className="input-focus bg-muted border-none h-[56px] lg:h-[48px] text-inherit pr-16 pl-3 py-2 appearance-none w-full transition duration-150 ease-in-out focus:outline-none font-bold placeholder:font-normal focus:border-deep-purple-700 focus:ring-deep-purple-700 focus:ring-2 rounded-xl"
            />
            <span className="x flex-1 items-center justify-center w-full h-full cursor-pointer hidden">
              <X className="absolute right-2.5 top-2.5 h-6 w-6 text-input" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <h2>Adresse de livraison</h2>
        <div className="grid md:grid-col-2 grid-col-1 gap-3">
          <div className="relative w-full col-span-1 md:col-span-2 flex flex-1 md:grow-0">
            <Input
              type="text"
              placeholder="Pays*"
              className="input-focus bg-muted border-none h-[56px] lg:h-[48px] text-inherit pr-16 pl-3 py-2 appearance-none w-full transition duration-150 ease-in-out focus:outline-none font-bold placeholder:font-normal focus:border-deep-purple-700 focus:ring-deep-purple-700 focus:ring-2 rounded-xl"
            />
            <span className="x flex-1 items-center justify-center w-full h-full cursor-pointer hidden">
              <X className="absolute right-2.5 top-2.5 h-6 w-6 text-input" />
            </span>
          </div>
          <div className="relative w-full col-span-1 md:col-span-2 flex flex-1 md:grow-0">
            <Input
              type="text"
              placeholder="Adresse*"
              className="input-focus bg-muted border-none h-[56px] lg:h-[48px] text-inherit pr-16 pl-3 py-2 appearance-none w-full transition duration-150 ease-in-out focus:outline-none font-bold placeholder:font-normal focus:border-deep-purple-700 focus:ring-deep-purple-700 focus:ring-2 rounded-xl"
            />
            <span className="x flex-1 items-center justify-center w-full h-full cursor-pointer hidden">
              <X className="absolute right-2.5 top-2.5 h-6 w-6 text-input" />
            </span>
          </div>
          <div className="relative w-full col-span-1 md:col-span-2 flex flex-1 md:grow-0">
            <Input
              type="text"
              placeholder="Appartement, chambre etc. (facultatif)"
              className="input-focus bg-muted border-none h-[56px] lg:h-[48px] text-inherit pr-16 pl-3 py-2 appearance-none w-full transition duration-150 ease-in-out focus:outline-none font-bold placeholder:font-normal focus:border-deep-purple-700 focus:ring-deep-purple-700 focus:ring-2 rounded-xl"
            />
            <span className="x flex-1 items-center justify-center w-full h-full cursor-pointer hidden">
              <X className="absolute right-2.5 top-2.5 h-6 w-6 text-input" />
            </span>
          </div>
          <div className="relative w-full flex flex-1 md:grow-0">
            <Input
              type="email"
              placeholder="Code postal*"
              className="input-focus bg-muted border-none h-[56px] lg:h-[48px] text-inherit pr-16 pl-3 py-2 appearance-none w-full transition duration-150 ease-in-out focus:outline-none font-bold placeholder:font-normal focus:border-deep-purple-700 focus:ring-deep-purple-700 focus:ring-2 rounded-xl"
            />
            <span className="x flex-1 items-center justify-center w-full h-full cursor-pointer hidden">
              <X className="absolute right-2.5 top-2.5 h-6 w-6 text-input" />
            </span>
          </div>
          <div className="relative w-full flex flex-1 md:grow-0">
            <Input
              type="Ville*"
              placeholder="Ville*"
              className="input-focus bg-muted border-none h-[56px] lg:h-[48px] text-inherit pr-16 pl-3 py-2 appearance-none w-full transition duration-150 ease-in-out focus:outline-none font-bold placeholder:font-normal focus:border-deep-purple-700 focus:ring-deep-purple-700 focus:ring-2 rounded-xl"
            />
            <span className="x flex-1 items-center justify-center w-full h-full cursor-pointer hidden">
              <X className="absolute right-2.5 top-2.5 h-6 w-6 text-input" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-5 mx-3">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Vous acceptez de recevoir des communications du Real Madrid, y compris
          des informations sur leurs produits, services et activités, ainsi que
          de leurs sponsors et partenaires, y compris la boutique en ligne.You
          can exercise your data protection rights at
          oposicion@corp.realmadrid.com
        </label>
      </div>
      <Button variant={"primary"} size={"lg"} className="ml-auto rounded-2xl">
        Continuer vers la livraison
      </Button>
    </div>
  );
}
