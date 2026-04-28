import type { Product } from "@/types/productsData";
import { formatBRL } from "@/utils/formatBRL";
import Button from "@/components/Button";
import styles from "./styles.module.scss";

export type ProductCardProps = {
  product: Product;
  OnClick?: (product: Product) => void;
};

function installmentLabel(priceCents: number, installments = 2): string {
  const perInstallment = Math.ceil(priceCents / installments);
  return `ou ${installments}x de ${formatBRL(perInstallment)} sem juros`;
}

export default function ProductCard({ product, OnClick }: ProductCardProps) {
  const listPrice =
    product.listPrice != null && product.listPrice > product.price
      ? product.listPrice
      : undefined;

  return (
    <article className={styles.root}>
      <div className={styles.media}>
        <img src={product.photo} alt={product.productName} />
      </div>
      <div className={styles.body}>
        <p className={styles.desc}>{product.descriptionShort}</p>
        <div className={styles.prices}>
          {listPrice != null && (
            <span className={styles.priceOld}>{formatBRL(listPrice)}</span>
          )}
          <span className={styles.priceCurrent}>
            {formatBRL(product.price)}
          </span>
          <span className={styles.installments}>
            {installmentLabel(product.price)}
          </span>
        </div>
        <p className={styles.shipping}>Frete grátis</p>
        <Button
          className={styles.cta}
          variant="secondary"
          type="button"
          onClick={() => OnClick?.(product)}
        >
          COMPRAR
        </Button>
      </div>
    </article>
  );
}
