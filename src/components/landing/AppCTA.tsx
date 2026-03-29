import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

const features = [
  "Réservation rapide où que tu sois",
  "Suivi en temps réel",
  "Géolocalisation et GPS intégrés",
  "Places et lieux favoris",
];

const AppCTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass-strong rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-copper/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-navy/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
            <motion.img src={logoDark} alt="TaPlaceGo" className="h-8 w-auto mb-6" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-8">
              Télécharge l'app pour une expérience optimisée
            </motion.h2>

            <ul className="space-y-4 mb-10 text-left">
              {features.map((f, i) => (
                <motion.li key={f} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-center gap-3 text-navy font-semibold">
                  <CheckCircle2 className="text-copper shrink-0" size={22} />{f}
                </motion.li>
              ))}
            </ul>

            <motion.a href="#cta" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="inline-flex items-center gap-2 bg-navy text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-navy/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              Obtenir l'application
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppCTA;
