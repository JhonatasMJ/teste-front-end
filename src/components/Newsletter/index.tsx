import Button from "../Button";
import Input from "../Input";
import styles from "./styles.module.scss";

export default function Newsletter() {
  return (
    <section className={styles.wrapper} aria-label="Newsletter">
      <div className="container">
        <div className={styles.root}>
          <div className={styles.text}>
            <h2>Inscreva-se na nossa  <span>newsletter</span> </h2>
            <p>
              Cadastre-se para receber ofertas e lancamentos em primeira mao.
            </p>
          </div>

          <form className={styles.form}>
            <Input
              id="newsletter-name"
              label="Nome"
              name="name"
              placeholder="Digite seu nome"
            />
            <Input
              id="newsletter-email"
              label="E-mail"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
            <Button className={styles.button} type="submit">
              Inscrever
            </Button>
            <label className={styles.terms} htmlFor="newsletter-terms">
              <input
                id="newsletter-terms"
                name="terms"
                type="checkbox"
                required
              />
              <span>Aceito os termos e condicoes</span>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}
