import { useState } from "react";
import type { Product } from "@/types/productsData";
import SectionHeading from "@/components/SectionHeading";
import CategoryTabs from "@/components/CategoryTabs";
import ProductsCarousel from "@/components/ProductsCarousel";
import "./styles.scss";

type TabId =
  | "celular"
  | "acessorios"
  | "tablets"
  | "notebooks"
  | "tvs"
  | "all";

const PRODUCT_TABS: { id: TabId; label: string }[] = [
  { id: "celular", label: "CELULAR" },
  { id: "acessorios", label: "ACESSÓRIOS" },
  { id: "tablets", label: "TABLETS" },
  { id: "notebooks", label: "NOTEBOOKS" },
  { id: "tvs", label: "TVS" },
  { id: "all", label: "VER TODOS" },
];

export type ProductsProps = {
  products: Product[];
};

export default function Products({ products }: ProductsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("celular");

  return (
    <section className="products" aria-labelledby="products-section-title">
      <div className="products-inner">
        <SectionHeading
          title="Produtos relacionados"
          titleId="products-section-title"
        />

        <CategoryTabs
          tabs={PRODUCT_TABS}
          activeId={activeTab}
          onChange={(id) => setActiveTab(id as TabId)}
          ariaLabel="Categorias de produtos"
        />

        <ProductsCarousel products={products} />
      </div>
    </section>
  );
}
