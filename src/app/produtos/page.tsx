import { productCategories } from "@/data/products";

import {
  ProductsCategorySection,
  ProductsHowToBuy,
  ProductsCategoriesNav,
} from "@/components/produtos";

export default function ProductsPage() {
  return (
    <>
      <ProductsHowToBuy />

      <ProductsCategoriesNav />

      {productCategories.map((category) => (
        <ProductsCategorySection
          key={category.id}
          id={category.id}
          title={category.title}
          description={category.description}
          products={category.products}
        />
      ))}
    </>
  );
}