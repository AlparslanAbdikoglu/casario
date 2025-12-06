import ServiceCard from "./ServiceCard";
import installationImage from "@/assets/service-installation.jpg";
import maintenanceImage from "@/assets/service-maintenance.jpg";
import productsImage from "@/assets/service-products.jpg";

const services = [
  {
    image: installationImage,
    title: "Telepítés",
    description: "Professzionális klíma telepítés otthonok és vállalkozások számára. Mindent megoldunk a készülék kiválasztásától a végső beüzemelésig.",
    features: [
      "Ingyenes helyszíni felmérés",
      "Energiahatékony készülékek",
      "Aznapi telepítés lehetséges",
      "5 év garancia"
    ]
  },
  {
    image: maintenanceImage,
    title: "Karbantartás",
    description: "A rendszeres karbantartás biztosítja klímája hatékony működését. Előzze meg a meghibásodásokat és hosszabbítsa meg készüléke élettartamát.",
    features: [
      "Átfogó állapotfelmérés",
      "Szűrőcsere",
      "Hűtőközeg ellenőrzés",
      "Teljesítmény optimalizálás"
    ]
  },
  {
    image: productsImage,
    title: "Termékek",
    description: "Minőségi klímaberendezések vezető márkáktól. Találja meg a tökéletes megoldást az Ön igényeire.",
    features: [
      "Prémium márkák",
      "Versenyképes árak",
      "Kiterjesztett garancia",
      "Szállítás és beszerelés"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Szolgáltatásaink
          </h2>
          <p className="text-lg text-muted-foreground">
            Átfogó klímaszolgáltatások az Ön igényeire szabva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard 
              key={service.title} 
              {...service} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
