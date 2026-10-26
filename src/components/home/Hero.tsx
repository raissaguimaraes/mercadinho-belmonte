import Image from "next/image";

import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Mercadinho Belmonte
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-6xl">
            Mais perto de você.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Produtos frescos, atendimento próximo e a confiança
            de quem faz parte da comunidade.
          </p>

          <div className="mt-8">
            <WhatsAppButton label="Faça seu pedido" />
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/home/fachada.jpg"
            alt="Frutas e verduras frescas"
            width={600}
            height={600}
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}