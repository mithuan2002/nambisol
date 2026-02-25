import { Card } from "@/components/ui/card";
import { Target, Megaphone, Network } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "GTM Strategy",
    description: "We work with you to craft and execute a go-to-market strategy tailored for your B2B SaaS product—from ICP definition to channel selection and launch playbooks."
  },
  {
    icon: Megaphone,
    title: "Brand Positioning",
    description: "Stand out in a crowded market. We help you define your narrative, refine messaging, and position your brand so it resonates with the right buyers."
  },
  {
    icon: Network,
    title: "Partner Network Building",
    description: "Growth doesn't happen alone. We help you identify, engage, and build a network of strategic partners—resellers, integrators, and ecosystem allies."
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Helping B2B SaaS companies go to market with confidence
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
