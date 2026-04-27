import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { Product } from "@/types/productsData";
import ProductCard from "@/components/ProductCard";
import "./styles.scss";

export type ProductsCarouselProps = {
  products: Product[];
};

const EMBLA_OPTIONS = {
  align: "start" as const,
  containScroll: "trimSnaps" as const,
  slidesToScroll: 4,
  breakpoints: {
    "(max-width: 900px)": { slidesToScroll: 1 },
  },
};

export default function ProductsCarousel({ products }: ProductsCarouselProps) {
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_OPTIONS);

  const syncArrows = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, products]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = requestAnimationFrame(() => syncArrows());
    emblaApi.on("select", syncArrows);
    emblaApi.on("reInit", syncArrows);
    return () => {
      cancelAnimationFrame(id);
      emblaApi.off("select", syncArrows);
      emblaApi.off("reInit", syncArrows);
    };
  }, [emblaApi, syncArrows]);

  return (
    <div className="products-carousel-shell">
      <div
        className="products-carousel-viewport"
        ref={emblaRef}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Lista de produtos"
      >
        <div className="products-carousel-container">
          {products.map((product, index) => (
            <div
              className="products-carousel-slide"
              key={`${product.productName}-${index}`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="products-carousel-arrow products-carousel-arrow-prev"
        aria-label="Ver produtos anteriores"
        disabled={!canPrev}
        onClick={() => emblaApi?.scrollPrev()}
      >
        <ChevronLeftIcon />
      </button>

      <button
        type="button"
        className="products-carousel-arrow products-carousel-arrow-next"
        aria-label="Ver próximos produtos"
        disabled={!canNext}
        onClick={() => emblaApi?.scrollNext()}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
      />
    </svg>
  );
}
