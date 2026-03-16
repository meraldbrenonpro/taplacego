import { MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-primary-foreground pt-20 pb-10 border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="text-copper w-6 h-6" />
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-primary-foreground">Ta</span>
              <span className="text-copper">Place</span>
              <span className="text-primary-foreground">Go</span>
            </span>
          </div>
          <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
            La plateforme collaborative qui simplifie le stationnement urbain en
            connectant les propriétaires de places et les conducteurs.
          </p>
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-primary-foreground/40 text-sm">
          © 2026 TaPlaceGo. Tous droits réservés.
        </p>
        <div className="flex gap-6">
          <a href="#" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-primary-foreground/60 hover:text-copper cursor-pointer transition-colors" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="w-5 h-5 text-primary-foreground/60 hover:text-copper cursor-pointer transition-colors" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 text-primary-foreground/60 hover:text-copper cursor-pointer transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
