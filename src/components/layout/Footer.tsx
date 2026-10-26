import Link from "next/link";
import {
  Camera,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { company } from "@/constants/company";
import { theme } from "@/constants/theme";
import { CurrentYear } from "../home/CurrentYear";

export function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        backgroundColor: theme.colors.primary.darkGreen,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_0.8fr]">
          {/* Logo + Localização + Mapa */}
          <div className="max-w-md">
            <h3 className="text-4xl font-bold text-white">
              {company.name}
            </h3>

            <p className="mt-3 text-white/80">
              Mercado de bairro com atendimento próximo e
              produtos selecionados para a rotina da sua
              família.
            </p>

            <Link
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-white/80 transition hover:text-white"
            >
              <MapPin size={16} />

              <span>
                {company.address.neighborhood},{" "}
                {company.address.city} -{" "}
                {company.address.state}
              </span>
            </Link>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white">
              <iframe
                src={company.mapEmbedUrl}
                title="Mapa Mercadinho Belmonte"
                loading="lazy"
                className="h-44 w-full border-0"
              />
            </div>

            <Link
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-white underline underline-offset-4"
            >
              Ver rota no Google Maps
            </Link>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xl font-semibold">
              Contato e Atendimento
            </h4>

            <div className="mt-6 space-y-6">
              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="mt-1 shrink-0"
                />

                <div>
                  <Link
                    href={company.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    <p className="text-white/90">
                      {company.phone}
                    </p>
                  </Link>

                  <p className="text-sm text-white/60">
                    Atendimento via WhatsApp
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0"
                />

                <div className="text-white/90">
                  <p>
                    {company.address.street},{" "}
                    {company.address.number}
                  </p>

                  <p>
                    {company.address.neighborhood}
                  </p>

                  <p>
                    {company.address.city} -{" "}
                    {company.address.state}
                  </p>

                  <p>
                    CEP {company.address.zipCode}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock3
                  size={18}
                  className="mt-1 shrink-0"
                />

                <div className="space-y-5">
                  <div>
                    <p className="font-medium text-white">
                      Loja Física
                    </p>

                    <p className="mt-1 text-white/80">
                      {
                        company.hours.store
                          .mondayToSaturday.label
                      }
                    </p>

                    <p className="text-sm text-white/60">
                      {
                        company.hours.store
                          .mondayToSaturday.opening
                      }
                      {" às "}
                      {
                        company.hours.store
                          .mondayToSaturday.closing
                      }
                    </p>

                    <p className="mt-2 text-white/80">
                      {company.hours.store.sunday.label}
                    </p>

                    <p className="text-sm text-white/60">
                      {
                        company.hours.store.sunday
                          .opening
                      }
                      {" às "}
                      {
                        company.hours.store.sunday
                          .closing
                      }
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-white">
                      Delivery
                    </p>

                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-white/80">
                          Pedidos
                        </p>

                        <p className="text-sm text-white/60">
                          {
                            company.hours.delivery
                              .orderWindow.opening
                          }
                          {" às "}
                          {
                            company.hours.delivery
                              .orderWindow.closing
                          }
                        </p>
                      </div>

                      <div>
                        <p className="text-white/80">
                          Entregas
                        </p>

                        <p className="text-sm text-white/60">
                          {
                            company.hours.delivery
                              .deliveryWindow.opening
                          }
                          {" às "}
                          {
                            company.hours.delivery
                              .deliveryWindow.closing
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-xl font-semibold">
              Navegação
            </h4>

            <nav className="mt-6 flex flex-col gap-4">
              <Link
                href="/"
                className="text-white/80 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/produtos"
                className="text-white/80 transition hover:text-white"
              >
                Produtos
              </Link>

              <Link
                href="/sobre"
                className="text-white/80 transition hover:text-white"
              >
                Sobre
              </Link>

              <Link
                href="/contato"
                className="text-white/80 transition hover:text-white"
              >
                Contato
              </Link>
            </nav>

            <div className="mt-10">
              <h5 className="mb-4 font-medium">
                Redes Sociais
              </h5>

              <div className="flex gap-4">
                <Link
                  href={company.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 p-2 text-white/80 transition hover:text-white"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </Link>

                <Link
                  href={
                    company.socials.instagram || "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 p-2 text-white/80 transition hover:text-white"
                  aria-label="Instagram"
                >
                  <Camera size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/50">
            Loja física: Dinheiro, Pix, Cartão de Débito,
            Cartão de Crédito e Vale Alimentação.
            Delivery: Pix, Cartão de Débito e Cartão de
            Crédito.
          </p>

          <div className="mt-4 text-center text-sm text-white/60">
            © <CurrentYear /> {company.name}. Todos os
            direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}