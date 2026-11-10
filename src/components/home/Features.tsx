import {
  Apple,
  MapPin,
  RefreshCw,
  Users,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Apple,
      title: "Hortifruti Selecionado",
      description:
        "Frutas, verduras e legumes escolhidos com cuidado para garantir qualidade e frescor.",
    },
    {
      icon: RefreshCw,
      title: "Reposição Diária",
      description:
        "Recebemos novos produtos diariamente para oferecer sempre alimentos frescos.",
    },
    {
      icon: Users,
      title: "Atendimento Familiar",
      description:
        "Um mercado de bairro com atendimento próximo, atencioso e acolhedor.",
    },
    {
      icon: MapPin,
      title: "Em Boa Viagem",
      description:
        "Há mais de 4 anos atendendo clientes da região com confiança e qualidade.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20"> 
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Diferenciais
          </span>
      
          <h2 className="mt-4 text-4xl font-bold text-slate-700">
            Muito mais que um mercado de bairro
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Qualidade, frescor e atendimento próximo para tornar suas compras
            mais práticas no dia a dia.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-xl bg-green-100 p-3 text-green-700">
                    <Icon size={24} />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 text-center">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 text-center">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}