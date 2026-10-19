import Image from "next/image";

const fotos = [
  {
    src: "/images/sobre/equipecentral.jpg",
    alt: "Equipe Belmonte",
    featured: true,
  },
  {
    src: "/images/sobre/equipedupla.jpg",
    alt: "Atendimento",
  },
  {
    src: "/images/sobre/equipeHortifruti.jpg",
    alt: "Hortifruti",
  },
  {
    src: "/images/sobre/equipeDElivery.jpg",
    alt: "Entrega",
  },
  {
    src: "/images/sobre/equipe2.jpg",
    alt: "Açougue",
  },
];

export function SobreEquipe() {
  const [principal, ...galeria] = fotos;

  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Nossa Equipe
            </span>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Quem faz acontecer todos os dias
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Nosso maior diferencial não está apenas
                nos produtos. Está nas pessoas que
                atendem, cuidam, organizam e entregam o
                melhor para você todos os dias.
              </p>

              <p>
                Somos uma equipe que acredita na
                proximidade, no cuidado e na confiança
                construída em cada atendimento.
              </p>
            </div>

            <div className="mt-8 border-l-4 border-green-600 pl-4">
              <p className="italic text-green-700">
                Pessoas que cuidam de pessoas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-3xl">
              <Image
                src={principal.src}
                alt={principal.alt}
                width={800}
                height={500}
                className="h-[320px] w-full object-cover"
              />
            </div>

            {galeria.map((foto) => (
              <div
                key={foto.src}
                className="overflow-hidden rounded-2xl"
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  width={400}
                  height={300}
                  className="h-[180px] w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}