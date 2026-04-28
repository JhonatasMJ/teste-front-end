import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Product } from "@/types/productsData";
import { formatBRL } from "@/utils/formatBRL";
import styles from "./styles.module.scss";

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
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.shell}
        role="dialog"
        aria-modal="true"
        aria-labelledby={TITLE_ID}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.close} aria-label="Fechar" onClick={onClose}>
          ×
        </button>

        <div className={styles.body}>
          <div className={styles.layout}>
            <div className={styles.gallery}>
              <img src={product.photo} alt="" />
            </div>

            <div className={styles.info}>
              <h2 id={TITLE_ID} className={styles.title}>
                {product.productName}
              </h2>
              <p className={styles.price}>{formatBRL(product.price)}</p>
              <p className={styles.desc}>{product.descriptionShort}</p>
              <a href="#detalhes" className={styles.more} onClick={(e) => e.preventDefault()}>
                Veja mais detalhes do produto &gt;
              </a>

              <div className={styles.actions}>
                <div className={styles.qty}>
                  <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                    −
                  </button>
                  <span>{String(qty).padStart(2, "0")}</span>
                  <button type="button" onClick={() => setQty((q) => Math.min(99, q + 1))}>
                    +
                  </button>
                </div>
                <button type="button" className={styles.buy}>
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
