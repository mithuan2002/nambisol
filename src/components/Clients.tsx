import { Building2, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import budibaseLogo from "@/assets/budibase-logo.png";
import buildaiLogo from "@/assets/buildai-logo.png";

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
        {/* Channel Partner Highlight */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Official Channel Partner
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading">
            Nambi Solutions is the recognized channel partner of
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-16">
            <div className="bg-background rounded-2xl shadow-lg p-8 flex items-center justify-center min-w-[200px]">
              <img src={budibaseLogo} alt="Budibase logo" className="h-12 md:h-16 object-contain" />
            </div>
            <div className="bg-background rounded-2xl shadow-lg p-8 flex items-center justify-center min-w-[200px]">
              <img src={buildaiLogo} alt="Build.ai logo" className="h-12 md:h-16 object-contain" />
            </div>
          </div>
        </div>

        {/* Clients & Partners Carousel + Associations */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Clients Carousel */}
          <Card className="border-2 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold font-heading">Trusted Clients</h3>
              </div>
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {clients.map((client, index) => (
                    <CarouselItem key={index}>
                      <div className="flex items-center justify-center h-24 text-lg font-medium text-foreground/90">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                          {client}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4" />
                <CarouselNext className="-right-4" />
              </Carousel>
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
