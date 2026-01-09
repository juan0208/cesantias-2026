import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin } from "lucide-react";

const preguntas = [
  {
    pregunta: "¿Cuánto tiempo tarda el proceso de retiro?",
    respuesta: "El tiempo varía según el fondo, pero generalmente el proceso toma entre 1 hora - 24 horas  una vez radicada la solicitud completa.",
  },
  {
    pregunta: "¿Qué documentos necesito para retirar mis cesantías?",
    respuesta: "Generalmente necesitas: cédula de ciudadanía, nombre completo, nit de la empresa.",
  },
  {
    pregunta: "¿Cuáles son los motivos válidos para retirar cesantías?",
    respuesta: "Los motivos más comunes son: compra de vivienda, mejoras al hogar, pago de estudios propios o de familiares, terminación del contrato laboral, y en algunos casos situaciones especiales autorizadas por ley.",
  },
  {
    pregunta: "¿Realmente no cobran anticipos?",
    respuesta: "Correcto. No cobramos ningún anticipo ni pago previo. Nuestros honorarios se acuerdan al final del proceso, una vez que hayas recibido tu dinero.",
  },
  {
    pregunta: "¿Trabajan con todos los fondos de cesantías?",
    respuesta: "Trabajamos con los principales fondos: Porvenir, Protección, Colfondos y el Fondo Nacional del Ahorro (FNA).",
  },
  {
    pregunta: "¿Cómo puedo iniciar el proceso?",
    respuesta: "Simplemente contáctanos por WhatsApp o cualquiera de nuestros canales. Te asesoramos sin compromiso y te explicamos los pasos a seguir según tu caso particular.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="container max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-accent mb-4">
          Preguntas Frecuentes
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Resolvemos tus dudas sobre el proceso de retiro de cesantías
        </p>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {preguntas.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {item.pregunta}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {item.respuesta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5 text-primary" />
          <span className="font-medium">Servicio disponible en toda Colombia 🇨🇴</span>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
