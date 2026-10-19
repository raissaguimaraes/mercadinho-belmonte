import {
  ProdutosCategories,
  ProdutosGallery,
  ProdutosHero,
  ProdutosHowToBuy,
} from "@/components/produtos";

export default function ProdutosPage() {
  return (
    <>
      <ProdutosCategories />
      <ProdutosGallery />
      <ProdutosHowToBuy />
    </>
  );
}