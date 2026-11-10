import {
  Heart,
  Handshake,
  Home,
  Leaf,
} from "lucide-react";

const valores = [
  {
    title: "Frescor",
    description: "Selecionamos produtos diariamente para você.",
    icon: Leaf,
    className:
      "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    title: "Confiança",
    description: "Construída cliente por cliente.",
    icon: Handshake,
    className:
      "bg-gradient-to-br from-amber-400 to-yellow-500",
  },
  {
    title: "Cuidado",
    description: "Atendimento humano e próximo.",
    icon: Heart,
    className:
      "bg-gradient-to-br from-red-500 to-rose-600",
  },
  {
    title: "Comunidade",
    description: "Parte da vida do bairro de Boa Viagem.",
    icon: Home,
    className:
      "bg-gradient-to-br from-orange-500 to-orange-600",
  },
];

export function SobreValores() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Nossos Valores
          </span>

          <h2 className="text-3xl font-bold text-slate-900 lg:text-5xl">
            O que guia o Mercadinho Belmonte todos os dias
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Mais do que vender produtos, acreditamos em relações de
            confiança, cuidado e atendimento próximo.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {valores.map((valor) => {
            const Icon = valor.icon;

            return (
              <div
                key={valor.title}
                className={`
                  ${valor.className}
                  rounded-2xl
                  p-5
                  text-white
                  text-center
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  flex
                  flex-col
                  items-center
                  justify-center
                  min-h-[180px]
                `}
              >
                <Icon
                  size={30}
                  strokeWidth={2.2}
                  className="mb-3"
                />

                <h3 className="mb-2 text-xl font-bold">
                  {valor.title}
                </h3>

                <p className="max-w-[180px] text-sm leading-relaxed text-white/90">
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