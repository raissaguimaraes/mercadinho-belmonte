import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export function ContatoCanais() {
  return (
    <section className="pb-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border p-8">
            <MessageCircle className="mb-4 text-green-600" />

            <h3 className="mb-2 text-xl font-semibold">
              WhatsApp
            </h3>

            <p className="text-slate-600">
              (81) 99751-0044
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <Phone className="mb-4 text-green-600" />

            <h3 className="mb-2 text-xl font-semibold">
              Telefone
            </h3>

            <p className="text-slate-600">
              (81) 99751-0044
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <Mail className="mb-4 text-green-600" />

            <h3 className="mb-2 text-xl font-semibold">
              E-mail
            </h3>

            <p className="text-slate-600">
              contato@mercadinhobelmonte.com.br
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <MapPin className="mb-4 text-green-600" />

            <h3 className="mb-2 text-xl font-semibold">
              Endereço
            </h3>

            <p className="text-slate-600">
              Rua Antônio Vicente, 129
              <br />
              Boa Viagem - Recife/PE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}