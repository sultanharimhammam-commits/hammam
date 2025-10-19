import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Phone } from 'lucide-react';

const services = [
  { name: 'Entrée + gommage', price: '25 €', description: 'Rituel complet de purification' },
  { name: 'Massage aux huiles essentielles', price: 'à partir de 20 €', description: 'Détente profonde et relaxation' },
  { name: 'Savonnage', price: '20 €', description: 'Soin traditionnel au savon noir' },
  { name: 'Enveloppement à l\'argile', price: '20 €', description: 'Soin régénérant et purifiant' },
];

export default function Hammam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="hammam" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta mb-4">
            Hammam & Soins
          </h2>
          <p className="text-xl text-stone max-w-2xl mx-auto">
            Des rituels ancestraux pour purifier le corps et apaiser l'esprit
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://res.cloudinary.com/dn8djfbg5/image/upload/v1760112730/Image_5_sur_riniy8.png"
              alt="Intérieur authentique du hammam traditionnel"
              className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </motion.div>

          <div className="grid gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-sand/20 p-6 rounded-lg border-l-4 border-gold hover:bg-sand/30 transition-colors group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-semibold text-terracotta group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <span className="text-2xl font-bold text-gold">{service.price}</span>
                </div>
                <p className="text-stone">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-terracotta text-sand p-12 rounded-xl max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-3xl font-serif font-bold mb-4">Massages</h3>
              <p className="text-lg leading-relaxed mb-6">
                Prolongez votre expérience avec nos massages aux huiles essentielles,
                dispensés par des praticiennes expertes. Chaque massage est personnalisé
                selon vos besoins et votre état de détente.
              </p>
            </div>
          </div>

          <img
            src="https://res.cloudinary.com/dn8djfbg5/image/upload/v1760112727/image_4_sur_bvzgux.png"
            alt="Salle de massage du Hammam Harim Sultan"
            className="rounded-lg w-full object-cover aspect-video mb-6"
            loading="lazy"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0619049987"
              className="bg-gold hover:bg-gold/90 text-dark px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 hover:scale-105"
              aria-label="Réserver par téléphone"
            >
              <Phone className="w-5 h-5" />
              Réserver
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 bg-gold/10 p-6 rounded-lg max-w-2xl mx-auto"
        >
          <p className="text-lg text-terracotta font-semibold">
            Rappel : Aucune limite de temps pour profiter du hammam
          </p>
        </motion.div>
      </div>
    </section>
  );
}
