import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Phone, Users, Sparkles } from 'lucide-react';

export default function BridalOffer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="bridal" className="py-20 bg-gradient-to-br from-sand/40 via-sand/20 to-gold/10" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-terracotta to-gold p-4 sm:p-6 md:p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-2 sm:gap-3 mb-4"
            >
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-sand fill-sand" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sand">
                Offre Spéciale Mariée
              </h2>
            </motion.div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 lg:p-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-stone leading-relaxed mb-6 sm:mb-8 text-center"
            >
              Préparez-vous pour le plus beau jour de votre vie dans une ambiance exceptionnelle,
              entourée de vos proches.
            </motion.p>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {[
                { icon: Users, title: 'Groupe privilégié', desc: 'Venez avec vos invitées' },
                { icon: Sparkles, title: 'Forfait complet', desc: 'Hammam, gommage, épilation, coiffure' },
                { icon: Heart, title: 'Moment unique', desc: 'Une journée inoubliable avant le mariage' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-serif font-semibold text-terracotta mb-2 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-stone text-xs sm:text-sm">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-sand/30 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8"
            >
              <h3 className="font-serif font-semibold text-lg sm:text-xl text-terracotta mb-3 text-center">
                Prestations incluses
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2 sm:gap-3 text-stone text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  Hammam traditionnel sans limite de temps
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  Gommage complet au savon noir
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  Épilation complète selon vos besoins
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  Coiffure personnalisée
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  Ambiance conviviale et détente
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  Tarifs avantageux pour les groupes
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center"
            >
              <p className="text-stone mb-4 sm:mb-6 text-sm sm:text-base">
                Chaque offre est personnalisée selon vos souhaits et le nombre d'invitées.
              </p>
              <a
                href="tel:0619049987"
                className="inline-flex items-center gap-2 sm:gap-3 bg-gold hover:bg-gold/90 text-dark px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg transition-all hover:scale-105 glow-gold"
                aria-label="Demander un devis personnalisé pour l'offre mariée"
              >
                <Phone className="w-5 h-5" />
                Demander un devis personnalisé
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
