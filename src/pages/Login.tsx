import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="mb-12 mt-28">
      <header className="fixed w-[100vw] top-0 left-0">
        <div className="container flex justify-center py-5">
          <Link to="/" className="text-xl">
            logo
          </Link>
        </div>
      </header>
      <div className="container flex justify-center">
        <div className="w-full max-w-[400px] h-full flex flex-col gap-10">
          <h2 className="text-center lg:text-4xl text-2xl font-bold">
            Welcom !
          </h2>
          <p className="text-center text-lg lg:text-xl text-muted-foground">
            Sign in or create your account
          </p>
          <div className="relative w-full flex flex-1 md:grow-0">
            <Input
              type="search"
              className="input-focus bg-muted border-none h-[56px] lg:h-[48px] text-inherit pr-16 pl-3 py-2 appearance-none w-full transition duration-150 ease-in-out focus:outline-none font-bold placeholder:font-normal focus:border-deep-purple-700 focus:ring-deep-purple-700 focus:ring-2 rounded-xl"
            />
            <span className="x flex-1 items-center justify-center w-full h-full cursor-pointer hidden">
              <X className="absolute right-2.5 top-2.5 h-6 w-6 text-input" />
            </span>
          </div>
          <Button variant={"primary"} className="text-lg" size={"lg"}>
            Continue
          </Button>
          <div className="flex w-full justify-between items-center">
            <span className="w-2/5 h-[2px] bg-muted-foreground rounded-full"></span>
            OR
            <span className="w-2/5 h-[2px] bg-muted-foreground rounded-full"></span>
          </div>
          <Button
            variant={"secondary"}
            className="text-lg hover:bg-muted-foreground/30 bg-background"
            size={"lg"}
          >
            Continue with Google
          </Button>
          <Button
            variant={"secondary"}
            className="text-lg hover:bg-muted-foreground/30 bg-background"
            size={"lg"}
          >
            Continue with Apple ID
          </Button>
          <hr />
          <p className="text-center">
            We will use your email address to check if you already have an
            account. You can exercise your rights at{" "}
            <a href="https://oposicion@corp.realmadrid.com">
              oposicion@corp.realmadrid.com
            </a>{" "}
            and get more information here.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
