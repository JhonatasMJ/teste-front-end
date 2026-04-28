import SearchInput from "../SearchInput";
import styles from "./styles.module.scss";
import Logo from "@/assets/Logo.svg";
import UserIcon from "@/assets/icons/UserCircle.svg";
import CartIcon from "@/assets/icons/ShoppingCart.svg";
import HeartIcon from "@/assets/icons/Heart.svg";
import BoxIcon from "@/assets/icons/Box.svg";
import CrownIcon from "@/assets/icons/Crown.svg";


export default function Header() {
    return (
        <header className={styles.root}>
            <div className={`${styles.container} container`}>
                <div className={styles.main}>
                    <img src={Logo} alt="Econverse" />
                    <SearchInput />
                    <div className={styles.actions}>
                        <a href="#"><img src={BoxIcon} alt="Telefone" /></a>
                        <a href="#"><img src={UserIcon} alt="Login" /></a>
                        <a href="#"><img src={CartIcon} alt="Carrinho" /></a>
                        <a href="#"><img src={HeartIcon} alt="Favoritos" /></a>
                    </div>
                </div>
                <div className={styles.menu}>
                    <a href="#">TODAS AS CATEGORIAS</a>
                    <a href="#">SUPERMERCADO</a>
                    <a href="#">LIVROS</a>
                    <a href="#">MODA</a>
                    <a href="#">LANÇAMENTOS</a>
                    <a href="#"> <span>OFERTAS DO DIA</span></a>
                    <a href="#">
                        <img src={CrownIcon} alt="Assinatura" />
                        ASSINATURA
                    </a>
                </div>
            </div>
        </header>
    )
}