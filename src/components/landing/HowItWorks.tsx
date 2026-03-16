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

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-navy mb-4"
          >
            Comment ça marche ?
          </motion.h2>
          <div className="w-20 h-1.5 bg-copper mx-auto rounded-full" />
        </div>

        <div className="relative grid md:grid-cols-3 gap-12">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-card-border -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-card p-8 rounded-2xl shadow-md border border-card-border flex flex-col items-center text-center relative hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-copper/10 text-copper rounded-2xl flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-copper text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-anthracite leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
