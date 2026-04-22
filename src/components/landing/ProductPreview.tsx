import { motion } from "framer-motion";
import { Locate, Zap, Lock, Radio } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup-v12.png";
import PhoneMockup from "@/components/landing/PhoneMockup";

const badges = [
  { label: "Géolocalisation intégrée", icon: <Locate size={14} />, side: "left", top: "15%" },
  { label: "Réservation instantanée", icon: <Zap size={14} />, side: "left", top: "55%" },
  { label: "Paiement sécurisé", icon: <Lock size={14} />, side: "right", top: "20%" },
  { label: "Suivi en temps réel", icon: <Radio size={14} />, side: "right", top: "60%" },
];

const ProductPreview = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-navy text-center mb-16"
        >
          Un aperçu de l'expérience
        </motion.h2>

        <div className="relative flex items-center justify-center min-h-[550px]">
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1/4">
            {badges.filter((b) => b.side === "left").map((b, i) => (
              <motion.div key={b.label} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 100 }} className="absolute right-0" style={{ top: b.top }}>
                <motion.div whileHover={{ scale: 1.05, x: 5 }} className="glass-strong px-4 py-2.5 rounded-full text-sm font-semibold text-navy whitespace-nowrap flex items-center gap-2 cursor-default">
                  <span className="text-copper">{b.icon}</span>{b.label}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-[280px] sm:w-[300px]"
          >
            <motion.div whileHover={{ y: -8, rotate: 1 }} transition={{ type: "spring", stiffness: 200 }}>
              <PhoneMockup phoneImage={phoneMockup} alt="Aperçu de l'application TaPlaceGo" widthClassName="w-full" />
            </motion.div>
          </motion.div>

          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/4">
            {badges.filter((b) => b.side === "right").map((b, i) => (
              <motion.div key={b.label} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 100 }} className="absolute left-0" style={{ top: b.top }}>
                <motion.div whileHover={{ scale: 1.05, x: -5 }} className="glass-strong px-4 py-2.5 rounded-full text-sm font-semibold text-navy whitespace-nowrap flex items-center gap-2 cursor-default">
                  <span className="text-copper">{b.icon}</span>{b.label}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="lg:hidden absolute -bottom-4 left-0 right-0 flex flex-wrap justify-center gap-2">
            {badges.map((b, i) => (
              <motion.span key={b.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-strong px-3 py-1.5 rounded-full text-xs font-semibold text-navy flex items-center gap-1.5">
                <span className="text-copper">{b.icon}</span>{b.label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
