import { categoriesData } from "@/mocks/Categories";
import styles from "./styles.module.scss";

export default function Categories() {
  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        {categoriesData.map((category) => (
          <div key={category.id} className={styles.item}>
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
