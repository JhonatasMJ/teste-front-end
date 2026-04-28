import { categoriesData } from "@/mocks/Categories";
import styles from "./styles.module.scss";

export default function Categories() {
  return (
    <section className={`${styles.root} container`} aria-label="Categorias">
      <ul className={styles.grid}>
        {categoriesData.map((category) => (
          <li key={category.id} className={styles.item}>
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
