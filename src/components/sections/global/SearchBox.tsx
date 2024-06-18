import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import ListSearch from "./ListSearch";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="relative w-full lg:flex flex-1 md:grow-0 hidden">
        <span className="flex-1 items-center justify-center w-full h-full">
          <Search className="absolute left-2.5 top-2.5 h-6 w-6 text-muted-foreground" />
        </span>
        <Input
          type="search"
          placeholder="Recherche..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-focus bg-muted border-none h-[56px] lg:h-[48px] text-inherit pl-16 py-2 appearance-none w-full transition duration-150 ease-in-out focus:outline-none font-bold placeholder:font-normal focus:border-deep-purple-700 focus:ring-deep-purple-700 focus:ring-2 rounded-xl"
        />
        {/* <span className="x flex-1 items-center justify-center w-full h-full cursor-pointer hidden">
          <X className="absolute right-2.5 top-2.5 h-6 w-6 text-input" />
        </span> */}
      </div>
      <ListSearch search={search} />
    </>
  );
}
