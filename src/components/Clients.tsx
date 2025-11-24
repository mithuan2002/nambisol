import { Building2, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const clients = [
  "Suguna Pumps and Motors",
  "Dharani Pumps",
  "Mahendra Pumps",
  "Indo Shell Cast",
  "Yathi Pumps",
];

const associations = [
  { name: "SIEMA", full: "The Southern India Engineering Manufacturers' Association" },
  { name: "TEAMA", full: "Tiruppur Exporters And Manufacturing Association" },
  { name: "CIA", full: "CHINNAVEDAMPATTI INDUSTRIAL ASOOCATION" },
];

const Clients = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-heading">Our Clients & Partners</h2>
          <p className="text-muted-foreground text-lg">
            Building relationships with leading manufacturers and industrial associations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Clients Section */}
          <Card className="border-2 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold font-heading">Trusted Clients</h3>
              </div>
              <ul className="space-y-3">
                {clients.map((client, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-foreground/90 hover:text-primary transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {client}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Associations Section */}
          <Card className="border-2 hover:border-accent/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold font-heading">Association Partners</h3>
              </div>
              <div className="space-y-4">
                {associations.map((association, index) => (
                  <div
                    key={index}
                    className="group hover:translate-x-2 transition-transform duration-200"
                  >
                    <div className="font-semibold text-lg text-accent group-hover:text-accent/80 transition-colors">
                      {association.name}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {association.full}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Clients;
