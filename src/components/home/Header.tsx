import Image from "next/image";
import Link from "next/link";

import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          aria-label="Mercadinho Belmonte"
          className="flex items-center"
        >
          <Image
            src="/logo/logo.svg"
            alt="Mercadinho Belmonte"
            width={220}
            height={220}
            priority
            className="h-auto max-h-22 w-auto"
          />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          <Link
            href="/"
            className="font-medium text-slate-700 transition-colors hover:text-green-700"
          >
            Home
          </Link>

          <Link
            href="/produtos"
            className="font-medium text-slate-700 transition-colors hover:text-green-700"
          >
            Produtos
          </Link>

          <Link
            href="/sobre"
            className="font-medium text-slate-700 transition-colors hover:text-green-700"
          >
            Sobre
          </Link>

          <Link
            href="/contato"
            className="font-medium text-slate-700 transition-colors hover:text-green-700"
          >
            Contato
          </Link>
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton label="Faça seu Pedido" />
        </div>
      </div>
    </header>
  );
}