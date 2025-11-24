import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(var(--background) / 0.92), hsl(var(--background) / 0.95)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="mb-6 text-5xl font-bold tracking-tight font-heading text-foreground md:text-7xl">
            Nambi Solutions
          </h1>
          <p className="mb-8 text-xl text-foreground/90 md:text-2xl max-w-2xl mx-auto font-medium">
            Opening India's Manufacturing Market for You
          </p>
          <p className="mb-12 text-lg text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to connect promising automation & robotics startups with India's growing manufacturing sector 
            and help build meaningful partnerships.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Expand to India
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
