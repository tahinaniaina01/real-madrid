import category1 from "@/assets/HOME__1_.webp";
import category3 from "@/assets/PORTERO__1_.webp";
import category2 from "@/assets/pod_-_ss24__1_.webp";
import category4 from "@/assets/pod_anthem__1_.webp";
import { Button } from "@/components/ui/button";

export default function Category() {
  return (
    <section className="mt-24 mb-48">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-12">
        <div className="w-full h-full rounded relative flex justify-center">
          <div className="w-full">
            <img
              className="object-cover aspect-auto rounded-2xl overflow-hidden md:h-[642px] md:w-[640px] h-80 w-80"
              src={category1}
              alt=""
            />
          </div>
          <div className="absolute bottom-5 left-5 w-auto sm:px-0 sm:pb-0 max-w-[90%] shadow-lg rounded-xl md:p-8 md:pr-12 p-6 grid justify-items-start items-center md:items-start text-start backdrop-blur bg-card">
            <h1 className="text-2xl md:text-5xl mb-7">Maillot 24/25</h1>
            <Button variant={"primary"} size={"lg"}>
              Acheter
            </Button>
          </div>
        </div>
        <div className="w-full h-full rounded relative flex justify-center md:translate-y-24">
          <div className="w-full">
            <img
              className="object-cover aspect-auto rounded-2xl overflow-hidden md:h-[642px] md:w-[640px] h-80 w-80"
              src={category2}
              alt=""
            />
          </div>
          <div className="absolute bg-accent bottom-5 left-5 w-auto sm:px-0 sm:pb-0 max-w-[90%] shadow-lg rounded-xl md:p-8 md:pr-12 p-6 grid justify-items-start items-center md:items-start text-start backdrop-blur">
            <h1 className="text-2xl md:text-5xl mb-7">Maillot 24/25</h1>
            <Button variant={"primary"} size={"lg"}>
              Acheter
            </Button>
          </div>
        </div>
        <div className="w-full h-full rounded relative flex justify-center">
          <div className="w-full h-full">
            <img
              className="object-cover aspect-auto rounded-2xl overflow-hidden md:h-[642px] md:w-[640px] h-80 w-80"
              src={category3}
              alt=""
            />
          </div>
          <div className="absolute bg-accent bottom-5 left-5 w-auto sm:px-0 sm:pb-0 max-w-[90%] shadow-lg rounded-xl md:p-8 md:pr-12 p-6 grid justify-items-start items-center md:items-start text-start backdrop-blur">
            <h1 className="text-2xl md:text-5xl mb-7">Maillot 24/25</h1>
            <Button variant={"primary"} size={"lg"}>
              Acheter
            </Button>
          </div>
        </div>
        <div className="w-full h-full rounded relative flex justify-center md:translate-y-24">
          <div className="w-full h-full">
            <img
              className="object-cover aspect-auto rounded-2xl overflow-hidden md:h-[642px] md:w-[640px] h-80 w-80"
              src={category4}
              alt=""
            />
          </div>
          <div className="absolute bottom-5 left-5 w-auto sm:px-0 sm:pb-0 max-w-[90%] shadow-lg rounded-xl md:p-8 md:pr-12 p-6 grid justify-items-start items-center md:items-start text-start backdrop-blur bg-card">
            <h1 className="text-2xl md:text-5xl mb-7">Maillot 24/25</h1>
            <Button variant={"primary"} size={"lg"}>
              Acheter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
