import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Comment ça marche", href: "#how-it-works" },
  { name: "Avantages", href: "#benefits" },
  { name: "Rejoindre", href: "#cta" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald rounded-lg flex items-center justify-center">
            <MapPin className="text-primary-foreground w-5 h-5" />
          </div>
          <span className="text-2xl font-bold text-navy tracking-tight">
            TaPlaceGo
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-anthracite hover:text-navy font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#cta"
            className="bg-emerald hover:brightness-90 text-primary-foreground px-6 py-2.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Rejoindre la liste
          </a>
        </div>

        <button
          className="md:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-navy"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="bg-emerald text-primary-foreground p-4 rounded-xl font-bold text-center"
            >
              Rejoindre la liste d'attente
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
