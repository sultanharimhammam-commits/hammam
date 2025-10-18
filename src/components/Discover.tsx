import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock } from 'lucide-react';

export default function Discover() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="discover" className="py-20 bg-sand/30 zellige-pattern" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta mb-6">
              Découvrez le lieu
            </h2>
            <p className="text-lg text-stone mb-6 leading-relaxed">
              Dans l'écrin chaleureux du Hammam Harim Sultan, chaque détail évoque la tradition :
              les mosaïques artisanales qui habillent les murs, les effluves d'eucalyptus qui parfument l'air,
              et la lumière tamisée qui caresse les marbres chauds.
            </p>
            <p className="text-lg text-stone mb-8 leading-relaxed">
              Ici, le temps n'existe plus. Vous êtes invité à vous abandonner pleinement
              à l'expérience ancestrale du hammam, dans un espace où la modernité rencontre
              l'authenticité.
            </p>

            <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif font-semibold text-xl text-terracotta mb-2">
                    Sans limite de temps
                  </h3>
                  <p className="text-stone">
                    Au Hammam Harim Sultan, il n'y a aucune limite de temps pour profiter du hammam.
                    Prenez le temps qu'il vous faut pour vous détendre pleinement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gold/20 rounded-lg blur-xl" />
            <img
              src="https://res.cloudinary.com/dn8djfbg5/image/upload/v1760112730/Refonte_image_r%C3%A9el_wv1utn.png"
              alt="Escalier d'accueil du Hammam Harim Sultan à Aubervilliers"
              className="relative rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
