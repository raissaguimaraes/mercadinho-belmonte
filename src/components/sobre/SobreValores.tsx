import {
  Heart,
  Handshake,
  Home,
  Leaf,
} from "lucide-react";

const valores = [
  {
    title: "Frescor",
    description:
      "Selecionamos produtos diariamente para você.",
    icon: Leaf,
    className:
      "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    title: "Confiança",
    description:
      "Construída cliente por cliente.",
    icon: Handshake,
    className:
      "bg-gradient-to-br from-amber-400 to-yellow-500",
  },
  {
    title: "Cuidado",
    description:
      "Atendimento humano e próximo.",
    icon: Heart,
    className:
      "bg-gradient-to-br from-red-500 to-rose-600",
  },
  {
    title: "Comunidade",
    description:
      "Somos parte da vida do bairro de Boa Viagem.",
    icon: Home,
    className:
      "bg-gradient-to-br from-orange-500 to-orange-600",
  },
];

export function SobreValores() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Nossos Valores
          </span>

          <h2 className="text-3xl font-bold text-slate-900 lg:text-5xl">
            O que guia o Mercadinho Belmonte todos os dias
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Mais do que vender produtos, acreditamos em
            relações de confiança, cuidado e atendimento
            próximo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {valores.map((valor) => {
            const Icon = valor.icon;

            return (
              <div
                key={valor.title}
                className={`${valor.className} rounded-3xl p-8 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1`}
              >
                <Icon
                  className="mb-6"
                  size={44}
                  strokeWidth={2}
                />

                <h3 className="mb-2 text-2xl font-bold">
                  {valor.title}
                </h3>

                <p className="max-w-xs text-white/90">
                  {valor.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}