import { Zap, ShieldCheck, Banknote } from "lucide-react";

const beneficios = [
  {
    icon: Zap,
    titulo: "Rápido",
    descripcion: "Proceso ágil y eficiente para que recibas tu dinero lo antes posible",
  },
  {
    icon: ShieldCheck,
    titulo: "Seguro",
    descripcion: "Trámites confiables y transparentes, sin riesgos para ti",
  },
  {
    icon: Banknote,
    titulo: "Sin Anticipos",
    descripcion: "No cobramos anticipos. Pagas solo cuando recibes tu dinero",
  },
];

const BeneficiosSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="container max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-accent mb-12">
          ¿Por qué Elegirnos?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {beneficios.map((beneficio) => (
            <div 
              key={beneficio.titulo} 
              className="flex flex-col items-center text-center p-6"
            >
              <div className="bg-primary p-4 rounded-2xl mb-6 shadow-lg">
                <beneficio.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-xl text-accent mb-3">{beneficio.titulo}</h3>
              <p className="text-muted-foreground">{beneficio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
