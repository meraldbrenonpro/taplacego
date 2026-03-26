import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const Footer = () => {
  return (
    <footer data-section-dark className="bg-navy-deep text-primary-foreground pt-20 pb-10 border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-2"
        >
          <img
            src={logoLight}
            alt="TaPlaceGo"
            className="h-8 w-auto mb-6"
            loading="lazy"
          />
          <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
            La plateforme collaborative qui simplifie le stationnement urbain en
            connectant les propriétaires de places et les conducteurs.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 text-primary-foreground/70">
            <li>
              <a href="#how-it-works" className="hover:text-primary-foreground transition-colors">
                Concept
              </a>
            </li>
            <li>
              <a href="#benefits" className="hover:text-primary-foreground transition-colors">
                Avantages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Blog
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="font-bold mb-6">Légal</h4>
          <ul className="space-y-4 text-primary-foreground/70">
            <li>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Mentions Légales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Confidentialité
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <p className="text-primary-foreground/40 text-sm">
          © 2026 TaPlaceGo. Tous droits réservés.
        </p>
        <div className="flex gap-6">
          {[
            { icon: Instagram, label: "Instagram" },
            { icon: Twitter, label: "Twitter" },
            { icon: Linkedin, label: "LinkedIn" },
          ].map(({ icon: Icon, label }) => (
            <motion.a
              key={label}
              href="#"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className="w-5 h-5 text-primary-foreground/60 hover:text-copper cursor-pointer transition-colors" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
