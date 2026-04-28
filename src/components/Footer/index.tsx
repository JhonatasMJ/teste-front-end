import Logo from "@/assets/Logo.svg";
import FacebookIcon from "@/assets/icons/Facebook.svg";
import InstagramIcon from "@/assets/icons/Instagram.svg";
import LinkedinIcon from "@/assets/icons/Linkedin.svg";
import styles from "./styles.module.scss";

const institutionalLinks = ["Sobre nos", "Movimento", "Trabalhe conosco"];
const helpLinks = ["Suporte", "Fale Conosco", "Perguntas Frequentes"];
const termsLinks = ["Termos e Condicoes", "Politica de Privacidade", "Trocas e Devolucao"];

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src={Logo} alt="Econverse" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram">
                <img src={InstagramIcon} alt="" aria-hidden />
              </a>
              <a href="#" aria-label="Facebook">
                <img src={FacebookIcon} alt="" aria-hidden />
              </a>
              <a href="#" aria-label="Linkedin">
                <img src={LinkedinIcon} alt="" aria-hidden />
              </a>
            </div>
          </div>

          <nav className={styles.links} aria-label="Links do rodape">
            <div>
              <h3>Institucional</h3>
              <ul>
                {institutionalLinks.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Ajuda</h3>
              <ul>
                {helpLinks.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Termos</h3>
              <ul>
                {termsLinks.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <p>© Econverse - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
