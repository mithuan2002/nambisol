import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
