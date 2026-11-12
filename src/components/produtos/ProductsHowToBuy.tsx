import {
  CheckCircle2,
  MessageCircle,
  PackageCheck,
} from "lucide-react";

export function ProductsHowToBuy() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Fale pelo WhatsApp",
      description:
        "Entre em contato para consultar disponibilidade e tirar dúvidas.",
    },
    {
      icon: PackageCheck,
      title: "Confirme seu pedido",
      description:
        "Nossa equipe ajudará você a selecionar os produtos desejados.",
    },
    {
      icon: CheckCircle2,
      title: "Retire ou combine a entrega",
      description:
        "Escolha a forma mais prática para receber suas compras.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Como Comprar
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Comprar no Belmonte é simples
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Fale com nossa equipe e receba um atendimento próximo e
            atencioso.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                {/* Número */}
                <div className="mb-6">
                  <span className="text-lg font-bold text-green-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Conteúdo Centralizado */}
                <div className="text-center">
                  <div className="mb-5 flex justify-center">
                    <div className="rounded-xl bg-green-100 p-4 text-green-700">
                      <Icon size={28} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}