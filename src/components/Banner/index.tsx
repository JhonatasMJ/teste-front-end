import Button from "../Button";
import styles from "./styles.module.scss";

export default function Banner() {
    return (
        <div className={styles.root} aria-label="Banner" role="img">
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Venha conhecer nossas promoções</h1>
                    <p> <span>50% Off</span> nos produtos </p>
                </div>
                    <Button variant="primary">Ver produto</Button>
            </div>
        </div>
    )
}