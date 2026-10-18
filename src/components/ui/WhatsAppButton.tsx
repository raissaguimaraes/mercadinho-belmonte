import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { company } from "@/constants/company";

type WhatsAppButtonProps = {
  className?: string;
  label?: string;
};

export function WhatsAppButton({
  className,
  label = "Faça seu pedido no WhatsApp",
}: WhatsAppButtonProps) {
  return (
    <Link
      href={company.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        bg-green-600
        px-5
        py-3
        text-sm
        font-medium
        text-white
        transition-colors
        hover:bg-green-700
        ${className ?? ""}
      `}
    >
      <MessageCircle size={18} />

      <span>{label}</span>
    </Link>
  );
}