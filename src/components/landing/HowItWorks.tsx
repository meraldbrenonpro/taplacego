import { motion } from "framer-motion";
import { PlusCircle, CalendarCheck, Navigation } from "lucide-react";

const steps = [
  {
    title: "Proposez votre place",
    desc: "Indiquez vos disponibilités et fixez votre prix en 2 minutes.",
    icon: <PlusCircle className="w-8 h-8" />,
    bg: "bg-emerald/10",
  },
  {
    title: "Réservez en un clic",
    desc: "Trouvez une place libre là où vous en avez besoin, instantanément.",
    icon: <CalendarCheck className="w-8 h-8" />,
    bg: "bg-lavender/40",
  },
  {
    title: "Stationnez sereinement",
    desc: "Suivez le guidage GPS jusqu'à votre place réservée et sécurisée.",
    icon: <Navigation className="w-8 h-8" />,
    bg: "bg-terracotta/10",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Comment ça marche ?
          </h2>
          <div className="w-20 h-1.5 bg-emerald mx-auto rounded-full" />
        </div>

        <div className="relative grid md:grid-cols-3 gap-12">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-lavender -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-md border border-light-gray flex flex-col items-center text-center relative"
            >
              <div
                className={`w-16 h-16 ${step.bg} text-emerald rounded-2xl flex items-center justify-center mb-6`}
              >
                {step.icon}
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
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
