import Category from "@/components/sections/Home/Category";
import Events from "@/components/sections/Home/Events";
import Hero from "@/components/sections/Home/Hero";
import ShopByPlayer from "@/components/sections/Home/ShopByPlayer";
import Trending from "@/components/sections/Home/Trending";
import Footer from "@/components/sections/global/Footer";
import Header from "@/components/sections/global/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Trending />
      <ShopByPlayer />
      <Category />
      <Events />
      <Footer />
    </>
  );
}
