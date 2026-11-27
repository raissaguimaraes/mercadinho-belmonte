"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
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
              className="h-auto max-h-20 w-auto"
            />
          </Link>

          {/* Menu Desktop */}
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

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <WhatsAppButton label="Faça seu Pedido" />
          </div>

          {/* Botão Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-slate-700 md:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {open && (
          <div className="border-t py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="font-medium text-slate-700"
              >
                Home
              </Link>

              <Link
                href="/produtos"
                onClick={() => setOpen(false)}
                className="font-medium text-slate-700"
              >
                Produtos
              </Link>

              <Link
                href="/sobre"
                onClick={() => setOpen(false)}
                className="font-medium text-slate-700"
              >
                Sobre
              </Link>

              <Link
                href="/contato"
                onClick={() => setOpen(false)}
                className="font-medium text-slate-700"
              >
                Contato
              </Link>

              <div className="pt-2">
                <WhatsAppButton label="Faça seu Pedido" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}