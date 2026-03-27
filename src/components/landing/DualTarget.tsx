import { motion } from "framer-motion";
import { Home, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ownerBenefits = [
  "Rentabilisez votre place inutilisée",
  "Fixez vos disponibilités et votre prix",
  "Paiements sécurisés et automatiques",
];

const driverBenefits = [
  "Trouvez une place garantie en quelques secondes",
  "Jusqu'à 50% moins cher qu'un parking classique",
  "Guidage GPS jusqu'à votre place réservée",
];

const DualTarget = () => {
  const scrollToCTA = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

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
          Une solution pour chacun
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(27,42,74,0.1)" }}
            className="glass-strong p-8 rounded-2xl flex flex-col transition-all duration-300"
          >
            <motion.div className="text-copper mb-4" whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Home size={32} />
            </motion.div>
            <h3 className="text-2xl font-bold text-navy mb-2">Vous avez une place libre ?</h3>
            <p className="text-anthracite mb-6">Transformez votre place inutilisée en source de revenus.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {ownerBenefits.map((b, i) => (
                <motion.li key={b} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-start gap-3 text-foreground">
                  <Check className="text-copper mt-0.5 shrink-0" size={20} /><span>{b}</span>
                </motion.li>
              ))}
            </ul>
            <Button variant="outline" size="lg" className="w-full rounded-full border-navy text-navy hover:bg-navy hover:text-primary-foreground transition-all hover:-translate-y-0.5 active:scale-95" onClick={scrollToCTA}>
              Proposer ma place →
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(27,42,74,0.1)" }}
            className="glass-strong p-8 rounded-2xl flex flex-col transition-all duration-300"
          >
            <motion.div className="text-copper mb-4" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <MapPin size={32} />
            </motion.div>
            <h3 className="text-2xl font-bold text-navy mb-2">Vous cherchez où vous garer ?</h3>
            <p className="text-anthracite mb-6">Réservez une place en quelques secondes, près de votre destination.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {driverBenefits.map((b, i) => (
                <motion.li key={b} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.1 }} className="flex items-start gap-3 text-foreground">
                  <Check className="text-copper mt-0.5 shrink-0" size={20} /><span>{b}</span>
                </motion.li>
              ))}
            </ul>
            <Button size="lg" className="w-full rounded-full bg-copper text-primary-foreground hover:brightness-90 transition-all hover:-translate-y-0.5 active:scale-95" onClick={scrollToCTA}>
              Trouver une place →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DualTarget;
