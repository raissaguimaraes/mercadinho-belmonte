import Image from "next/image";

import { WhatsAppButton } from "@/components/WhatsAppButton";

export function ProdutosHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Nossos Produtos
          </span>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-6xl">
            Hortifruti selecionado, mercearia, frios, bebidas e diversos produtos
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Qualidade, praticidade e atendimento próximo para cuidar da sua casa e da sua família.
          </p>

          <div className="mt-8">
            <WhatsAppButton label="Consultar Produtos" />
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/barracadefrutas.jpg"
            alt="Produtos do Mercadinho Belmonte"
            width={900}
            height={700}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
