import styles from "./styles.module.scss";
import SearchIcon from "@/assets/icons/Search.svg";

export default function SearchInput() {
    return (
        <div className={styles.root}>
            <input type="text" placeholder="O que você está buscando?" />
            <button>
                <img src={SearchIcon} alt="Pesquisar" />
            </button>
        </div>
    )
}