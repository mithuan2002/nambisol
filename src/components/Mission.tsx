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
              We're passionate about connecting innovative automation & robotics startups with India's manufacturing sector. 
              We're building a bridge that brings fresh technology to manufacturers and new opportunities to startups—one partnership at a time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              <div className="inline-flex p-5 bg-primary/10 rounded-full mb-4">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Fresh Energy
              </h3>
              <p className="text-muted-foreground">
                We bring enthusiasm and a hands-on approach to exploring India's manufacturing landscape with you.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              <div className="inline-flex p-5 bg-accent/10 rounded-full mb-4">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Building Bridges
              </h3>
              <p className="text-muted-foreground">
                We're actively growing our network and making genuine connections in India's manufacturing community.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <div className="inline-flex p-5 bg-primary/10 rounded-full mb-4">
                <Rocket className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Startup Spirit
              </h3>
              <p className="text-muted-foreground">
                As a young company ourselves, we understand the challenges startups face and we're here to grow together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
