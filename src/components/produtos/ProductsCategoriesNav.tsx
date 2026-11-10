import Link from "next/link";
import { productCategories } from "@/data/products";

export function ProductsCategoriesNav() {
  return (
    <section
      className="
        sticky
        top-[0px]
        z-40
        border-b
        bg-white
        shadow-sm
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          justify-center
          gap-2
          overflow-x-auto
          px-4
          py-4
        "
      >
        {productCategories.map((category) => (
          <Link
            key={category.id}
            href={`#${category.id}`}
            className="
              whitespace-nowrap
              rounded-full
              border
              border-slate-200
              px-4
              py-2
              text-sm
              font-medium
              text-slate-700
              transition
              hover:border-green-600
              hover:text-green-700
            "
          >
            {category.title}
          </Link>
        ))}
      </div>
    </section>
  );
}