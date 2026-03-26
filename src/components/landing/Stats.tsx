import { motion } from "framer-motion";

const stats = [
  { label: "Places référencées", val: "+2 500" },
  { label: "Temps de recherche", val: "-35%" },
  { label: "CO₂ évité", val: "12 tonnes" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const Stats = () => {
  return (
    <section data-section-dark className="bg-gradient-to-b from-navy to-navy-deep py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center"
      >
        {stats.map((s, i) => (
          <motion.div key={i} variants={itemVariants}>
            <motion.div
              className="text-4xl md:text-5xl font-extrabold text-copper mb-2 tracking-tighter"
              whileInView={{ scale: [0.8, 1.05, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              {s.val}
            </motion.div>
            <div className="text-primary-foreground/70 font-medium uppercase tracking-widest text-sm">
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
