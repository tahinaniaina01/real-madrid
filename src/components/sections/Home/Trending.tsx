import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Products } from "./Products";

export default function Trending() {
  return (
    <section id="products" className="my-12">
      <div className="xl:max-w-screen-2xl container">
        <h1 className="block antialiased font-primary text-center mb-12 lg:text-6xl xl:text-7xl leading-tighter text-white text-4xl leading-8 font-bold tracking-tight">
          Tendance actuelle
        </h1>
        <Tabs defaultValue="homeKit" className="w-full">
          <TabsList className="bg-transparent w-full flex items-center justify-center mb-12 gap-3">
            <TabsTrigger
              className="align-middle select-none font-sans text-center transition-all md:py-3 py-1 px-3 md:px-6 rounded-full min-w-fit font-normal text-base border border-muted-foreground text-deep-purple-700 border-deep-purple-700"
              value="homeKit"
            >
              Maillot 24/25
            </TabsTrigger>
            <TabsTrigger
              className="align-middle select-none font-sans text-center transition-all md:py-3 py-1 px-3 md:px-6 rounded-full min-w-fit font-normal text-base border border-muted-foreground text-deep-purple-700 border-deep-purple-700"
              value="dna"
            >
              DNA
            </TabsTrigger>
            <TabsTrigger
              className="align-middle select-none font-sans text-center transition-all md:py-3 py-1 px-3 md:px-6 rounded-full min-w-fit font-normal text-base border border-muted-foreground text-deep-purple-700 border-deep-purple-700"
              value="ucl"
            >
              Campeones 15a
            </TabsTrigger>
          </TabsList>
          <TabsContent className="w-full min-h-[500px]" value="homeKit">
            <Products productType="Home Kit 24/25" />
          </TabsContent>
          <TabsContent value="dna">
            <Products productType="DNA" />
          </TabsContent>
          <TabsContent value="ucl">
            <Products productType="UCL" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
