import { useState } from "react";
import type { Product } from "@/types/productsData";
import CategoryTabs from "@/components/CategoryTabs";
import ProductsCarousel from "@/components/ProductsCarousel";
import ProductModal from "@/components/ProductModal";
import styles from "./styles.module.scss";

const PRODUCT_TABS: { id: string; label: string }[] = [
  { id: "celular", label: "Celular" },
  { id: "acessorios", label: "Acessórios" },
  { id: "tablets", label: "Tablets" },
  { id: "notebooks", label: "Notebooks" },
  { id: "tvs", label: "TVs" },
  { id: "all", label: "Ver todos" },
];

export type ProductsProps = {
  products: Product[];
  tabs: boolean;
};

export default function Products({ products, tabs }: ProductsProps) {
  const [activeTab, setActiveTab] = useState<string>("celular");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className={styles.section} aria-labelledby="products-section-title">
      <div className={`${styles.inner} container`}>
        <header className={styles.head}>
          <div className={styles.headTitle}>
            <span className={styles.decorLine} aria-hidden />
            <h2 id="products-section-title" className={styles.headHeading}>
              Produtos relacionados
            </h2>
            <span className={styles.decorLine} aria-hidden />
          </div>
        </header>

        {tabs && (
          <CategoryTabs
            tabs={PRODUCT_TABS}
            activeId={activeTab}
            onChange={(id) => setActiveTab(id as string)}
            ariaLabel="Categorias de produtos"
          />
        )}

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
