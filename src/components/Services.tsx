import { Card } from "@/components/ui/card";
import { MapPin, Handshake, TrendingUp } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Market Entry Support",
    description: "We're learning the Indian manufacturing landscape alongside you. Together, we'll explore opportunities and navigate entry strategies for your automation startup."
  },
  {
    icon: Handshake,
    title: "Partnership Building",
    description: "Let's connect you with manufacturing partners. We're building relationships and opening doors that help get your technology in front of the right people."
  },
  {
    icon: TrendingUp,
    title: "Growth Support",
    description: "Growing together in India. From initial conversations to pilot projects, we're here to support your journey and tackle challenges as they come."
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
            What We Do?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting automation & robotics startups with India's manufacturing opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-lg transition-shadow border-border bg-card"
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
