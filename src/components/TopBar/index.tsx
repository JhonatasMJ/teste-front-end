import "./styles.scss";
import ShieldIcon from "@/assets/icons/ShieldCheck.svg";
import TruckIcon from "@/assets/icons/Truck.svg";
import CreditCardIcon from "@/assets/icons/CreditCard.svg";

const topbarItems = [
  {
    icon: ShieldIcon,
    alt: "Compra segura",
    content: <>Compra <span>100% segura</span></>,
  },
  {
    icon: TruckIcon,
    alt: "Frete grátis",
    content: <><span>Frete grátis</span> acima de R$ 200</>,
  },
  {
    icon: CreditCardIcon,
    alt: "Parcelamento",
    content: <><span>Parcele</span> suas compras</>,
  },
];

export default function TopBar() {
  return (
    <div className="topbar" role="region" aria-label="Informações da loja">
      <div className="topbar-container">
        {topbarItems.map((item, index) => (
          <div key={index} className="topbar-item">
            <img src={item.icon} alt={item.alt} />
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}