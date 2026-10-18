import { MapPin, Phone } from "lucide-react";

import { company } from "@/constants/company";
import { theme } from "@/constants/theme";

export function TopBar() {
  return (
    <div
      className="text-white"
      style={{
        backgroundColor: theme.colors.primary.darkGreen,
      }}
    >
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-sm md:px-6">
        <div className="hidden items-center gap-2 md:flex">
          <MapPin size={14} />

          <span>
            {company.address.neighborhood},{" "}
            {company.address.city} - {company.address.state}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Phone size={14} />

          <span>{company.phone}</span>
        </div>
      </div>
    </div>
  );
}