"use client";

import useEmblaCarousel from "embla-carousel-react";

type Product = {
  name: string;
  image: string;
};

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({
  products,
}: ProductCarouselProps) {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: "start",
  });

  return (
    <div
      className="overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex gap-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="min-w-[220px] sm:min-w-[260px]"
          >
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-slate-900">
                  {product.name}
                </h3>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}