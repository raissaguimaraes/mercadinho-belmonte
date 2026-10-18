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

export function ProdutosCategories() {
  const categories = [
    {
      title: "Hortifruti",
      icon: Apple,
      description:
        "Frutas, verduras e legumes frescos selecionados diariamente.",
    },
    {
      title: "Mercearia",
      icon: ShoppingBasket,
      description:
        "Itens essenciais para abastecer sua despensa no dia a dia.",
    },
    {
      title: "Frios",
      icon: Milk,
      description:
        "Queijos, presuntos, manteigas e diversas opções refrigeradas.",
    },
    {
      title: "Açougue",
      icon: Beef,
      description:
        "Carnes selecionadas para suas refeições e churrascos.",
    },
    {
      title: "Bebidas",
      icon: Wine,
      description:
        "Refrigerantes, sucos, águas e outras bebidas para toda a família.",
    },
    {
      title: "Limpeza",
      icon: Sparkles,
      description:
        "Produtos para manter sua casa limpa e organizada.",
    },
    {
      title: "Utilidades",
      icon: Package,
      description:
        "Itens úteis para facilitar as atividades do dia a dia.",
    },
    {
      title: "Ração",
      icon: Dog,
      description:
        "Alimentos e produtos para o bem-estar do seu pet.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Categorias
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Mais conveniência para suas compras
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Produtos selecionados para facilitar a rotina da sua família.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 inline-flex rounded-xl bg-green-100 p-3 text-green-700">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}