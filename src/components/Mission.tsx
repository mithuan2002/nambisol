import { Target, Heart, Zap } from "lucide-react";

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
              We empower manufacturers to achieve operational excellence through intelligent automation. 
              Our deep expertise in industrial systems and commitment to innovation helps you stay competitive 
              in an evolving manufacturing landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              <div className="inline-flex p-5 bg-primary/10 rounded-full mb-4">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Industry Expertise
              </h3>
              <p className="text-muted-foreground">
                Deep knowledge of manufacturing processes and automation technologies across diverse industries.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              <div className="inline-flex p-5 bg-accent/10 rounded-full mb-4">
                <Heart className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Innovation-Driven
              </h3>
              <p className="text-muted-foreground">
                Leveraging cutting-edge technology to keep your operations at the forefront of Industry 4.0.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <div className="inline-flex p-5 bg-primary/10 rounded-full mb-4">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Efficiency-Focused
              </h3>
              <p className="text-muted-foreground">
                Maximizing productivity and ROI through optimized automation solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
