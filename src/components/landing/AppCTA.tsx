import { motion } from "framer-motion";
import ctaCard from "@/assets/cta-card.png";

const AppCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={ctaCard}
            alt="Télécharge l'app TaPlaceGo pour une expérience optimisée"
            loading="lazy"
            width={1280}
            height={768}
            className="w-full h-auto rounded-3xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AppCTA;
