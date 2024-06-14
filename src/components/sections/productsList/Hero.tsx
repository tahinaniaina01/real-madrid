import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ProductType } from "@/pages/ProductsLists";
import { Link } from "react-router-dom";

export default function Hero({ prodType }: { prodType: ProductType }) {
  const { imageBackground, imageForground, title, description } = prodType;

  return (
    <section className="md:mt-[185px] mt-[200px]">
      <div className="w-full bg-muted px-8 md:px-16 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to="/" className="text-ring">
                  Accueil
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="relative min-h-fit">
        <div className={imageBackground === "none" ? "hidden" : "block"}>
          <img
            src={imageBackground}
            className="w-[100vw] min-h-full h-full object-top block !absolute object-cover z-0 top-0 bottom-0 right-0 left-0"
            alt="image bg 24/25"
          />
        </div>
        <div
          className={`${
            imageBackground !== "none" ? "hidden" : "block"
          } w-full min-h-full h-full object-top block !absolute z-0 top-0 bottom-0 right-0 left-0 bg-gradient-linear-180`}
        ></div>
        <div className="w-full h-full py-8 px-6 flex justify-center items-center sm:p-16">
          <div className="grid sm:flex justify-items-center sm:justify-center items-center w-full mx-auto relative z-20">
            <div className="w-full sm:px-0 sm:pb-0 max-w-[90%] px-6 shadow-lg rounded-xl md:p-8 p-6 grid relative justify-items-start items-center md:items-start text-start backdrop-blur bg-card">
              <h1 className="text-2xl md:text-4xl font-bold mb-7">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
          <div
            className={`${
              imageBackground === "none" ? "hidden" : "block"
            } overflow-hidden sm:mb-0 -mb-10 order-first w-full max-w-fit sm:-me-16 translate-x-1/4`}
          >
            <img
              className="rounded-lg sm:block hidden z-10 relative"
              width="680"
              height="380"
              src={imageForground}
              alt="image ldc"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
