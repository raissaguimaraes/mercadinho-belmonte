import {
  AboutPreview,
  Features,
  Footer,
  Header,
  Hero,
  ProductCategories,
  TopBar,
  WhatsAppCTA,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <Features />
      <ProductCategories />
      <WhatsAppCTA />
      <AboutPreview />
      <Footer />
    </>
  );
}