import { ChevronRight, MenuIcon, X } from "lucide-react";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="reltive left-0 h-full block lg:hidden z-50">
      <button
        className="h-full flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <MenuIcon />}
      </button>
      <div
        className={`absolute top-full -left-8 w-[100vw] ${
          isOpen ? "h-[100vh]" : "h-0"
        } bg-background z-40 transition-all duration-300 overflow-hidden`}
      >
        <ul className="p-4 flex flex-col gap-5">
          <li className="w-full flex items-center justify-between">
            <div className="font-bold text-lg">Tenus</div>
            <ChevronRight />
          </li>
          <li className="w-full flex items-center justify-between">
            <div className="font-bold text-lg">Acheter par joueur</div>
            <ChevronRight />
          </li>
          <li className="w-full flex items-center justify-between">
            <div className="font-bold text-lg">Entrainement</div>
            <ChevronRight />
          </li>
          <li className="w-full flex items-center justify-between">
            <div className="font-bold text-lg">Mode</div>
            <ChevronRight />
          </li>
          <li className="w-full flex items-center justify-between">
            <div className="font-bold text-lg">Accessoires</div>
            <ChevronRight />
          </li>
          <li className="w-full flex items-center justify-between">
            <div className="font-bold text-lg">Champions League</div>
            <ChevronRight />
          </li>
        </ul>
      </div>
    </div>
  );
}
