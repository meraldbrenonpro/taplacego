import { motion } from "framer-motion";
import { Star } from "lucide-react";
import avatarSophie from "@/assets/avatar-sophie.jpg";
import avatarThomas from "@/assets/avatar-thomas.jpg";
import avatarLaura from "@/assets/avatar-laura.jpg";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Conductrice à Toulouse",
    quote:
      "Je ne tourne plus 20 minutes pour me garer. En 2 clics, j'ai ma place réservée près du Capitole.",
    avatar: avatarSophie,
  },
  {
    name: "Thomas R.",
    role: "Propriétaire, Saint-Cyprien",
    quote:
      "Ma place restait vide la journée. Maintenant elle me rapporte 120€ par mois sans aucun effort.",
    avatar: avatarThomas,
  },
  {
    name: "Laura B.",
    role: "Étudiante à Toulouse",
    quote:
      "Enfin une alternative abordable aux parkings hors de prix du centre-ville. L'app est super intuitive.",
    avatar: avatarLaura,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-navy text-center mb-16"
        >
          Ils nous font déjà confiance
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12 md:overflow-visible overflow-x-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card p-6 rounded-2xl border border-card-border flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(27,42,74,0.08)] transition-all duration-300 min-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-navy">{t.name}</p>
                  <p className="text-sm text-anthracite">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-copper"
                    fill="hsl(var(--copper))"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 bg-copper/10 text-copper font-semibold px-5 py-2.5 rounded-full text-sm">
            <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
            Déjà +500 inscrits sur la liste d'attente
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
