import logo from "@/assets/logo-cesantias.png";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.link/6qy7ao", "_blank");
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-background to-secondary">
      <div className="container max-w-4xl text-center">
        <img 
          src={logo} 
          alt="Cesantías Rápidas" 
          className="w-48 md:w-64 mx-auto mb-8 drop-shadow-lg"
        />
        
        <h1 className="text-3xl md:text-5xl font-bold text-accent mb-4">
          Retiro de Cesantías
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-semibold mb-2">
          Rápido, Seguro y Sin Anticipos
        </p>
        
        <p className="text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">
          Tenemos 5 años de Experiencia gestionando tu retiro de cesantías de forma ágil y confiable. 
          Trabajamos con los principales fondos del país.
        </p>

        <ul className="text-muted-foreground text-base mb-8 max-w-2xl mx-auto space-y-3">
          <li className="flex items-center justify-center gap-3">
            <Check className="h-5 w-5 text-primary-foreground" />
            <span>Atención 24/7</span>
          </li>
          <li className="flex items-center justify-center gap-3">
            <Check className="h-5 w-5 text-primary-foreground" />
            <span>Acompañamiento personalizado</span>
          </li>
          <li className="flex items-center justify-center gap-3">
            <Check className="h-5 w-5 text-primary-foreground" />
            <span>Procesos rápidos y sencillos</span>
          </li>
        </ul>

        <Button 
          onClick={handleWhatsApp}
          size="lg"
          className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="mr-2 h-6 w-6" />
          Contáctanos por WhatsApp
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
