import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateYourOwn from "./CreateYourOwn";
import MensTeam from "./MensTeam";
import WomensTeam from "./WomensTeam";

export default function ShopByPlayer() {
  return (
    <section className="py-12 bg-gradient-top">
      <div className="text-white">
        <h1 className="block text-center mb-12 lg:text-6xl xl:text-7xl leading-tighter text-inherit text-4xl leading-8 font-bold tracking-tight text-white data-[state=active]:border-ring">
          Acheter par joueur
        </h1>
        <Tabs defaultValue="mensTeam" className="w-full">
          <TabsList className="bg-transparent w-full flex items-center justify-center mb-12 gap-3">
            <TabsTrigger
              className="align-middle select-none text-foreground text-center transition-all py-3 px-6 rounded-full min-w-fit font-normal text-base border border-muted-foreground border-white"
              value="mensTeam"
            >
              Équipe masculine
            </TabsTrigger>
            <TabsTrigger
              className="align-middle select-none text-foreground text-center transition-all py-3 px-6 rounded-full min-w-fit font-normal text-base border border-muted-foreground border-white"
              value="womensTeam"
            >
              Équipe féminine
            </TabsTrigger>
          </TabsList>
          <TabsContent className="w-full min-h-[500px]" value="mensTeam">
            <MensTeam />
          </TabsContent>
          <TabsContent value="womensTeam">
            <WomensTeam />
          </TabsContent>
        </Tabs>
      </div>
      <CreateYourOwn />
    </section>
  );
}
