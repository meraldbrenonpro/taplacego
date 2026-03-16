import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="cta" className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-navy rounded-[2rem] p-8 md:p-16 text-center text-primary-foreground relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/10 rounded-full -ml-32 -mb-32 blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à transformer votre stationnement ?
          </h2>
          <p className="text-lavender text-lg mb-10 max-w-2xl mx-auto">
            Soyez parmi les premiers à tester TaPlaceGo dans votre ville.
            Inscrivez-vous pour recevoir une invitation exclusive au lancement.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  aria-label="Adresse email"
                  className="flex-1 px-6 py-4 rounded-xl text-navy bg-primary-foreground focus:outline-none focus:ring-4 focus:ring-emerald/30 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-emerald hover:brightness-90 text-primary-foreground px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
                >
                  Je m'inscris{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-emerald/20 border border-emerald/30 p-6 rounded-2xl inline-block"
              >
                <div className="flex items-center gap-3 text-emerald font-bold text-xl">
                  <CheckCircle2 /> Bienvenue dans l'aventure !
                </div>
                <p className="text-lavender mt-2">
                  On vous contacte très bientôt pour le lancement.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-6 text-sm text-lavender/60">
            Pas de spam. Juste les informations de lancement et des avantages
            exclusifs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
