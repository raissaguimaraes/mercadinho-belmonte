import { ProductCarousel } from "./ProductsCarousel";

type Product = {
  name: string;
  image: string;
};

interface ProductsCategorySectionProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

export function ProductsCategorySection({
  id,
  title,
  description,
  products,
}: ProductsCategorySectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 py-14"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-2 text-slate-600">
            {description}
          </p>
        </div>

        <ProductCarousel
          products={products}
        />
      </div>
    </section>
  );
}