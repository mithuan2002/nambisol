import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Let's Start a Conversation
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business challenges into opportunities?
            </p>
          </div>

          <Card className="p-12 bg-card border-border shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">mithuan137@gmail.com</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground">+91 96002 67509</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">Tiruppur, India</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
