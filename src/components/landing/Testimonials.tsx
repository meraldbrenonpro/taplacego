import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "S.M.",
    name: "Sophie M.",
    role: "Conductrice à Toulouse",
    quote:
      "Je ne tourne plus 20 minutes pour me garer. En 2 clics, j'ai ma place réservée près du Capitole.",
  },
  {
    initials: "T.R.",
    name: "Thomas R.",
    role: "Propriétaire, quartier Saint-Cyprien",
    quote:
      "Ma place de parking restait vide la journée. Maintenant elle me rapporte 120€ par mois sans effort.",
  },
  {
    initials: "L.B.",
    name: "Laura B.",
    role: "Étudiante à Toulouse",
    quote:
      "Enfin une alternative abordable aux parkings hors de prix du centre-ville. L'app est super intuitive.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-navy text-center mb-16"
        >
          Ils nous font déjà confiance
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card p-8 rounded-2xl shadow-md flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-lavender flex items-center justify-center text-navy font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-navy">{t.name}</p>
                  <p className="text-sm text-anthracite">{t.role}</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed flex-1 mb-4">
                "{t.quote}"
              </p>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-terracotta"
                    fill="hsl(var(--terracotta))"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 bg-emerald/10 text-emerald font-semibold px-5 py-2.5 rounded-full text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            Déjà +500 inscrits sur la liste d'attente
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
