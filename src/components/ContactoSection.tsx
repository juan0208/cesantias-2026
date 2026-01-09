import { MessageCircle, Mail, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactos = [
  {
    tipo: "WhatsApp 1",
    valor: "318 051 1458",
    link: "https://wa.link/vyn0dk",
    icon: MessageCircle,
    className: "bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground",
  },
  {
    tipo: "WhatsApp 2",
    valor: "318 051 1459",
    link: "https://wa.link/6qy7ao",
    icon: MessageCircle,
    className: "bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground",
  },
  {
    tipo: "Correo Electrónico",
    valor: "cesantias.rapidas02@gmail.com",
    link: "mailto:cesantias.rapidas02@gmail.com",
    icon: Mail,
    className: "bg-primary hover:bg-primary/90 text-primary-foreground",
  },
  {
    tipo: "Facebook",
    valor: "Cesantías Rápidas",
    link: "https://www.facebook.com/Cesantias2022",
    icon: Facebook,
    className: "bg-accent hover:bg-accent/90 text-accent-foreground",
  },
  {
    tipo: "Instagram",
    valor: "@cesantias2022",
    link: "https://www.instagram.com/cesantias2022",
    icon: Instagram,
    className: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white",
  },
];

const ContactoSection = () => {
  return (
    <section id="contacto" className="py-16 px-4 bg-card">
      <div className="container max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-accent mb-4">
          Contáctanos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Estamos disponibles para atenderte por cualquiera de estos medios
        </p>
        
        <div className="grid gap-4">
          {contactos.map((contacto) => (
            <Card 
              key={contacto.valor} 
              className="border border-border hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${contacto.className}`}>
                      <contacto.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contacto.tipo}</p>
                      <p className="font-semibold text-foreground">{contacto.valor}</p>
                    </div>
                  </div>
                  <Button 
                    asChild
                    className={contacto.className}
                  >
                    <a href={contacto.link} target="_blank" rel="noopener noreferrer">
                      Contactar
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
