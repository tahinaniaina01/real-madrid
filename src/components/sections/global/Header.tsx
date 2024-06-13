import logo from "@/assets/logo-oficial-store.webp";
import Menu from "@/components/ui/Menu";
import { Input } from "@/components/ui/input";
import { ArrowRight, ChevronDown, Search, UserRound, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Accessoires from "./Accessoires";
import Fashion from "./Fashion";
import Kits from "./Kits";
import ShopByPlayer from "./ShopByPlayer";
import { SideBar } from "./SideBar";
import Training from "./Training";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hundleScroll = () => {
      if (ref.current?.offsetHeight) {
        scrollY > ref.current?.offsetHeight
          ? setIsScroll(true)
          : setIsScroll(false);
      }
    };
    window.addEventListener("scroll", hundleScroll);

    return () => {
      window.removeEventListener("scroll", hundleScroll);
    };
  }, []);

  return (
    <header className={`absolute top-0 left-0 z-50 w-full`}>
      <Link to="/login">
        <div
          ref={ref}
          style={{
            color: "#FFFFFF",
          }}
          className="flex bg-gradient-linear-180 justify-center w-full items-center text-sm leading-[1.3] border-b border-white px-2 lg:px-8 py-8 md:py-6 h-10 overflow-hidden group hover:bg-white/[0.05] cursor-pointer font-semibold"
        >
          <div className="text-center block">
            Inscrivez-vous pour devenir un "Madridista" et recevez 5% de
            réduction sur votre premier achat
          </div>
          <button
            className="relative select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] text-xs hover:bg-deep-purple-500/10 active:bg-deep-purple-500/30 rounded-full pl-12 inline-block align-middle text-white md:w-[17px] md:h-[14px]"
            type="button"
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <div className="w-[25px] overflow-auto">
                <ArrowRight />
              </div>
            </span>
          </button>
        </div>
      </Link>
      <div
        className={`${
          isScroll ? "fixed top-0 shadow-xl z-50" : "relative"
        } w-full bg-background px-8 mx-auto`}
      >
        <div className="relative grid lg:grid-cols-3 grid-cols-2 w-full items-center justify-between h-20">
          <div className="flex items-center lg:gap-3 gap-1">
            <Menu />
            <Link to="/">
              <div className="overflow-hidden lg:pl-16 pl-3 xl:ms-[2.5em]">
                <img
                  className="lg:scale-110 object-cover"
                  src={logo}
                  width="120"
                  height="150"
                  alt="RM Logo"
                />
              </div>
            </Link>
          </div>
          <div className="relative w-full lg:flex flex-1 md:grow-0 hidden">
            <span className="flex-1 items-center justify-center w-full h-full">
              <Search className="absolute left-2.5 top-2.5 h-6 w-6 text-muted-foreground" />
            </span>
            <Input
              type="search"
              placeholder="Recherche..."
              className="input-focus bg-muted border-none h-[56px] lg:h-[48px] text-inherit px-16 py-2 appearance-none w-full transition duration-150 ease-in-out focus:outline-none font-bold placeholder:font-normal focus:border-deep-purple-700 focus:ring-deep-purple-700 focus:ring-2 rounded-xl"
            />
            <span className="x flex-1 items-center justify-center w-full h-full cursor-pointer hidden">
              <X className="absolute right-2.5 top-2.5 h-6 w-6 text-input" />
            </span>
          </div>
          <div className="flex w-full h-full items-center justify-end gap-7 ml-4 lg:ml-8 lg:pr-16">
            <Link to="/login">
              <UserRound className="text-muted-foreground" />
            </Link>
            <SideBar />
          </div>
        </div>
        <div className="relative w-full flex-1 md:grow-0 lg:hidden mb-5 items-center">
          <span className="flex-1 items-center justify-center w-full h-full">
            <Search className="absolute lg:hidden left-2.5 top-4 h-6 w-6 text-muted-foreground" />
          </span>
          <Input
            type="search"
            placeholder="Recherche..."
            className="bg-muted border-none h-[56px] lg:h-[48px] text-inherit pl-16 py-2 appearance-none w-full transition duration-150 ease-in-out pr-10 focus:outline-none font-bold placeholder:font-normal focus:border-deep-purple-700 focus:ring-deep-purple-700 focus:ring-2 rounded-xl"
          />
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <nav className="flex gap-3">
            <div className="group">
              <div className="px-5 py-4 cursor-pointer relative flex items-center gap-1 hover:text-ring group before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-ring before:bottom-0 before:left-0 before:opacity-0 group-hover:before:opacity-100 font-bold text-sm text-muted-foreground">
                Tenus{" "}
                <ChevronDown className="group-hover:rotate-180 transition duration-300" />
              </div>
              <Kits />
            </div>
            <div className="group">
              <div className="px-5 py-4 cursor-pointer relative flex items-center gap-1 hover:text-ring group before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-ring before:bottom-0 before:left-0 before:opacity-0 hover:before:opacity-100 font-bold text-sm text-muted-foreground">
                Acheter par joueur{" "}
                <ChevronDown className="group-hover:rotate-180 transition duration-300" />
              </div>
              <ShopByPlayer />
            </div>
            <div className="group">
              <div className="px-5 py-4 cursor-pointer relative flex items-center gap-1 hover:text-ring group before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-ring before:bottom-0 before:left-0 before:opacity-0 hover:before:opacity-100 font-bold text-sm text-muted-foreground">
                Entrainement{" "}
                <ChevronDown className="group-hover:rotate-180 transition duration-300" />
              </div>
              <Training />
            </div>
            <div className="group">
              <div className="px-5 py-4 cursor-pointer relative flex items-center gap-1 hover:text-ring group before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-ring before:bottom-0 before:left-0 before:opacity-0 hover:before:opacity-100 font-bold text-sm text-muted-foreground">
                Mode{" "}
                <ChevronDown className="group-hover:rotate-180 transition duration-300" />
              </div>
              <Fashion />
            </div>
            <div className="group">
              <div className="px-5 py-4 cursor-pointer relative flex items-center gap-1 hover:text-ring group before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-ring before:bottom-0 before:left-0 before:opacity-0 hover:before:opacity-100 font-bold text-sm text-muted-foreground">
                Accessoires{" "}
                <ChevronDown className="group-hover:rotate-180 transition duration-300" />
              </div>
              <Accessoires />
            </div>
            <div className="">
              <div className="px-5 py-4 cursor-pointer relative flex items-center gap-1 hover:text-ring group before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-ring before:bottom-0 before:left-0 before:opacity-0 hover:before:opacity-100 font-bold text-sm text-muted-foreground">
                Champions league{" "}
                <ChevronDown className="group-hover:rotate-180 transition duration-300 opacity-0 w-0" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
