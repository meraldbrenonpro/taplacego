import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import Stats from "@/components/landing/Stats";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background antialiased selection:bg-emerald selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Stats />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
