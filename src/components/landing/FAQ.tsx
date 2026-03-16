import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Est-ce légal de louer sa place de parking entre particuliers ?",
    a: "Oui, la location de places de stationnement entre particuliers est parfaitement légale en France. TaPlaceGo facilite simplement la mise en relation et sécurise les transactions.",
  },
  {
    q: "Comment sont fixés les prix ?",
    a: "Chaque propriétaire fixe librement son tarif horaire ou journalier. Nous affichons un prix indicatif basé sur le marché local pour vous aider à rester compétitif.",
  },
  {
    q: "Que se passe-t-il en cas de problème ou de dommage ?",
    a: "Une assurance est incluse dans chaque réservation. Notre support est disponible 24/7 pour résoudre tout incident rapidement.",
  },
  {
    q: "Comment fonctionne le paiement ?",
    a: "Le paiement est 100% sécurisé via la plateforme. Le conducteur paie à la réservation, et le propriétaire reçoit son versement sous 48h après la fin de la location.",
  },
  {
    q: "Le service est-il disponible dans ma ville ?",
    a: "Nous lançons d'abord à Toulouse, puis nous nous étendrons progressivement à d'autres villes françaises. Inscrivez-vous à la liste d'attente pour être informé du lancement dans votre ville.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-navy text-center mb-16"
        >
          Questions fréquentes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-anthracite leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
