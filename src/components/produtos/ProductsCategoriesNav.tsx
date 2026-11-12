import Link from "next/link";
import { productCategories } from "@/data/products";

export function ProductsCategoriesNav() {
  return (
    <section
      className="
        sticky
        top-[118px]
        z-40
        border-b
        border-slate-200
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
          gap-3
          overflow-x-auto
          px-4
          py-3
        "
      >
        {productCategories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.id}
              href={`#${category.id}`}
              className="
                flex
                items-center
                gap-2
                whitespace-nowrap
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-slate-700
                transition-all
                hover:border-green-600
                hover:bg-green-50
                hover:text-green-700
              "
            >
              <Icon size={16} />
              <span>{category.label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}