import krossBg from "@/assets/FWB_BACKGROUND.webp";
import ldcBg from "@/assets/FWB_BACKGROUND__1_.webp";
import krossSm from "@/assets/FWB_OVER.webp";
import ldcSm from "@/assets/FWB_OVER__1_.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <>
      <section className="relative min-h-fit">
        <div>
          <img
            src={ldcBg}
            className="w-[100vw] min-h-full h-full object-top block !absolute object-cover z-0 top-0 bottom-0 right-0 left-0"
            alt="image ldc"
          />
        </div>
        <div className="w-full h-full py-8 px-6 flex justify-center items-center sm:p-16">
          <div className="grid sm:flex justify-items-center sm:justify-center items-center w-full mx-auto relative z-20">
            <div className="w-full max-w-3xl px-6 shadow-lg rounded-xl md:p-8 p-6 grid relative justify-items-start items-center md:items-start text-start backdrop-blur bg-card">
              <h1 className="text-2xl md:text-4xl font-bold mb-7">
                Vainqueur de l'UCL
              </h1>
              <Button variant={"primary"} size={"lg"} asChild>
                <Link to={"/products/champions-league"}>Acheter</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden sm:mb-0 -mb-10 order-first w-full max-w-fit sm:-me-16 lg:translate-x-1/4">
            <img
              className="rounded-xl sm:block hidden z-10 relative"
              width="680"
              height="380"
              src={ldcSm}
              alt="image ldc"
            />
          </div>
        </div>
      </section>
      <section className="relative min-h-fit">
        <div>
          <img
            src={krossBg}
            className="w-[100vw] min-h-full h-full object-top block !absolute object-cover z-0 top-0 bottom-0 right-0 left-0"
            alt="image ldc"
          />
        </div>
        <div className="w-full h-full py-8 px-6 flex justify-center items-center sm:p-16">
          <div className="grid sm:flex justify-items-center sm:justify-center items-center w-full mx-auto relative z-20">
            <div className="w-full max-w-3xl px-6 shadow-xl rounded-xl md:p-8 p-6 grid relative justify-items-start items-center md:items-start text-start backdrop-blur bg-card">
              <h1 className="text-2xl md:text-4xl font-bold mb-7">
                Toni Kroos
              </h1>
              <Button variant={"primary"} size={"lg"}>
                Acheter
              </Button>
            </div>
          </div>
          <div className="overflow-hidden sm:mb-0 -mb-10 w-full max-w-fit sm:-me-16 lg:-translate-x-[30%] -translate-x-[20%]">
            <img
              className="rounded-xl sm:block hidden z-10 relative"
              width="680"
              height="380"
              src={krossSm}
              alt="image ldc"
            />
          </div>
        </div>
      </section>
    </>
  );
}
