import { Star } from "lucide-react";

const depoimentos = [
  {
    nome: "Beatriz Bia",
    cargo: "Cliente Google",
    rating: 5,
    comentario:
      "Visito sempre. Atendimento muito gentil, boa localização e frutas sempre frescas. É um lugar onde encontramos qualidade e cuidado em cada compra.",
  },
  {
    nome: "Simone Menezes",
    cargo: "Cliente Google",
    rating: 4,
    comentario:
      "Grande variedade de produtos e excelente atendimento. A equipe é simpática, prestativa e os preços costumam ser bastante competitivos.",
  },
  {
    nome: "Avaliação Google",
    cargo: "Cliente Google",
    rating: 5,
    comentario:
      "Boa variedade de produtos, ótimo atendimento e preços justos. Um verdadeiro mercadinho de bairro com excelente hortifruti.",
  },
];

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          className={
            index < rating
              ? "fill-amber-400 text-amber-400"
              : "text-slate-300"
          }
        />
      ))}
    </div>
  );
}

export function SobreDepoimentos() {
  return (
    <section className="bg-neutral-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            Avaliações Reais
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-5xl">
            O que nossos clientes dizem
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A confiança dos nossos clientes é construída todos os dias através de
            produtos frescos, atendimento próximo e cuidado em cada detalhe.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((depoimento) => (
            <article
              key={depoimento.nome}
              className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Rating rating={depoimento.rating} />

              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-slate-600">
                &ldquo;{depoimento.comentario}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-semibold text-white">
                  {depoimento.nome.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    {depoimento.nome}
                  </p>

                  <p className="text-sm text-slate-500">
                    {depoimento.cargo}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Depoimentos baseados em avaliações de clientes no Google.
          </p>
        </div>
      </div>
    </section>
  );
}