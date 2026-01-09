import { Card, CardContent } from "@/components/ui/card";
import colfondosLogo from "../assets/colfondos.png";
import fnaLogo from "../assets/fna.png";
import porvenirLogo from "../assets/porvenir.png";
import proteccionLogo from "../assets/proteccion.jpg";

const fondos = [
  { nombre: "Porvenir", color: "bg-primary", logo: porvenirLogo },
  { nombre: "Protección", color: "bg-accent", logo: proteccionLogo },
  { nombre: "Colfondos", color: "bg-primary", logo: colfondosLogo },
  { nombre: "FNA", color: "bg-accent", logo: fnaLogo },
];

const FondosSection = () => {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="container max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-accent mb-4">
          Fondos con los que Trabajamos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          5 años de experiencia gestionando retiros de cesantías en los principales fondos de cesantías de Colombia
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {fondos.map((fondo) => (
            <Card
              key={fondo.nombre}
              className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6 flex flex-col items-center text-center min-h-[220px]">
                <div className="p-4 mb-6 bg-white flex items-center justify-center h-36 w-full max-w-[320px] shadow-sm">
                  <img src={fondo.logo} alt={fondo.nombre} className="h-28 md:h-36 w-auto object-contain" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{fondo.nombre}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FondosSection;
