import img from "@/assets/FWB_OVER.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ShopByPlayer() {
  const players = {
    mens: [
      [
        "Courtois",
        "Carvajal",
        "E.Militao",
        "Rüdiger",
        "Nacho",
        "Arda Bûler",
        "Bellingham",
        "Modric",
      ],
      [
        "Camavinga",
        "Tchouameni",
        "Valverde",
        "Joselu",
        "Vini Jr.",
        "Rodrigo",
        "Brahim",
      ],
    ],
    womens: [
      ["Misa", "K.Robles", "Rocio", "Olga", "Ivana", "Svava", "Teresa", "Weir"],
      [
        "Raso",
        "Linda c.",
        "Athenea",
        "Kathellen",
        "Freja",
        "Siri",
        "Toletti",
        "Bruun",
        "Feller",
      ],
    ],
  };

  return (
    <div className="absolute top-full w-[100vw] left-0 hidden group-hover:block px-16 py-8 bg-background shadow-xl">
      <div className="flex gap-5">
        <div className="w-[35%]">
          <div className="grid border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-2 mx-4">
            <Link
              to={"/"}
              className="text-left cursor-pointer normal-case w-full h-full rounded-sm xl:text-lg text-base font-bold"
            >
              Équipe masculine
            </Link>
          </div>
          <div className="w-full grid grid-cols-2 gap-3">
            <div className="flex flex-col items-start">
              {players.mens[0].map((player, i) => (
                <Link
                  key={i}
                  to={"/"}
                  className="transition-all hover:bg-[#8760f6]/20 hover:text-[#8760f6] border-none rounded-sm font-semibold text-start normal-case text-sm xl:text-base text-gray-400 dark:text-gray-600 px-4 py-2"
                >
                  {player}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start">
              {players.mens[1].map((player, i) => (
                <Link
                  key={i}
                  to={"/"}
                  className="transition-all hover:bg-[#8760f6]/20 hover:text-[#8760f6] border-none rounded-sm font-semibold text-start normal-case text-sm xl:text-base text-gray-400 dark:text-gray-600 px-4 py-2"
                >
                  {player}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[35%]">
          <div className="grid border-b-2  border-gray-200 dark:border-gray-700 pb-2 mb-2 mx-4">
            <Link
              to={"/"}
              className="text-left cursor-pointer normal-case w-full h-full rounded-sm xl:text-lg text-base font-bold"
            >
              Équipe feminine
            </Link>
          </div>
          <div className="w-full grid grid-cols-2 gap-3">
            <div className="flex flex-col items-start">
              {players.womens[0].map((player, i) => (
                <Link
                  key={i}
                  to={"/"}
                  className="transition-all hover:bg-[#8760f6]/20 hover:text-[#8760f6] border-none rounded-sm font-semibold text-start normal-case text-sm xl:text-base text-gray-400 dark:text-gray-600 px-4 py-2"
                >
                  {player}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start">
              {players.womens[1].map((player, i) => (
                <Link
                  key={i}
                  to={"/"}
                  className="transition-all hover:bg-[#8760f6]/20 hover:text-[#8760f6] border-none rounded-sm font-semibold text-start normal-case text-sm xl:text-base text-gray-400 dark:text-gray-600 px-4 py-2"
                >
                  {player}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[30%] relative flex items-center">
          <img className="w-full rounded-xl" src={img} alt="kroos" />
          <div className="absolute bg-card/50 w-auto sm:px-0 sm:pb-0 ml-8 max-w-[70%] shadow-lg rounded-xl md:p-6 p-4 grid justify-items-start items-center md:items-start text-start">
            <h1 className="text-2xl md:text-4xl mb-7 font-bold text-card-foreground">
              Toni Kroos
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
