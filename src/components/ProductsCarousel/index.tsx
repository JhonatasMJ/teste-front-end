import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { Product } from "@/types/productsData";
import ProductCard from "@/components/ProductCard";
import "./styles.scss";

const EMBLA_OPTIONS = {
  align: "start" as const,
  containScroll: "trimSnaps" as const,
  slidesToScroll: 4,
  breakpoints: {
    "(max-width: 900px)": { slidesToScroll: 1 },
  },
};

type Props = {
  products: Product[];
  OnClick: (product: Product) => void;
};

export default function ProductsCarousel({ products, OnClick }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_OPTIONS);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();

    const updateArrows = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };

    updateArrows();
    emblaApi.on("select", updateArrows);
    emblaApi.on("reInit", updateArrows);
    return () => {
      emblaApi.off("select", updateArrows);
      emblaApi.off("reInit", updateArrows);
    };
  }, [emblaApi, products]);

  return (
    <div className="products-carousel-shell">
      <div
        className="products-carousel-viewport"
        ref={emblaRef}
        role="region"
        aria-label="Lista de produtos"
      >
        <div className="products-carousel-container">
          {products.map((product, index) => (
            <div
              className="products-carousel-slide"
              key={`${product.productName}-${index}`}
            >
              <ProductCard product={product} OnClick={OnClick} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="products-carousel-arrow products-carousel-arrow-prev"
        aria-label="Anterior"
        disabled={!canPrev}
        onClick={() => emblaApi?.scrollPrev()}
      >
        ‹
      </button>

      <button
        type="button"
        className="products-carousel-arrow products-carousel-arrow-next"
        aria-label="Próximo"
        disabled={!canNext}
        onClick={() => emblaApi?.scrollNext()}
      >
        ›
      </button>
    </div>
  );
}
