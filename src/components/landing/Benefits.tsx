import { motion } from "framer-motion";
import { Wallet, Leaf, Users, Smartphone, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Économisez",
    desc: "Réduisez vos frais de stationnement jusqu'à 50% ou rentabilisez votre place vide.",
    icon: <Wallet size={32} />,
  },
  {
    title: "Écologique",
    desc: "Moins de temps à chercher = moins de CO₂ rejeté dans nos centres-villes.",
    icon: <Leaf size={32} />,
  },
  {
    title: "Communauté",
    desc: "Un réseau basé sur la confiance avec des profils vérifiés et des avis certifiés.",
    icon: <Users size={32} />,
  },
  {
    title: "Simplicité",
    desc: "Une interface intuitive pensée pour l'action. Pas de friction, juste du service.",
    icon: <Smartphone size={32} />,
  },
];

const checkItems = ["Paiements sécurisés", "Support 24/7", "Assurance incluse"];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-navy mb-6 leading-tight">
              Pourquoi choisir <br />
              TaPlaceGo ?
            </h2>
            <p className="text-lg text-anthracite mb-8">
              Nous ne créons pas seulement une application, nous optimisons
              l'espace urbain pour une ville plus fluide et plus humaine.
            </p>
            <div className="space-y-4">
              {checkItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-navy font-semibold"
                >
                  <CheckCircle2 className="text-copper" /> {item}
                </div>
              ))}
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-sm border border-card-border hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(27,42,74,0.08)] transition-all duration-300 cursor-default"
              >
                <div className="text-copper mb-4">{b.icon}</div>
                <h4 className="text-lg font-bold text-navy mb-2">{b.title}</h4>
                <p className="text-sm text-anthracite leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
