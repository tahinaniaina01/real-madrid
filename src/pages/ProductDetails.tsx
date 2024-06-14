import Footer from "@/components/sections/global/Footer";
import Header from "@/components/sections/global/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import products from "@/data/products.json";
import { useCarts } from "@/hooks/carts";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function ProductDetails() {
  const { productId } = useParams();
  const { addProductCart } = useCarts();
  const product = products.find(
    (prod) => prod.id == parseInt(productId || "999999999999999")
  );
  if (!product) return <NotFound />;
  const { title, price, size, image } = product;

  console.log(product);

  return (
    <>
      <Header />
      <div className="md:mt-[185px] mt-[200px] min-h-[50vh] mx-8 md:mx-16 flex flex-col sm:flex-row items-center">
        <div className="sm:w-1/2 w-full">
          <img src={image} alt={title} />
        </div>
        <div className="flex flex-col gap-5 sm:w-1/2 w-full">
          <div className="flex flex-col col-span-1 h-full w-full z-[2] bg-card rounded-2xl p-6 md:p-8 justify-between gap-12 my-12 shadow-full-xl">
            <div className="space-y-5">
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
              <div className="w-full">
                <h3 className="tracking-tighter text-inherit pb-5 font-normal text-2xl md:text-3xl xl:text-4xl">
                  {title}
                </h3>
                <div className="w-full flex flex-col items-start gap-1">
                  <p>{price.toFixed(2)} €</p>
                  <span>Taxes incluses</span>
                </div>
              </div>
              <div>
                <h3 className="font-primary text-base font-bold leading-relaxed tracking-normal mb-2 mt-1">
                  Size
                </h3>
                <ToggleGroup
                  type="single"
                  defaultValue={size[0]}
                  variant="outline"
                  className="w-full flex flex-row flex-wrap justify-start"
                >
                  {product?.size.map((element, i) => {
                    return (
                      <ToggleGroupItem
                        key={i}
                        value={element}
                        className="border-muted-foreground rounded-full py-1 px-4 h-auto w-auto"
                      >
                        {element}
                      </ToggleGroupItem>
                    );
                  })}
                </ToggleGroup>
              </div>
              <div>
                <h3 className="font-primary text-base font-bold leading-relaxed tracking-normal mb-2 mt-1">
                  Badge
                </h3>
                <ToggleGroup
                  type="single"
                  defaultValue="none"
                  variant="outline"
                  className="w-full flex flex-row sm:flex-wrap justify-start"
                >
                  <ToggleGroupItem
                    value="none"
                    className="border-muted-foreground rounded-full py-1 px-4 h-auto w-auto"
                  >
                    Aucun
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div>
                <h3 className="font-primary text-base font-bold leading-relaxed tracking-normal mb-2 mt-1">
                  Nom et numéro
                </h3>
                <ToggleGroup
                  type="single"
                  defaultValue="none"
                  variant="outline"
                  className="w-full flex flex-row sm:flex-wrap justify-start"
                >
                  <ToggleGroupItem
                    value="none"
                    className="border-muted-foreground rounded-full py-1 px-4 h-auto w-auto"
                  >
                    Aucun
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
            <div className="w-full">
              <Button
                variant={"primary"}
                size={"xl"}
                onClick={() => addProductCart(product)}
                className="w-full py-3 px-6 rounded-xl"
              >
                Ajouter au panier
              </Button>
            </div>
          </div>
          <Accordion
            type="single"
            collapsible
            className="bg-muted rounded-2xl p-5 mb-12"
          >
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger>description du produit</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-5 text-sm">
                  <p>
                    Lorsqu'adidas a conçu le maillot domicile du Real Madrid,
                    ils se sont inspirés des traditions de longue date de la
                    célèbre ville du club. Inspiré par les tenues "chulapo"
                    portées lors de la fête annuelle de San Isidro à Madrid, le
                    motif pied-de-poule de ce maillot de football authentique
                    lui donne une touche de style. Doté d'un système de
                    ventilation HEAT.RDY et d'un écusson du club appliqué à
                    chaud, ce haut est fait pour le terrain. Ce produit est
                    fabriqué à partir de 100%de matériaux recyclés. En
                    réutilisant des matériaux qui ont déjà été créés, nous
                    contribuons à réduire les déchets et notre dépendance à
                    l'égard de ressources limitées, ainsi que l'empreinte des
                    produits que nous fabriquons.
                  </p>
                  <ul className="text-base">
                    <li>Coupe slim</li>
                    <li>Col en V côtelé</li>
                    <li>100% polyester (recyclé)</li>
                    <li>HEAT.RDY.</li>
                    <li>Inserts latéraux en mesh</li>
                    <li>Écusson du Real Madrid appliqué à chaud</li>
                  </ul>
                  <p>
                    Le numéro est susceptible d'être modifié jusqu'à la date
                    limite de transfert. Pour cette raison, aucun retour de
                    maillots personnalisés ne sera accepté après un tel
                    changement.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
}
