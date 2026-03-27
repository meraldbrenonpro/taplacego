import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Est-ce légal de louer sa place entre particuliers ?", a: "Oui, c'est parfaitement légal en France. TaPlaceGo facilite la mise en relation et sécurise les transactions entre propriétaires et conducteurs." },
  { q: "Comment sont fixés les prix ?", a: "Chaque propriétaire fixe librement son tarif. Nous affichons un prix indicatif basé sur le marché local pour rester compétitif." },
  { q: "Que se passe-t-il en cas de problème ?", a: "Une assurance est incluse dans chaque réservation. Notre support est disponible 24/7 pour résoudre tout incident." },
  { q: "Comment fonctionne le paiement ?", a: "Le paiement est 100% sécurisé via la plateforme. Le conducteur paie à la réservation, le propriétaire reçoit son versement sous 48h." },
  { q: "Le service est-il disponible dans ma ville ?", a: "Nous lançons à Toulouse en premier, puis nous nous étendrons progressivement. Inscrivez-vous pour être informé du lancement dans votre ville." },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-navy text-center mb-16"
        >
          Questions fréquentes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <AccordionItem value={`faq-${i}`} className="border-b border-white/20 px-0">
                  <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline py-5 hover:text-copper transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-anthracite leading-[1.7] pb-5 max-w-[640px]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
