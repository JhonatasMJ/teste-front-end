import type { Product } from "@/types/productsData";
import { formatBRL } from "@/utils/formatBRL";
import Button from "@/components/Button";
import "./styles.scss";

export type ProductCardProps = {
  product: Product;
};

function installmentLabel(priceCents: number, installments = 2): string {
  const perInstallment = Math.ceil(priceCents / installments);
  return `ou ${installments}x de ${formatBRL(perInstallment)} sem juros`;
}

export default function ProductCard({ product }: ProductCardProps) {
  const listPrice =
    product.listPrice != null && product.listPrice > product.price
      ? product.listPrice
      : undefined;

  return (
    <article className="product-card">
      <div className="product-card-media">
        <img src={product.photo} alt={product.productName} />
      </div>
      <div className="product-card-body">
        <p className="product-card-desc">{product.descriptionShort}</p>
        <div className="product-card-prices">
          {listPrice != null && (
            <span className="product-card-price-old">{formatBRL(listPrice)}</span>
          )}
          <span className="product-card-price-current">
            {formatBRL(product.price)}
          </span>
          <span className="product-card-installments">
            {installmentLabel(product.price)}
          </span>
        </div>
        <p className="product-card-shipping">Frete grátis</p>
        <Button className="product-card-cta" variant="secondary">
          COMPRAR
        </Button>
      </div>
    </article>
  );
}
