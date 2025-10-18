import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Info, ShoppingBag, Heart, Droplets } from 'lucide-react';

const steps = [
  {
    icon: ShoppingBag,
    title: 'Apportez vos affaires',
    description: 'Serviette, gant Kessa, savon noir et tout ce dont vous avez besoin pour votre rituel.',
  },
  {
    icon: Info,
    title: 'Location disponible',
    description: 'Vous avez oublié quelque chose ? Pas de souci ! Nous proposons vente et location sur place.',
  },
  {
    icon: Droplets,
    title: 'Profitez sans limite',
    description: 'Aucune limite de temps au hammam. Prenez le temps qu\'il vous faut pour vous détendre.',
  },
  {
    icon: Heart,
    title: 'Détente totale',
    description: 'Laissez-vous guider par nos professionnelles pour une expérience inoubliable.',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-stone max-w-2xl mx-auto">
            Tout ce que vous devez savoir pour profiter pleinement de votre visite
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-sand/20 p-4 sm:p-6 rounded-xl hover:bg-sand/30 transition-all hover:shadow-lg group"
              >
                <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-terracotta mb-3">
                  {step.title}
                </h3>
                <p className="text-stone leading-relaxed text-sm sm:text-base">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 max-w-3xl mx-auto bg-gold/10 border-2 border-gold/30 p-4 sm:p-6 md:p-8 rounded-xl text-center"
        >
          <p className="text-sm sm:text-base md:text-lg text-terracotta leading-relaxed">
            <strong className="font-serif text-base sm:text-lg md:text-xl">Important :</strong> Vous pouvez apporter vos propres affaires
            ou profiter de notre service de vente et location sur place. Consultez la section{' '}
            <a href="#products" className="text-gold hover:underline font-semibold">
              Produits & Location
            </a>{' '}
            pour plus de détails.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
