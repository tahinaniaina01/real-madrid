import logo from "@/assets/logo-oficial-store.webp";
import { Link } from "react-router-dom";

export default function HeaderPage() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="fixed top-0 shadow-xl z-50 w-full bg-background px-8 mx-auto items-center justify-between h-20">
        <Link to="/">
          <div className="overflow-hidden lg:pl-16 pl-3 xl:ms-[2.5em] mt-3">
            <img
              className="lg:scale-110 object-cover"
              src={logo}
              width="120"
              alt="RM Logo"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
