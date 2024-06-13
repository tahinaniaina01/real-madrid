import Cart from "@/components/sections/checkout/Cart";
import Form from "@/components/sections/checkout/Form";
import HeaderPage from "@/components/sections/global/HeaderPage";

export default function CheckOut() {
  return (
    <>
      <HeaderPage />
      <div className="lg:grid grid-cols-10 lg:absolute lg:top-16 w-full">
        <div className="lg:col-span-6 col-span-10 lg:px-8 xl:px-12 2xl:px-20 px-4">
          <Form />
        </div>
        <div className="hidden lg:block col-span-4">
          <Cart />
        </div>
      </div>
    </>
  );
}
