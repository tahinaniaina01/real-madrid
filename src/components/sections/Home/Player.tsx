import { Button } from "@/components/ui/button";
import { playerType } from "@/types/players";

export default function Player({ player }: { player: playerType }) {
  const { number, name, imageDesktop, imageMobile } = player;

  return (
    <div className="w-full h-full rounded relative flex justify-center sm:aspect-[5/7] aspect-square first:lg:ml-12">
      <div className="w-full h-full sm:flex hidden">
        <img
          className="object-cover rounded-xl sm:w-auto w-full h-full"
          src={imageDesktop}
          alt={name}
        />
      </div>
      <div className="sm:hidden w-full h-full">
        <img
          className="object-cover rounded-xl sm:w-auto w-full h-full"
          src={imageMobile}
          alt={name}
        />
      </div>
      <div className="rounded-xl absolute w-[90%] sm:h-[80px] sm:bottom-8 bottom-4 z-[1] bg-background flex sm:flex-row flex-col justify-between p-4 items-center sm:min-h-fit min-h-32">
        <p className="font-bold text-2xl text-center sm:text-start pb-1 text-[#000c]">
          #{number} {name}
        </p>
        <Button variant={"primary"}>Acheter</Button>
      </div>
    </div>
  );
}
