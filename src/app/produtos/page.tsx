import {
  ProdutosCategories,
  ProdutosGallery,
  ProdutosHero,
  ProdutosHowToBuy,
} from "@/components/produtos";

export default function ProdutosPage() {
  return (
    <>
      <ProdutosHero />
      <ProdutosCategories />
      <ProdutosGallery />
      <ProdutosHowToBuy />
    </>
  );
}