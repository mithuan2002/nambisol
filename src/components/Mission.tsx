import { Globe, Users, Rocket } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We bridge the gap between innovative automation & robotics startups and India's vast manufacturing sector. 
              Our mission is to accelerate global innovation in Indian manufacturing by creating strategic partnerships 
              that drive mutual growth and technological advancement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              <div className="inline-flex p-5 bg-primary/10 rounded-full mb-4">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Market Knowledge
              </h3>
              <p className="text-muted-foreground">
                Deep understanding of Indian manufacturing dynamics, regional nuances, and regulatory landscape.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              <div className="inline-flex p-5 bg-accent/10 rounded-full mb-4">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Trusted Network
              </h3>
              <p className="text-muted-foreground">
                Extensive connections with manufacturers, industry leaders, and decision-makers across India.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <div className="inline-flex p-5 bg-primary/10 rounded-full mb-4">
                <Rocket className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Proven Results
              </h3>
              <p className="text-muted-foreground">
                Track record of successful market entries and partnerships that deliver measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
