
import DevicesIcon from "@/assets/icons/Devices.png";
import SupermarketIcon from "@/assets/icons/SuperMarket.png";
import WhiskeyIcon from "@/assets/icons/Whiskey.png";
import ToolsIcon from "@/assets/icons/Tools.png";
import HealthIcon from "@/assets/icons/Health.png";
import SportsIcon from "@/assets/icons/Sport.png";
import FashionIcon from "@/assets/icons/Fashion.png";
import type { CategoryProps } from "@/types/categoriesProps";

export const categoriesData: CategoryProps[] = [
  {
    id: 1,
    name: "Tecnologia",
    image: DevicesIcon,
  },
  {
    id: 2,
    name: "Supermercado",
    image: SupermarketIcon,
  },
  {
    id: 3,
    name: "Bebidas",
    image: WhiskeyIcon,
  },
  {
    id: 4,
    name: "Ferramentas",
    image: ToolsIcon,
  },
  {
    id: 5,
    name: "Saúde",
    image: HealthIcon,
  },
  {
    id: 6,
    name: "Esporte e Fitness",
    image: SportsIcon,
  },
  {
    id: 7,
    name: "Moda",
    image: FashionIcon,
  },
];
