import { Wrench, Settings, ShoppingBag } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Wrench,
    title: "Installation",
    description: "Professional AC installation for homes and businesses. We handle everything from unit selection to final setup.",
    features: [
      "Free site assessment",
      "Energy-efficient units",
      "Same-day installation available",
      "5-year warranty included"
    ]
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Regular maintenance keeps your AC running efficiently. Prevent breakdowns and extend your system's lifespan.",
    features: [
      "Comprehensive inspection",
      "Filter replacement",
      "Refrigerant check",
      "Performance optimization"
    ]
  },
  {
    icon: ShoppingBag,
    title: "Products",
    description: "Quality air conditioning products from leading brands. Find the perfect solution for your space.",
    features: [
      "Top brand partnerships",
      "Competitive pricing",
      "Extended warranties",
      "Delivery & setup included"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive air conditioning solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              {...service} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
