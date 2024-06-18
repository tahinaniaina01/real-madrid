import { Button } from "@/components/ui/button";
import DetailsForm from "./DetailsForm";
import PaymentForm from "./PaymentForm";
import ShippingForm from "./ShippingForm";

export default function Form() {
  return (
    <div className="space-y-3 lg:mt-12 mt-24">
      <div className="relative w-full flex items-center justify-between mb-12">
        <Button
          variant={"secondary"}
          className="w-[28%] rounded-full border-[1px] border-ring relative z-10 leading-4 font-normal"
        >
          Vos détails
        </Button>
        <Button
          variant={"secondary"}
          className="w-[28%] rounded-full border-[1px] border-ring relative z-10 leading-4 font-normal"
        >
          expédition
        </Button>
        <Button
          variant={"secondary"}
          className="w-[28%] rounded-full border-[1px] border-ring relative z-10 leading-4 font-normal"
        >
          Paiement
        </Button>
        <span className="h-2 w-full absolute bg-muted z-0"></span>
      </div>
      <div className="flex flex-col gap-5 pb-12">
        <DetailsForm />
        <ShippingForm />
        <PaymentForm />
      </div>
    </div>
  );
}
