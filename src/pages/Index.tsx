import HeroSection from "@/components/HeroSection";
import FondosSection from "@/components/FondosSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import FAQSection from "@/components/FAQSection";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FondosSection />
      <BeneficiosSection />
      <FAQSection />
      <ContactoSection />
      <Footer />
    </main>
  );
};

export default Index;
