import SearchInput from "../SearchInput";
import "./styles.scss";
import Logo from "@/assets/Logo.svg";
import UserIcon from "@/assets/icons/UserCircle.svg";
import CartIcon from "@/assets/icons/ShoppingCart.svg";
import HeartIcon from "@/assets/icons/Heart.svg";
import BoxIcon from "@/assets/icons/Box.svg";


export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <img src={Logo} alt="Econverse" />
                <SearchInput />
                <div className="header-actions">
                    <a href="#"><img src={BoxIcon} alt="Telefone" /></a>
                    <a href="#"><img src={UserIcon} alt="Login" /></a>
                    <a href="#"><img src={CartIcon} alt="Carrinho" /></a>
                    <a href="#"><img src={HeartIcon} alt="Favoritos" /></a>
                </div>
            </div>
        </header>
    )
}