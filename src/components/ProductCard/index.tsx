import type { ProductProps } from "@/types/productsData";
import { formatBRL } from "@/utils/formatBRL";
import Button from "@/components/Button";
import "./styles.scss";

function installmentLabel(priceCents: number, installments = 2): string {
  const perInstallment = Math.ceil(priceCents / installments);
  return `ou ${installments}x de ${formatBRL(perInstallment)} sem juros`;
}

export default function ProductCard({ products }: ProductProps) {
  return (
    <div className="product-card">
      {products.map((product, index) => {
        const listPrice =
          product.listPrice != null && product.listPrice > product.price
            ? product.listPrice
            : undefined;

        return (
          <article
            key={`${product.productName}-${index}`}
            className="product-card-item"
          >
            <div className="product-card-item-media">
              <img src={product.photo} alt={product.productName} />
            </div>
            <div className="product-card-item-body">
              <p className="product-card-item-desc">{product.descriptionShort}</p>
              <div className="product-card-item-prices">
                {listPrice != null && (
                  <span className="product-card-item-price-old">
                    {formatBRL(listPrice)}
                  </span>
                )}
                <span className="product-card-item-price-current">
                  {formatBRL(product.price)}
                </span>
                <span className="product-card-item-installments">
                  {installmentLabel(product.price)}
                </span>
              </div>
              <p className="product-card-item-shipping">Frete grátis</p>
              <Button variant="secondary">
                COMPRAR
              </Button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
