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
    },
    {
      title: "Mercearia",
      icon: ShoppingBasket,
    },
    {
      title: "Frios",
      icon: Milk,
    },
    {
      title: "Açougue",
      icon: Beef,
    },
    {
      title: "Bebidas",
      icon: Wine,
    },
    {
      title: "Limpeza",
      icon: Sparkles,
    },
    {
      title: "Utilidades",
      icon: Package,
    },
    {
      title: "Ração",
      icon: Dog,
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
            Além do hortifruti, você encontra uma variedade de produtos para sua casa e sua família.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Icon size={28} />
                </div>

                <h3 className="font-semibold text-slate-900">
                  {category.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}