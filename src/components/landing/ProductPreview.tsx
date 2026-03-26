import { motion } from "framer-motion";
import { Locate, Zap, Lock, Radio } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.png";

const badges = [
  { label: "Géolocalisation intégrée", icon: <Locate size={14} />, side: "left", top: "15%" },
  { label: "Réservation instantanée", icon: <Zap size={14} />, side: "left", top: "55%" },
  { label: "Paiement sécurisé", icon: <Lock size={14} />, side: "right", top: "20%" },
  { label: "Suivi en temps réel", icon: <Radio size={14} />, side: "right", top: "60%" },
];

const ProductPreview = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-navy text-center mb-16"
        >
          Un aperçu de l'expérience
        </motion.h2>

        <div className="relative flex items-center justify-center min-h-[550px]">
          {/* Floating badges - left */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1/4">
            {badges
              .filter((b) => b.side === "left")
              .map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="absolute right-0"
                  style={{ top: b.top }}
                >
                  <div className="bg-card border border-card-border px-4 py-2.5 rounded-full shadow-sm text-sm font-semibold text-navy whitespace-nowrap flex items-center gap-2">
                    <span className="text-copper">{b.icon}</span>
                    {b.label}
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Phone mockup image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-[280px] sm:w-[300px]"
          >
            <img
              src={phoneMockup}
              alt="Aperçu de l'application TaPlaceGo"
              loading="lazy"
              width={300}
              height={600}
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Floating badges - right */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/4">
            {badges
              .filter((b) => b.side === "right")
              .map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="absolute left-0"
                  style={{ top: b.top }}
                >
                  <div className="bg-card border border-card-border px-4 py-2.5 rounded-full shadow-sm text-sm font-semibold text-navy whitespace-nowrap flex items-center gap-2">
                    <span className="text-copper">{b.icon}</span>
                    {b.label}
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Mobile badges */}
          <div className="lg:hidden absolute -bottom-4 left-0 right-0 flex flex-wrap justify-center gap-2">
            {badges.map((b) => (
              <span
                key={b.label}
                className="bg-card border border-card-border px-3 py-1.5 rounded-full shadow-sm text-xs font-semibold text-navy flex items-center gap-1.5"
              >
                <span className="text-copper">{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
