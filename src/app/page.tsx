import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function HomePage() {
  return (
    <main className="p-10">
      <h1 className="text-5xl font-bold">
        Mercadinho Belmonte
      </h1>

      <p className="mt-4">
        Frutas, verduras e legumes frescos em Boa Viagem, Recife.
      </p>

      <div className="mt-8">
        <WhatsAppButton />
      </div>
    </main>
  );
}