import Link from "next/link";
import {
  Apple,
  Beef,
  Dog,
  Milk,
  Package,
  ShoppingBasket,
  Sparkles,
  Wine,
} from "lucide-react";

export function ProductCategories() {
  const categories = [
    {
      title: "Hortifruti",
      icon: Apple,
      href: "/produtos#hortifruti",
    },
    {
      title: "Mercearia",
      icon: ShoppingBasket,
      href: "/produtos#mercearia",
    },
    {
      title: "Frios",
      icon: Milk,
      href: "/produtos#frios",
    },
    {
      title: "Açougue",
      icon: Beef,
      href: "/produtos#acougue",
    },
    {
      title: "Bebidas",
      icon: Wine,
      href: "/produtos#bebidas",
    },
    {
      title: "Limpeza",
      icon: Sparkles,
      href: "/produtos#limpeza",
    },
    {
      title: "Utilidades",
      icon: Package,
      href: "/produtos#utilidades",
    },
    {
      title: "Ração",
      icon: Dog,
      href: "/produtos#racao",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Tudo para o seu dia a dia
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Além do hortifruti, você encontra uma variedade de
            produtos para sua casa e sua família.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group"
              >
                <article
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-6
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-green-200
                    hover:shadow-md
                    hover:bg-white
                  "
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700 transition-all group-hover:bg-green-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="font-semibold text-slate-900">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Ver produtos
                  </p>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}