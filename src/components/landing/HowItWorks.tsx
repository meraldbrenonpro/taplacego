import { motion } from "framer-motion";
import { PlusCircle, CalendarCheck, Navigation } from "lucide-react";

const steps = [
  {
    title: "Proposez votre place",
    desc: "Indiquez vos disponibilités et fixez votre prix en 2 minutes.",
    icon: <PlusCircle className="w-8 h-8" />,
  },
  {
    title: "Réservez en un clic",
    desc: "Trouvez une place libre là où vous en avez besoin, instantanément.",
    icon: <CalendarCheck className="w-8 h-8" />,
  },
  {
    title: "Stationnez sereinement",
    desc: "Suivez le guidage GPS jusqu'à votre place réservée et sécurisée.",
    icon: <Navigation className="w-8 h-8" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-navy mb-4"
          >
            Comment ça marche ?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1.5 bg-copper mx-auto rounded-full origin-center"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative grid md:grid-cols-3 gap-12"
        >
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-white/20 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(27,42,74,0.12)" }}
              className="glass-strong p-8 rounded-2xl flex flex-col items-center text-center relative transition-all duration-300"
            >
              <motion.div
                className="w-16 h-16 bg-copper/10 text-copper rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.icon}
              </motion.div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-copper text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-copper/30">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-anthracite leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
