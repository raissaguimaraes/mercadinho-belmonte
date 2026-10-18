import {
  AboutPreview,
  Features,
  Hero,
  ProductCategories,
  WhatsAppCTA,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ProductCategories />
      <WhatsAppCTA />
      <AboutPreview />
    </>
  );
}