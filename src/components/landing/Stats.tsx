import { motion } from "framer-motion";

const stats = [
  { label: "Places référencées", val: "+2 500" },
  { label: "Temps de recherche", val: "-35%" },
  { label: "CO₂ évité", val: "12 tonnes" },
];

const Stats = () => {
  return (
    <section className="bg-gradient-to-b from-navy to-navy-deep py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="text-4xl md:text-5xl font-extrabold text-copper mb-2 tracking-tighter">
              {s.val}
            </div>
            <div className="text-primary-foreground/70 font-medium uppercase tracking-widest text-sm">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
