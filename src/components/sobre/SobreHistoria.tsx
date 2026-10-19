import Image from "next/image";

export function SobreHistoria() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/sobre/equipeMercearia.jpg"
              alt="Fachada do Mercadinho Belmonte"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="max-w-xl">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Sobre nós
            </span>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Como tudo começou
            </h2>

            <div className="space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                O Mercadinho Belmonte nasceu com um propósito simples:
                oferecer produtos frescos, atendimento próximo e a confiança
                que faz a diferença no dia a dia das famílias de Boa Viagem.
              </p>

              <p>
                Mais do que um lugar para fazer compras, buscamos construir
                relações duradouras com nossos clientes, valorizando a qualidade
                dos produtos e o cuidado em cada atendimento.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-2xl font-medium italic text-green-700">
                Tudo começa com boas pessoas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}