import MensTeam from "@/components/sections/Home/MensTeam";
import WomensTeam from "@/components/sections/Home/WomensTeam";
import Hero from "@/components/sections/ShopByPlayer/Hero";
import Footer from "@/components/sections/global/Footer";
import Header from "@/components/sections/global/Header";

export default function ShopByPlayer() {
  return (
    <>
      <Header />
      <main className="bg-gradient-muted">
        <Hero />
        <div className="my-12">
          <h1 className="block text-center mb-12 lg:text-6xl xl:text-7xl leading-tighter text-inherit text-4xl leading-8 font-bold tracking-tight data-[state=active]:border-ring">
            Joueurs masculine
          </h1>
          <MensTeam />
        </div>
        <div className="my-12 md:my-24">
          <h1 className="block text-center mb-12 lg:text-6xl xl:text-7xl leading-tighter text-inherit text-4xl leading-8 font-bold tracking-tight data-[state=active]:border-ring">
            Joueurs feminine
          </h1>
          <WomensTeam />
        </div>
      </main>
      <Footer />
    </>
  );
}
