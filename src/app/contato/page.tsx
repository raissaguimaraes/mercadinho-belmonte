import {
  ContatoCanais,
  ContatoWhatsApp,
  ContatoConteudo,
} from "@/components/contato";

export default function ContatoPage() {
  return (
    <main>
      <ContatoConteudo />
      <ContatoCanais />
      <ContatoWhatsApp />
    </main>
  );
}