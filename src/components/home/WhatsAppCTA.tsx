import { WhatsAppButton } from "@/components/WhatsAppButton";

export function WhatsAppCTA() {
  return (
    <section className="bg-green-700 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold text-white">
          Pronto para fazer suas compras?
        </h2>

        <p className="mt-4 text-lg text-green-100">
          Entre em contato pelo WhatsApp e consulte a disponibilidade dos produtos.
        </p>

        <div className="mt-8 flex justify-center">
          <WhatsAppButton label="Faça o seu pedido pelo nosso WhatsApp" className="border-2 border-white/20" />
        </div>
      </div>
    </section>
  );
}