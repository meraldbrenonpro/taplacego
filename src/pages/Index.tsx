import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import DualTarget from "@/components/landing/DualTarget";
import ProductPreview from "@/components/landing/ProductPreview";
import Testimonials from "@/components/landing/Testimonials";
import Stats from "@/components/landing/Stats";
import FAQ from "@/components/landing/FAQ";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background antialiased selection:bg-copper selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <DualTarget />
        <ProductPreview />
        <Testimonials />
        <Stats />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
