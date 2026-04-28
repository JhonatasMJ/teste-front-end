import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Product } from "@/types/productsData";
import { formatBRL } from "@/utils/formatBRL";
import "./styles.scss";

const TITLE_ID = "product-modal-title";

type Props = {
  product: Product;
  onClose: () => void;
};


export default function ProductModal({ product, onClose }: Props) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div className="product-modal-backdrop" onClick={onClose}>
      <div
        className="product-modal-shell"
        role="dialog"
        aria-modal="true"
        aria-labelledby={TITLE_ID}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="product-modal-close" aria-label="Fechar" onClick={onClose}>
          ×
        </button>

        <div className="product-modal-body">
          <div className="product-modal-layout">
            <div className="product-modal-gallery">
              <img src={product.photo} alt="" />
            </div>

            <div className="product-modal-info">
              <h2 id={TITLE_ID} className="product-modal-title">
                {product.productName}
              </h2>
              <p className="product-modal-price">{formatBRL(product.price)}</p>
              <p className="product-modal-desc">{product.descriptionShort}</p>
              <a href="#detalhes" className="product-modal-more" onClick={(e) => e.preventDefault()}>
                Veja mais detalhes do produto &gt;
              </a>

              <div className="product-modal-actions">
                <div className="product-modal-qty">
                  <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                    −
                  </button>
                  <span>{String(qty).padStart(2, "0")}</span>
                  <button type="button" onClick={() => setQty((q) => Math.min(99, q + 1))}>
                    +
                  </button>
                </div>
                <button type="button" className="product-modal-buy">
                  COMPRAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
