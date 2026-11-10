import Link from "next/link";

const categorias = [
  "hortifruti",
  "acougue",
  "frios",
  "mercearia",
  "bebidas",
  "limpeza",
  "utilidades",
  "racao",
];

export function ProductsCategoriesNav() {
  return (
    <section className="sticky top-0 z-30 border-y bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-6 py-4">
        {categorias.map((categoria) => (
          <Link
            key={categoria}
            href={`#${categoria}`}
            className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-medium transition hover:border-green-600 hover:text-green-700"
          >
            {categoria}
          </Link>
        ))}
      </div>
    </section>
  );
}