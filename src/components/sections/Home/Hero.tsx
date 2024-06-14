import imgDesktop from "@/assets/hero_banner_desktop_1__1_.webp";
import imgMobile from "@/assets/hero_banner_mobile__2_.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="">
      <div className="relative flex items-end md:items-center justify-center md:justify-start">
        <div className="w-full h-auto md:mt-[185px] mt-[200px] flex items-center justify-center">
          <img
            className="w-full min-h-[720px] hidden md:block !relative object-cover"
            src={imgDesktop}
            alt="Desktop Hero Header Image"
          />
          <img
            className="w-full max-h-[550px] object-top block md:hidden !relative object-cover"
            src={imgMobile}
            alt="Mobile Hero Header Image"
          />
        </div>
        <div className="absolute m-5 lg:ml-12 bg-muted/70 rounded-2xl w-full max-w-[400px] p-6 flex flex-col gap-7 items-start text-[#000c]">
          <h1 className="text-3xl md:text-7xl font-bold">Nouveau kit 24/25</h1>
          <p>¡Hala Madrid y nada más!</p>
          <Button
            variant={"primary"}
            size={"lg"}
            className="rounded-xl font-normal text-xl"
            asChild
          >
            <Link to={"/products/home-kit-24-25"}>Acheter</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
