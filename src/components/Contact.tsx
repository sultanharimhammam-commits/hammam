import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 bg-sand/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta mb-4">
            Horaires & Contact
          </h2>
          <p className="text-xl text-stone max-w-2xl mx-auto">
            Venez nous rendre visite à Aubervilliers
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-semibold text-lg sm:text-xl text-terracotta mb-2">Adresse</h3>
                  <p className="text-stone text-sm sm:text-base md:text-lg">
                    21 Rue Lécuyer<br />
                    93300 Aubervilliers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-semibold text-lg sm:text-xl text-terracotta mb-2">Téléphone</h3>
                  <a
                    href="tel:0619049987"
                    className="text-stone text-sm sm:text-base md:text-lg hover:text-gold transition-colors"
                  >
                    06 19 04 99 87
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-semibold text-lg sm:text-xl text-terracotta mb-3">Horaires</h3>
                  <div className="space-y-3">
                    <div className="bg-gold/10 p-3 sm:p-4 rounded-lg">
                      <p className="font-semibold text-terracotta mb-1 text-sm sm:text-base">Femmes</p>
                      <p className="text-stone text-sm sm:text-base">7 jours sur 7</p>
                      <p className="text-stone text-sm sm:text-base">10h - 19h</p>
                    </div>
                    <div className="bg-gold/10 p-3 sm:p-4 rounded-lg">
                      <p className="font-semibold text-terracotta mb-1 text-sm sm:text-base">Hommes</p>
                      <p className="text-stone text-sm sm:text-base">Vendredi, Samedi, Dimanche</p>
                      <p className="text-stone text-sm sm:text-base">19h30 - Minuit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="font-serif font-semibold text-lg sm:text-xl text-terracotta mb-4 text-center">
                Suivez-nous
              </h3>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.instagram.com/hammam_harim_sultan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold/20 hover:bg-gold/30 p-3 sm:p-4 rounded-full transition-colors group"
                  aria-label="Suivez-nous sur Instagram"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-gold group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100009616620041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold/20 hover:bg-gold/30 p-3 sm:p-4 rounded-full transition-colors group"
                  aria-label="Suivez-nous sur Facebook"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-gold group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <motion.a
              href="tel:0619049987"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block bg-gold hover:bg-gold/90 text-dark px-6 sm:px-8 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg md:text-xl text-center transition-all hover:scale-105 glow-gold"
              aria-label="Appeler pour réserver"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 inline mr-2" />
              Appeler pour réserver
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.1234567890!2d2.3823456!3d48.9123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU0JzQ0LjQiTiAywrAyMic1Ni40IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du Hammam Harim Sultan"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
