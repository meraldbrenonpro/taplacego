import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-lavender/30 to-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-terracotta/10 text-terracotta text-sm font-bold mb-6 uppercase tracking-wider">
            Lancement prochainement
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-navy leading-[1.1] mb-6 tracking-tight">
            Votre parking <br />
            <span className="text-emerald">devient collaboratif.</span>
          </h1>
          <p className="text-xl text-anthracite mb-10 max-w-lg leading-relaxed">
            Partagez votre place privée quand vous ne l'utilisez pas ou trouvez
            un stationnement garanti en quelques secondes. Moins de stress, plus
            d'économies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="bg-emerald hover:brightness-90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-emerald/20 transition-all hover:-translate-y-1 text-center"
            >
              Rejoindre la liste d'attente
            </a>
            <a
              href="#how-it-works"
              className="border-2 border-navy text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-navy hover:text-primary-foreground transition-all text-center"
            >
              Découvrir le concept
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <svg
            viewBox="0 0 500 500"
            className="w-full h-auto drop-shadow-2xl"
            aria-label="Illustration de stationnement collaboratif"
            role="img"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#07275A", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#1a4a94", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect x="50" y="50" width="400" height="400" rx="40" fill="#F2F2F2" />
            {[0, 1, 2].map((i) => (
              <rect
                key={`l${i}`}
                x="100"
                y={100 + i * 110}
                width="140"
                height="80"
                rx="12"
                fill="white"
                stroke="#C5D1EB"
                strokeWidth="2"
              />
            ))}
            {[0, 1, 2].map((i) => (
              <rect
                key={`r${i}`}
                x="260"
                y={100 + i * 110}
                width="140"
                height="80"
                rx="12"
                fill={i === 1 ? "#41BB8A" : "white"}
                stroke={i === 1 ? "#41BB8A" : "#C5D1EB"}
                strokeWidth="2"
              />
            ))}
            <motion.path
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              d="M280 230h100l10 20v20h-120v-20z"
              fill="#07275A"
            />
            <circle cx="300" cy="270" r="8" fill="#555" />
            <circle cx="360" cy="270" r="8" fill="#555" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
