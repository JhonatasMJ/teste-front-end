import "./styles.scss";

export type SectionHeadingProps = {
  title: string;
  titleId?: string;
};

export default function SectionHeading({ title, titleId }: SectionHeadingProps) {
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
