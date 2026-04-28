import "./styles.scss";

export type TitleProps = {
  title: string;
  titleId?: string;
};

export default function Title({ title, titleId }: TitleProps) {
  return (
    <div className="section-heading">
      <span className="section-heading-line" aria-hidden />
      <h2 id={titleId} className="section-heading-title">
        {title}
      </h2>
      <span className="section-heading-line" aria-hidden />
    </div>
  );
}
