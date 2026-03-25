import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Comment ça marche", href: "#how-it-works" },
  { name: "Avantages", href: "#benefits" },
  { name: "Rejoindre", href: "#cta" },
];

const Logo = ({ dark }: { dark?: boolean }) => (
  <div className="flex items-center gap-2">
    <MapPin className={`w-6 h-6 ${dark ? "text-copper" : "text-copper"}`} />
    <span className="text-2xl font-extrabold tracking-tight">
      <span className={dark ? "text-white" : "text-navy"}>Ta</span>
      <span className="text-copper">Place</span>
      <span className={dark ? "text-white" : "text-navy"}>Go</span>
    </span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 py-4 px-6 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/10"
            : "bg-white/5 backdrop-blur-md border border-white/[0.06]"
        }`}
      >
        <Logo dark />

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#cta"
            className="bg-copper hover:brightness-110 text-primary-foreground px-5 py-2 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Rejoindre la liste
          </a>
        </div>

        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 max-w-5xl mx-auto rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="bg-copper text-primary-foreground p-4 rounded-xl font-bold text-center"
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
