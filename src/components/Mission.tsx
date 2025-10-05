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
              We don't just provide services—we become your partner in success. 
              Our passion for problem-solving drives us to dig deeper, think smarter, 
              and deliver solutions that truly make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              <div className="inline-flex p-5 bg-primary/10 rounded-full mb-4">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Client-Focused
              </h3>
              <p className="text-muted-foreground">
                Your goals become our goals. We measure success by your results.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              <div className="inline-flex p-5 bg-accent/10 rounded-full mb-4">
                <Heart className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Passionate
              </h3>
              <p className="text-muted-foreground">
                We're genuinely excited about solving complex challenges.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <div className="inline-flex p-5 bg-primary/10 rounded-full mb-4">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2 text-foreground">
                Results-Driven
              </h3>
              <p className="text-muted-foreground">
                We focus on delivering measurable impact and tangible outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
