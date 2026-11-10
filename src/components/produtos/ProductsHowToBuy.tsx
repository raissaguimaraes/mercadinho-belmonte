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
            Fale com nossa equipe e receba um atendimento próximo e atencioso.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-xl bg-green-100 p-3 text-green-700">
                    <Icon size={24} />
                  </div>

                  <span className="text-sm font-semibold text-green-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}