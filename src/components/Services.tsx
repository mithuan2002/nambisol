import { Card } from "@/components/ui/card";
import { Settings, Network, LineChart } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Process Automation",
    description: "Streamline manufacturing operations with PLC programming, SCADA systems, and automated control solutions that reduce costs and improve productivity."
  },
  {
    icon: Network,
    title: "System Integration",
    description: "Seamlessly connect legacy equipment with modern systems. IIoT implementation, MES/ERP integration, and Industry 4.0 solutions for smart manufacturing."
  },
  {
    icon: LineChart,
    title: "Optimization & Analytics",
    description: "Data-driven insights and continuous improvement strategies. Real-time monitoring, predictive maintenance, and performance optimization for maximum efficiency."
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
            End-to-end industrial automation expertise to modernize your manufacturing operations
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
