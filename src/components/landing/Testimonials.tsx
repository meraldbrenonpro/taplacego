import { motion } from "framer-motion";
import { Star } from "lucide-react";
import avatarSophie from "@/assets/avatar-sophie.jpg";
import avatarThomas from "@/assets/avatar-thomas.jpg";
import avatarLaura from "@/assets/avatar-laura.jpg";

const testimonials = [
  { name: "Sophie M.", role: "Conductrice à Toulouse", quote: "Je ne tourne plus 20 minutes pour me garer. En 2 clics, j'ai ma place réservée près du Capitole.", avatar: avatarSophie },
  { name: "Thomas R.", role: "Propriétaire, Saint-Cyprien", quote: "Ma place restait vide la journée. Maintenant elle me rapporte 120€ par mois sans aucun effort.", avatar: avatarThomas },
  { name: "Laura B.", role: "Étudiante à Toulouse", quote: "Enfin une alternative abordable aux parkings hors de prix du centre-ville. L'app est super intuitive.", avatar: avatarLaura },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl font-extrabold text-navy text-center mb-16">
          Ils nous font déjà confiance
        </motion.h2>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={cardVariants} whileHover={{ y: -6, boxShadow: "0 16px 32px rgba(27,42,74,0.1)" }} className="glass-strong p-6 rounded-2xl flex flex-col transition-all duration-300 min-w-[280px]">
              <div className="flex items-center gap-4 mb-4">
                <motion.img src={t.avatar} alt={t.name} loading="lazy" width={48} height={48} className="w-12 h-12 rounded-full object-cover ring-2 ring-copper/20" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} />
                <div>
                  <p className="font-bold text-navy">{t.name}</p>
                  <p className="text-sm text-anthracite">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="text-copper" fill="hsl(var(--copper))" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed flex-1 italic">"{t.quote}"</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center">
          <span className="inline-flex items-center gap-2 glass-strong text-copper font-semibold px-5 py-2.5 rounded-full text-sm">
            <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
            Déjà +500 inscrits sur la liste d'attente
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
