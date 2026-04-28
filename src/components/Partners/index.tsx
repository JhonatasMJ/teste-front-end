import Button from "../Button";
import styles from "./styles.module.scss";

export default function Partners() {
    return (
        <section className={styles.wrapper} aria-label="Parceiros">
            <div className={`${styles.inner} container`}>
                <div className={styles.root}>
                    <div className={styles.overlay} aria-hidden />
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <h2>Parceiros</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur, adipisicing elit.
                            </p>
                        </div>
                        <Button variant="primary">Confira</Button>
                    </div>
                </div>
                <div className={styles.root}>
                    <div className={styles.overlay} aria-hidden />
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <h2>Parceiros</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur, adipisicing elit.
                            </p>
                        </div>
                        <Button variant="primary">Confira</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
