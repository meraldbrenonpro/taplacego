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
  "Guidage GPS jusqu'à votre place",
];

const DualTarget = () => {
  const scrollToCTA = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-navy text-center mb-16"
        >
          Une solution pour chacun
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Propriétaires */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-10 rounded-2xl shadow-md flex flex-col"
          >
            <div className="text-emerald mb-4">
              <Home size={40} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">
              Vous avez une place libre ?
            </h3>
            <p className="text-anthracite mb-6">
              Transformez votre place inutilisée en source de revenus.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {ownerBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground">
                  <Check className="text-emerald mt-0.5 shrink-0" size={20} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-xl border-navy text-navy hover:bg-navy hover:text-primary-foreground"
              onClick={scrollToCTA}
            >
              Proposer ma place
            </Button>
          </motion.div>

          {/* Conducteurs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-10 rounded-2xl shadow-md flex flex-col"
          >
            <div className="text-emerald mb-4">
              <MapPin size={40} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-2">
              Vous cherchez où vous garer ?
            </h3>
            <p className="text-anthracite mb-6">
              Réservez une place en quelques secondes, près de votre destination.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {driverBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground">
                  <Check className="text-emerald mt-0.5 shrink-0" size={20} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="w-full rounded-xl bg-emerald text-accent-foreground hover:bg-emerald/90"
              onClick={scrollToCTA}
            >
              Trouver une place
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DualTarget;
