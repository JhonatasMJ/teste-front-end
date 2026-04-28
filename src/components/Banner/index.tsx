import Button from "../Button";
import styles from "./styles.module.scss";

export default function Banner() {
    return (
        <section className={styles.wrapper} aria-label="Destaque promocional">
            <div className="container">
                <div className={styles.root}>
                <div className={styles.overlay} aria-hidden />
                <div className={styles.content}>
                    <span className={styles.badge}>Promoção</span>
                    <div className={styles.text}>
                        <h1>Venha conhecer nossas promoções</h1>
                        <p>
                            Até <span>50% off</span> em produtos selecionados
                        </p>
                    </div>
                    <Button variant="primary">Ver ofertas</Button>
                </div>
            </div>
            </div>
        </section>
    );
}
