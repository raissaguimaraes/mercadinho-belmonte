"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  id?: string;
  name: string;
  image: string;
};

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({
  products,
}: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <div className="relative">
      {/* Controles */}
      <div className="mb-6 flex justify-end gap-2">
        <button
          onClick={scrollPrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-green-600 hover:text-green-600"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={scrollNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-green-600 hover:text-green-600"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Carousel */}
      <div
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex gap-5">
          {products.map((product) => (
            <div
              key={product.id ?? `${product.name}-${product.image}`}
              className="min-w-[220px] flex-[0_0_auto]"
            >
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {product.name}
                  </h3>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}