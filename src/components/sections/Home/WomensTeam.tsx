import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import datas from "@/data/players.json";
import { playerType } from "@/types/players";
import Player from "./Player";

export default function WomensTeam() {
  const players = datas.filter((data) => data.gender === "women");

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {players.map((player: playerType, index: number) => {
          return (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <Player player={player} />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
