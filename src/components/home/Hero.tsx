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
            Hortifruti de qualidade em Boa Viagem
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Frutas, verduras e legumes frescos todos os dias para você e sua
            família.
          </p>

          <div className="mt-8">
            <WhatsAppButton label="Faça seu pedido" />
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/variedadeFrutas.jpg"
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