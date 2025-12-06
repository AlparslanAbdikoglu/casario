import { ArrowRight, Snowflake } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen hero-bg flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-primary/10">
              <Snowflake className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                Professional AC Services
              </span>
            </div>
          </div>

          <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-foreground">Stay Cool,</span>
            <br />
            <span className="text-gradient">Stay Comfortable</span>
          </h1>

          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert air conditioning installation, maintenance, and repairs. 
            We keep your home comfortable all year round with reliable, 
            energy-efficient solutions.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Book a Service
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
