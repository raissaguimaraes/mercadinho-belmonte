import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function ContatoWhatsApp() {
  return (
    <section className="pb-16 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="rounded-[32px] bg-green-600 p-10 text-center text-white">
          <h2 className="text-3xl font-bold">
            Fale conosco pelo WhatsApp
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-green-50">
            Tire dúvidas, consulte produtos ou envie seu pedido
            diretamente para nossa equipe.
          </p>

          <Link
            href="https://wa.me/5581997510044"
            target="_blank"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-green-700"
          >
            <MessageCircle size={20} />
            Iniciar Conversa
          </Link>
        </div>
      </div>
    </section>
  );
}