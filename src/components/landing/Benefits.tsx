import { motion } from "framer-motion";
import { Wallet, Leaf, Users, Smartphone, CheckCircle2 } from "lucide-react";

const benefits = [
  { title: "Économisez", desc: "Réduisez vos frais de stationnement jusqu'à 50% ou rentabilisez votre place vide.", icon: <Wallet size={32} /> },
  { title: "Écologique", desc: "Moins de temps à chercher = moins de CO₂ rejeté dans nos centres-villes.", icon: <Leaf size={32} /> },
  { title: "Communauté", desc: "Un réseau basé sur la confiance avec des profils vérifiés et des avis certifiés.", icon: <Users size={32} /> },
  { title: "Simplicité", desc: "Une interface intuitive pensée pour l'action. Pas de friction, juste du service.", icon: <Smartphone size={32} /> },
];

const checkItems = ["Paiements sécurisés", "Support 24/7", "Assurance incluse"];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Benefits = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-navy mb-6 leading-tight">
              Pourquoi choisir <br />TaPlaceGo ?
            </h2>
            <p className="text-lg text-anthracite mb-8">
              Nous ne créons pas seulement une application, nous optimisons l'espace urbain pour une ville plus fluide et plus humaine.
            </p>
            <div className="space-y-4">
              {checkItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-navy font-semibold"
                >
                  <CheckCircle2 className="text-copper" /> {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(27,42,74,0.1)" }}
                className="glass-strong p-8 rounded-2xl cursor-default transition-all duration-300"
              >
                <motion.div
                  className="text-copper mb-4"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {b.icon}
                </motion.div>
                <h4 className="text-lg font-bold text-navy mb-2">{b.title}</h4>
                <p className="text-sm text-anthracite leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
