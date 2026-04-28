
import styles from "./styles.module.scss";
import MarksImg from "@/assets/Logo.svg";

export default function Marks() {
    const marks = Array.from({ length: 10 }, (_, index) => `mark-${index}`);
    const repeatedMarks = [...marks, ...marks];

    return (
        <section className={styles.section} aria-label="Marks">
            <div className={styles.inner}>
                <header className={styles.head}>
                    <div className={styles.headTitle}>
                        <span className={styles.decorLine} aria-hidden />
                        <h2 className={styles.headHeading}>Navegue por marcas</h2>
                        <span className={styles.decorLine} aria-hidden />
                    </div>
                </header>

                <div className={styles.viewport}>
                    <div className={styles.track} role="list" aria-label="Lista de marcas parceiras">
                        {repeatedMarks.map((mark, index) => (
                            <div key={`${mark}-${index}`} className={styles.card} role="listitem">
                        <img className={styles.img} src={MarksImg} alt="Logo da marca parceira" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}