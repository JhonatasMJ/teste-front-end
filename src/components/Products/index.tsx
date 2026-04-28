import { useState } from "react";
import type { Product } from "@/types/productsData";
import Title from "@/components/Title";
import CategoryTabs from "@/components/CategoryTabs";
import ProductsCarousel from "@/components/ProductsCarousel";
import ProductModal from "@/components/ProductModal";
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="products" aria-labelledby="products-section-title">
      <div className="products-inner">
        <Title
          title="Produtos relacionados"
          titleId="products-section-title"
        />

        <CategoryTabs
          tabs={PRODUCT_TABS}
          activeId={activeTab}
          onChange={(id) => setActiveTab(id as TabId)}
          ariaLabel="Categorias de produtos"
        />

        <ProductsCarousel
          products={products}
          OnClick={setSelectedProduct}
        />

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </section>
  );
}
