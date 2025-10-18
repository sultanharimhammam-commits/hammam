import { motion } from 'framer-motion';
import { Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[80svh] sm:h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dxatw7zjb/image/upload/v1758909928/Image_sur_6_huvqjs.png)',
        }}
      />

      <div className="absolute inset-0 hero-gradient" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-gold/20 blur-3xl glow-gold animate-pulse"
             style={{ animationDuration: '4s' }} />
      </div>

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/40 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl w-full mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6 text-balance leading-tight"
        >
          Rituel ancestral, élégance contemporaine
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-8 sm:mb-12 text-sand text-balance px-2"
        >
          Plongez dans l'authenticité d'un hammam traditionnel où chaque instant vous appartient
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
        >
          <a
            href="tel:0619049987"
            className="group bg-gold hover:bg-gold/90 text-dark px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all flex items-center gap-2 glow-gold hover:scale-105 min-h-[44px] min-w-[44px] w-full sm:w-auto justify-center"
            aria-label="Appeler pour réserver au 06 19 04 99 87"
          >
            <Phone className="w-5 h-5" />
            Réserver maintenant
          </a>

          <button
            onClick={() => scrollToSection('discover')}
            className="group border-2 border-sand hover:bg-sand/10 text-sand px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all hover:scale-105 min-h-[44px] min-w-[44px] w-full sm:w-auto"
            aria-label="Découvrir nos rituels"
          >
            Découvrir nos rituels
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection('discover')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sand hover:text-gold transition-colors"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
