import {
  SobreHistoria,
  SobreEquipe,
  SobreValores,
  SobreDepoimentos,
} from "@/components/sobre";

export default function SobrePage() {
  return (
    <main className="bg-white">
      <SobreHistoria />
      <SobreEquipe />
      <SobreValores />
      <SobreDepoimentos />
    </main>
  );
}