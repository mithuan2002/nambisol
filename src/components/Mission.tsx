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
              We're passionate about helping B2B SaaS companies break through the noise. 
              From crafting sharp GTM strategies to building lasting partner ecosystems, we're here to turn great products into market leaders—one launch at a time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              <div className="inline-flex p-5 bg-primary/10 rounded-full mb-4">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Strategic Clarity
              </h3>
              <p className="text-muted-foreground">
                We bring sharp, data-driven thinking to help you define your market, audience, and winning strategy.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              <div className="inline-flex p-5 bg-accent/10 rounded-full mb-4">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Partnership Driven
              </h3>
              <p className="text-muted-foreground">
                We actively build and nurture partner networks that create real revenue channels for your SaaS product.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <div className="inline-flex p-5 bg-primary/10 rounded-full mb-4">
                <Rocket className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Founder Mindset
              </h3>
              <p className="text-muted-foreground">
                As builders ourselves, we understand the SaaS journey and bring hands-on energy to every engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
