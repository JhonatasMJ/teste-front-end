import styles from "./styles.module.scss";

export type TitleProps = {
  title: string;
  titleId?: string;
};

export default function Title({ title, titleId }: TitleProps) {
  return (
    <div className={styles.root}>
      <span className={styles.line} aria-hidden />
      <h2 id={titleId} className={styles.heading}>
        {title}
      </h2>
      <span className={styles.line} aria-hidden />
    </div>
  );
}
