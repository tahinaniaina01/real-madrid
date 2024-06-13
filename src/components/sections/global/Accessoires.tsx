import img1 from "@/assets/HOME__4_.webp";
import img2 from "@/assets/nav-menu-320x320-away.webp";
import img7 from "@/assets/nav-menu-320x320-basket.webp";
import img4 from "@/assets/nav-menu-320x320-gk__1_.webp";
import img6 from "@/assets/nav-menu-320x320-kroos.webp";
import img5 from "@/assets/nav-menu-320x320-shop_by_player.webp";
import img3 from "@/assets/nav-menu-320x320-third.webp";
import { Link } from "react-router-dom";

export default function Accessoires() {
  const categorys = [
    {
      title: "Tenue domicile 24/25",
      category: ["Hommes", "Femmes", "Enfants", "Voir tout"],
      image: img1,
    },
    {
      title: "Tenue extérieur 23/24",
      category: ["Hommes", "Femmes", "Enfants", "Voir tout"],
      image: img2,
    },
    {
      title: "Tenue third 23/24",
      category: ["Hommes", "Femmes", "Enfants", "Voir tout"],
      image: img3,
    },
    {
      title: "Tenue gardien de but 24/25",
      category: ["Hommes", "Enfants"],
      image: img4,
    },
    {
      title: "Acheter par joueur",
      category: ["Équipe Masculin", "Équipe Feminin"],
      image: img5,
    },
    {
      title: "Toni Kroos",
      category: ["Maillots 24/25"],
      image: img6,
    },
    {
      title: "Tenues basketball",
      category: ["Hommes", "Enfants", "Voir tout"],
      image: img7,
    },
  ];

  return (
    <div className="absolute top-full w-[100vw] left-0 hidden group-hover:block px-16 py-8 bg-background">
      <div className="grid grid-cols-7 gap-5">
        {categorys.map((element, index) => {
          const { image, title, category } = element;

          return (
            <div key={index} className="space-y-3">
              <Link
                to={"/"}
                className="text-start font-bold justify-between cursor-pointer xl:text-lg text-base"
              >
                <img
                  className="w-full rounded-xl overflow-hidden h-auto"
                  src={image}
                  alt=""
                />
                <div className="grid max-w-full border-b-2  pt-4 pb-2">
                  {title}
                </div>
              </Link>
              <ul>
                {category.map((element) => {
                  return (
                    <li className="font-bold text-sm text-muted-foreground px-2">
                      <Link to={"/"}>{element}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
