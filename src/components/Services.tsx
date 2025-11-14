import { Card } from "@/components/ui/card";
import { MapPin, Handshake, TrendingUp } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Market Entry Strategy",
    description: "Navigate the Indian manufacturing landscape with confidence. We provide market insights, regulatory guidance, and entry strategies tailored for automation and robotics startups."
  },
  {
    icon: Handshake,
    title: "Partnership Development",
    description: "Connect with the right manufacturing partners. We facilitate introductions, build relationships, and establish strategic partnerships that accelerate your market presence."
  },
  {
    icon: TrendingUp,
    title: "Growth Advisory",
    description: "Scale your business in India with expert guidance. From pilot projects to full-scale deployment, we help you navigate challenges and seize opportunities in the market."
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
            What We Do?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridging automation & robotics startups with India's thriving manufacturing ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-2xl">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-3 text-card-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
