import { motion } from "framer-motion";
import { MapPin, Star, Search } from "lucide-react";

const badges = [
  { label: "Géolocalisation intégrée", side: "left", top: "15%" },
  { label: "Réservation instantanée", side: "left", top: "55%" },
  { label: "Suivi en temps réel", side: "right", top: "20%" },
  { label: "Paiement sécurisé", side: "right", top: "60%" },
];

const results = [
  { name: "Capitole", price: "2,50€/h", distance: "150m", rating: 4.8 },
  { name: "Saint-Cyprien", price: "1,80€/h", distance: "400m", rating: 4.5 },
  { name: "Carmes", price: "2,00€/h", distance: "300m", rating: 4.7 },
];

const ProductPreview = () => {
  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-navy text-center mb-16"
        >
          Un aperçu de l'expérience
        </motion.h2>

        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Floating badges - left */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1/4">
            {badges
              .filter((b) => b.side === "left")
              .map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="absolute right-0"
                  style={{ top: b.top }}
                >
                  <div className="bg-card px-5 py-3 rounded-xl shadow-md text-sm font-semibold text-navy whitespace-nowrap">
                    {b.label}
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-[280px] sm:w-[300px]"
          >
            <div className="bg-navy rounded-[2.5rem] p-3 shadow-2xl">
              <div className="bg-card rounded-[2rem] overflow-hidden">
                {/* Status bar */}
                <div className="bg-navy text-primary-foreground text-xs flex justify-between px-6 py-2">
                  <span>9:41</span>
                  <span>●●●</span>
                </div>

                {/* Search bar */}
                <div className="px-4 py-3">
                  <div className="flex items-center gap-2 bg-light-gray rounded-xl px-3 py-2.5">
                    <Search size={16} className="text-anthracite" />
                    <span className="text-sm text-anthracite">
                      Rechercher un lieu...
                    </span>
                  </div>
                </div>

                {/* Mini map */}
                <div className="mx-4 h-32 bg-lavender rounded-xl relative overflow-hidden mb-3">
                  <div className="absolute inset-0 opacity-30">
                    <svg viewBox="0 0 200 100" className="w-full h-full">
                      <path d="M0,50 Q50,20 100,50 T200,50" fill="none" stroke="hsl(var(--navy))" strokeWidth="1.5" />
                      <path d="M20,30 Q60,60 120,30 T200,40" fill="none" stroke="hsl(var(--navy))" strokeWidth="1" opacity="0.5" />
                      <rect x="40" y="20" width="20" height="15" rx="2" fill="hsl(var(--navy))" opacity="0.15" />
                      <rect x="80" y="35" width="25" height="12" rx="2" fill="hsl(var(--navy))" opacity="0.15" />
                      <rect x="130" y="25" width="18" height="18" rx="2" fill="hsl(var(--navy))" opacity="0.15" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="text-emerald" size={28} fill="hsl(var(--emerald))" />
                  </div>
                </div>

                {/* Results */}
                <div className="px-4 pb-4 space-y-2">
                  {results.map((r) => (
                    <div
                      key={r.name}
                      className="bg-light-gray rounded-xl p-3 flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm font-bold text-navy">{r.name}</p>
                        <p className="text-xs text-anthracite">{r.distance}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-emerald">
                          {r.price}
                        </p>
                        <div className="flex items-center gap-0.5">
                          <Star
                            size={12}
                            className="text-terracotta"
                            fill="hsl(var(--terracotta))"
                          />
                          <span className="text-xs text-anthracite">
                            {r.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating badges - right */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/4">
            {badges
              .filter((b) => b.side === "right")
              .map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="absolute left-0"
                  style={{ top: b.top }}
                >
                  <div className="bg-card px-5 py-3 rounded-xl shadow-md text-sm font-semibold text-navy whitespace-nowrap">
                    {b.label}
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Mobile badges */}
          <div className="lg:hidden absolute -bottom-4 left-0 right-0 flex flex-wrap justify-center gap-2">
            {badges.map((b) => (
              <span
                key={b.label}
                className="bg-card px-3 py-1.5 rounded-full shadow text-xs font-semibold text-navy"
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
