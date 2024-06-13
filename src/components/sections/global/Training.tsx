import img from "@/assets/nav-menu-training.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Training() {
  const categories = {
    mens: [
      "Survêtements",
      "Sweats",
      "Vestes",
      "T-shirts",
      "Pantalons",
      "Tout voir",
    ],
    womens: [
      "Survêtements",
      "Sweats",
      "Vestes",
      "T-shirts",
      "Pantalons",
      "Tout voir",
    ],
    kids: [
      "Survêtements",
      "Sweats",
      "Vestes",
      "T-shirts",
      "Pantalons",
      "Tout voir",
    ],
    Collections: ["Entraînement", "Warm Up", "DNA", "Real Urban", "Tout voir"],
  };

  return (
    <div className="absolute top-full w-[100vw] left-0 hidden group-hover:block px-16 py-8 bg-background shadow-xl">
      <div className="flex gap-5">
        <div className="w-[35%] flex gap-5">
          <div className="w-1/2">
            <div className="grid border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-2 mx-4">
              <Link
                to={"/"}
                className="text-left cursor-pointer normal-case w-full h-full rounded-sm xl:text-lg text-base font-bold"
              >
                Équipe masculine
              </Link>
            </div>
            <Categories categories={categories.mens} />
          </div>
          <div className="w-1/2">
            <div className="grid border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-2 mx-4">
              <Link
                to={"/"}
                className="text-left cursor-pointer normal-case w-full h-full rounded-sm xl:text-lg text-base font-bold"
              >
                Équipe feminine
              </Link>
            </div>
            <Categories categories={categories.womens} />
          </div>
        </div>
        <div className="w-[35%] flex gap-5">
          <div className="w-1/2">
            <div className="grid border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-2 mx-4">
              <Link
                to={"/"}
                className="text-left cursor-pointer normal-case w-full h-full rounded-sm xl:text-lg text-base font-bold"
              >
                Enfants
              </Link>
            </div>
            <Categories categories={categories.kids} />
          </div>
          <div className="w-1/2">
            <div className="grid border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-2 mx-4">
              <Link
                to={"/"}
                className="text-left cursor-pointer normal-case w-full h-full rounded-sm xl:text-lg text-base font-bold"
              >
                Collections
              </Link>
            </div>
            <Categories categories={categories.Collections} />
          </div>
        </div>
        <div className="w-[30%] relative flex items-center">
          <img className="w-full rounded-xl" src={img} alt="kroos" />
          <div className="absolute bg-card/50 w-auto sm:px-0 sm:pb-0 ml-8 max-w-[70%] shadow-lg rounded-xl md:p-6 p-4 grid justify-items-start items-center md:items-start text-start">
            <h1 className="text-2xl md:text-4xl mb-7 font-bold text-card-foreground">
              Entrainement 24/25
            </h1>
            <Button variant={"primary"} size={"lg"}>
              Acheter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Categories({ categories }: { categories: string[] }) {
  return (
    <div className="w-full flex flex-col items-start">
      {categories.map((category, i) => (
        <Link
          key={i}
          to={"/"}
          className="transition-all hover:bg-[#8760f6]/20 hover:text-[#8760f6] border-none rounded-sm font-semibold text-start normal-case text-sm xl:text-base text-gray-400 dark:text-gray-600 px-4 py-2"
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
