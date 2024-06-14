import category1 from "@/assets/HOME__1_.webp";
import category3 from "@/assets/PORTERO__1_.webp";
import category2 from "@/assets/pod_-_ss24__1_.webp";
import category4 from "@/assets/pod_anthem__1_.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <section className="mt-24 mb-48">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-12">
        <div className="w-full h-full rounded relative flex justify-center">
          <div className="w-full">
            <img
              className="object-cover aspect-auto rounded-2xl overflow-hidden md:h-[642px] md:w-[640px] h-auto w-full"
              src={category1}
              alt=""
            />
          </div>
          <div className="absolute bottom-5 left-5 w-auto max-w-[90%] shadow-lg rounded-xl md:p-8 md:pr-12 p-6 grid justify-items-start items-center md:items-end text-start backdrop-blur bg-card">
            <h1 className="text-2xl md:text-5xl mb-7">Maillot 24/25</h1>
            <Button variant={"primary"} size={"lg"} asChild>
              <Link to={"/products/home-kit-24-25"}>Acheter</Link>
            </Button>
          </div>
        </div>
        <div className="w-full h-full rounded relative flex justify-center md:translate-y-24">
          <div className="w-full">
            <img
              className="object-cover aspect-auto rounded-2xl overflow-hidden md:h-[642px] md:w-[640px] h-auto w-full"
              src={category2}
              alt=""
            />
          </div>
          <div className="absolute bg-accent bottom-5 left-5 w-auto max-w-[90%] text-white shadow-lg rounded-xl md:p-8 md:pr-12 p-6 grid justify-items-start items-center md:items-end text-start backdrop-blur">
            <h1 className="text-2xl md:text-5xl mb-7">Entraînement 24/25</h1>
            <Button variant={"primary"} size={"lg"} asChild>
              <Link to={"/products/training-24-25"}>Acheter</Link>
            </Button>
          </div>
        </div>
        <div className="w-full h-full rounded relative flex justify-center">
          <div className="w-full h-full">
            <img
              className="object-cover aspect-auto rounded-2xl overflow-hidden md:h-[642px] md:w-[640px] h-auto w-full"
              src={category3}
              alt=""
            />
          </div>
          <div className="absolute bg-accent bottom-5 left-5 w-auto max-w-[90%] text-white shadow-lg rounded-xl md:p-8 md:pr-12 p-6 grid justify-items-start items-center md:items-start text-start backdrop-blur">
            <h1 className="text-2xl md:text-5xl mb-7">Gardient 24/25</h1>
            <Button variant={"primary"} size={"lg"} asChild>
              <Link to={"/products/goalkeeper-kit-24-25"}>Acheter</Link>
            </Button>
          </div>
        </div>
        <div className="w-full h-full rounded relative flex justify-center md:translate-y-24">
          <div className="w-full h-full">
            <img
              className="object-cover aspect-auto rounded-2xl overflow-hidden md:h-[642px] md:w-[640px] h-auto w-full"
              src={category4}
              alt=""
            />
          </div>
          <div className="absolute bottom-5 left-5 w-auto max-w-[90%] shadow-lg rounded-xl md:p-8 md:pr-12 p-6 grid justify-items-start items-center md:items-start text-start backdrop-blur bg-card">
            <h1 className="text-2xl md:text-5xl mb-7">
              Collection avant match 24/25
            </h1>
            <Button variant={"primary"} size={"lg"} asChild>
              <Link to={"/products/training-24-25"}>Acheter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
