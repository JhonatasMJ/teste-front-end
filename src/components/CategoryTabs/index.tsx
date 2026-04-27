import "./styles.scss";

export type CategoryTabItem = {
  id: string;
  label: string;
};

export type CategoryTabsProps = {
  tabs: CategoryTabItem[];
  activeId: string;
  onChange: (id: string) => void;
  ariaLabel?: string;
};

export default function CategoryTabs({
  tabs,
  activeId,
  onChange,
  ariaLabel = "Categorias",
}: CategoryTabsProps) {
  return (
    <nav className="category-tabs" aria-label={ariaLabel}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={
            activeId === tab.id
              ? "category-tabs-button category-tabs-button-is-active"
              : "category-tabs-button"
          }
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
