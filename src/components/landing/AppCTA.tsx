import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import phoneMockup from "@/assets/phone-mockup.png";
import PhoneMockup from "@/components/landing/PhoneMockup";

const features = [
  "Réservation rapide où que tu sois",
  "Suivi en temps réel",
  "Géolocalisation et GPS intégrés",
  "Places et lieux favoris",
];

const AppCTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-lavender/40 rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden border border-lavender/60"
        >
          {/* Decorative blurs */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-copper/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-navy/5 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <PhoneMockup
                phoneImage={phoneMockup}
                alt="Aperçu de l'application TaPlaceGo"
                logoVariant="light"
              />
            </motion.div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <motion.img
                src={logoDark}
                alt="TaPlaceGo"
                className="h-8 w-auto mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-8"
              >
                Télécharge l'app pour une expérience optimisée
              </motion.h2>

              <ul className="space-y-4 mb-10">
                {features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-navy font-semibold"
                  >
                    <CheckCircle2 className="text-copper shrink-0" size={22} />
                    {f}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#cta"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="inline-flex items-center gap-2 bg-navy text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-navy/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                Obtenir l'application
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppCTA;
