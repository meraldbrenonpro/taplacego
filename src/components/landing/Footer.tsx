import { MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground pt-20 pb-10 border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-emerald rounded-lg flex items-center justify-center">
              <MapPin className="text-primary-foreground w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tight">TaPlaceGo</span>
          </div>
          <p className="text-lavender max-w-sm leading-relaxed">
            La plateforme collaborative qui simplifie le stationnement urbain en
            connectant les propriétaires de places et les conducteurs.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 text-lavender">
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
        </div>
        <div>
          <h4 className="font-bold mb-6">Légal</h4>
          <ul className="space-y-4 text-lavender">
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
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-lavender/60 text-sm">
          © 2026 TaPlaceGo. Tous droits réservés.
        </p>
        <div className="flex gap-6">
          <a href="#" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-lavender hover:text-primary-foreground cursor-pointer transition-colors" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="w-5 h-5 text-lavender hover:text-primary-foreground cursor-pointer transition-colors" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 text-lavender hover:text-primary-foreground cursor-pointer transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
