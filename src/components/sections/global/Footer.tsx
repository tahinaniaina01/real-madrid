import app3 from "@/assets/Huawei_Store_Badge.webp";
import twitter from "@/assets/X.svg";
import fb from "@/assets/_Facebook.svg";
import insta from "@/assets/_Instagram.svg";
import logo from "@/assets/_Logo_RM_Master.webp";
import snap from "@/assets/_Snap.svg";
import tiktok from "@/assets/_Tiktok.svg";
import twitch from "@/assets/_Twitch.svg";
import youtube from "@/assets/_YouTube.svg";
import pay1 from "@/assets/amex.svg";
import pay2 from "@/assets/applePay.svg";
import pay3 from "@/assets/dinersClub.svg";
import pay4 from "@/assets/discover.svg";
import pay5 from "@/assets/googlePay.svg";
import app1 from "@/assets/ios.svg";
import pay6 from "@/assets/maestro.svg";
import pay7 from "@/assets/mastercard.svg";
import app2 from "@/assets/play.svg";
import pay8 from "@/assets/unionPay.svg";
import pay9 from "@/assets/visa.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const payments = [pay1, pay2, pay3, pay4, pay5, pay6, pay7, pay8, pay9];
  const socialNetworks = [twitter, fb, insta, snap, tiktok, youtube, twitch];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="px-8 mx-auto">
        <div className="hidden px-8 pt-16 pb-7 desktop-menu justify-around md:flex w-full">
          <div>
            <h4 className="block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit font-bold">
              Acheter
            </h4>
            <ul className="mt-1 space-y-1">
              <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                Comment Commander
              </li>
              <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                Livraisons & Retours
              </li>
              <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                Suivre ma Commande
              </li>
              <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                Mon Compte
              </li>
              <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                Localisateur de Boutique
              </li>
            </ul>
          </div>
          <div>
            <h4 className="block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit font-bold">
              À propos
            </h4>
            <ul className="mt-1 space-y-1">
              <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                Politique de confidentialité
              </li>
              <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                Politique de cookies
              </li>
              <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                Conditions d'utilisation
              </li>
            </ul>
          </div>
          <div>
            <h4 className="block antialiased tracking-normal font-sans text-base leading-relaxed text-inherit font-bold">
              Vous avez besoin d'aide ?
            </h4>
            <ul className="mt-1 space-y-1">
              <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                Nous contacter
              </li>
              <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>
          <div className="justify-items-start bg-gray-900 rounded-2xl lg:w-max p-8 font-bold ">
            <p className="antialiased font-primary text-base leading-tighter tracking-tight text-inherit font-semibold">
              Inscrivez-vous pour devenir un "Madridista
            </p>
            <p className="block antialiased text-base md:text-base leading-relaxed text-inherit py-2 pb-4 font-semibold font-primary">
              recever 5% de réduction sur votre première achat
            </p>
            <Button
              variant={"secondary"}
              className="rounded-xl text-ring w-full"
            >
              Incrire maintenant
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:hidden gap-12 pt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Acheter</AccordionTrigger>
              <AccordionContent>
                <ul className="mt-1 space-y-1">
                  <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                    Comment Commander
                  </li>
                  <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                    Livraisons & Retours
                  </li>
                  <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                    Suivre ma Commande
                  </li>
                  <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                    Mon Compte
                  </li>
                  <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                    Localisateur de Boutique
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>À propos</AccordionTrigger>
              <AccordionContent>
                <ul className="mt-1 space-y-1">
                  <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                    Politique de confidentialité
                  </li>
                  <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                    Politique de cookies
                  </li>
                  <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                    Conditions d'utilisation
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Vous avez besoin d'aide ?</AccordionTrigger>
              <AccordionContent>
                <ul className="mt-1 space-y-1">
                  <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                    Nous contacter
                  </li>
                  <li className="text-sm text-white opacity-75 hover:underline me-8 cursor-pointer">
                    FAQ
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="justify-items-start bg-gray-900 rounded-2xl lg:w-max p-8 font-bold ">
            <p className="text-base tracking-tight text-inherit font-semibold">
              Inscrivez-vous pour devenir un "Madridista
            </p>
            <p className="block antialiased text-base md:text-base leading-relaxed text-inherit py-2 pb-4 font-semibold font-primary">
              recever 5% de réduction sur votre première achat
            </p>
            <Button
              variant={"secondary"}
              className="rounded-xl text-ring w-full"
            >
              Incrire maintenant
            </Button>
          </div>
        </div>
        <p className="font-normal tracking-tight text-inherit text-md hidden md:flex flex-row justify-center">
          Télécharger l'application dès maintenant
        </p>
        <div className="w-full flex flex-col-reverse md:flex-col">
          <div className="flex flex-row flex-wrap justify-center items-center pt-4 gap-3 pb-5 md:pb-3 mt-5">
            <a href="">
              <img src={app1} alt="apple store" />
            </a>
            <a href="">
              <img src={app2} alt="google play" />
            </a>
            <a href="">
              <img src={app3} alt="huawei app gallery" />
            </a>
          </div>
          <div className="px-4 md:px-14 space-y-2">
            <p className="tracking-tight text-inherit text-base justify-start text-center sm:text-start sm:text-lg font-bold pl-1 py-2 sm:pb-0">
              Paiement accepté
            </p>
            <div className="flex items-center gap-1 flex-wrap">
              {payments.map((payment, index) => (
                <img
                  key={index}
                  src={payment}
                  alt="payment method"
                  width="38"
                  height="28"
                />
              ))}
            </div>
          </div>
          <div className="px-4 md:px-14">
            <div className="my-7 flex flex-col-reverse md:flex-row w-full py-5 px-2 border-t md:border-b space-x-6 items-center justify-between">
              <div>
                <img src={logo} alt="logo RM" />
              </div>
              <div className="flex flex-wrap gap-5 mr-8">
                {socialNetworks.map((socialNetwork, index) => (
                  <img
                    key={index}
                    src={socialNetwork}
                    alt="social network"
                    width="24"
                    height="24"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-14">
          <p className="text-xs w-full text-center md:text-start pb-8">
            Real Madrid CF Shop © 2024 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
