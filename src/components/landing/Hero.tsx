import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.mp4.asset.json";
import logoLight from "@/assets/logo-light.png";

const Hero = () => {
  return (
    <section data-section-dark className="relative pt-32 pb-20 overflow-hidden bg-navy-deep min-h-[90vh] flex items-center">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={heroBg.url}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--navy-deep))]/80 via-[hsl(var(--navy))]/70 to-[hsl(var(--navy-deep))]/90" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src={logoLight}
            alt="TaPlaceGo"
            className="h-10 w-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
          />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-copper/10 text-copper text-sm font-bold mb-6 uppercase tracking-wider"
          >
            Lancement prochainement
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Votre parking <br />
            <span className="text-copper">devient collaboratif.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/70 mb-10 max-w-lg leading-relaxed"
          >
            La plateforme collaborative qui simplifie le stationnement urbain en connectant les propriétaires de places et les conducteurs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#cta"
              className="bg-copper hover:brightness-90 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-copper/20 transition-all hover:-translate-y-1 hover:scale-[1.02] active:scale-95 text-center"
            >
              Rejoindre la liste d'attente
            </a>
            <a
              href="#how-it-works"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all text-center"
            >
              Découvrir le concept
            </a>
          </motion.div>
        </motion.div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default Hero;
