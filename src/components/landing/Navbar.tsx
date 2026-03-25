import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

const navLinks = [
  { name: "Comment ça marche", href: "#how-it-works" },
  { name: "Avantages", href: "#benefits" },
  { name: "Rejoindre", href: "#cta" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onDarkSection, setOnDarkSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect which section the navbar overlaps with
      const navbarBottom = 80; // approximate navbar height
      const darkSections = document.querySelectorAll("[data-section-dark]");
      let isDark = false;

      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < navbarBottom && rect.bottom > 0) {
          isDark = true;
        }
      });

      setOnDarkSection(isDark);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = onDarkSection;

  return (
    <nav className="fixed w-full z-50 py-4 px-6 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? isDark
              ? "bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/10"
              : "bg-white/80 backdrop-blur-xl border border-border shadow-lg shadow-black/5"
            : isDark
              ? "bg-white/5 backdrop-blur-md border border-white/[0.06]"
              : "bg-white/60 backdrop-blur-md border border-border/50"
        }`}
      >
        <a href="#">
          <img
            src={isDark ? logoLight : logoDark}
            alt="TaPlaceGo"
            className="h-7 w-auto transition-opacity duration-300"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-white/60 hover:text-white"
                  : "text-foreground/60 hover:text-foreground"
              }`}
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
          className={`md:hidden transition-colors ${
            isDark ? "text-white/70 hover:text-white" : "text-foreground/70 hover:text-foreground"
          }`}
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
            className={`mt-2 max-w-5xl mx-auto rounded-2xl backdrop-blur-xl border p-6 flex flex-col gap-4 md:hidden ${
              isDark
                ? "bg-white/10 border-white/10"
                : "bg-white/80 border-border"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold transition-colors ${
                  isDark ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-foreground"
                }`}
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
