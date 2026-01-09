const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-accent text-accent-foreground">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-center text-center">
          
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Cesantías Rápidas. Todos los derechos reservados.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Retiro de cesantías: Porvenir, Protección, Colfondos y FNA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
