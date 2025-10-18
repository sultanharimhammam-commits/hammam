import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors } from 'lucide-react';

const services = [
  { name: 'Brushing', short: '10 €', medium: '15 €', long: '20-25 €' },
  { name: 'Coupe', short: '15 €', medium: '15 €', long: '15 €' },
  { name: 'Coloration racine + brushing', short: '35 €', medium: '40 €', long: '45 €' },
  { name: 'Coloration / brushing', short: '45 €', medium: '50 €', long: '60 €+' },
  { name: 'Mèches / brushing', short: '45 €', medium: '55 €', long: '70 €' },
  { name: 'Shampoing', short: '5 €', medium: '5 €', long: '5 €' },
  { name: 'Lissage', short: '120 €', medium: '160 €', long: '180 €+' },
];

export default function Coiffure() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="coiffure" className="py-20 bg-sand/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scissors className="w-8 h-8 text-gold" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta">
              Coiffure
            </h2>
          </div>
          <p className="text-xl text-stone max-w-2xl mx-auto">
            Des coupes aux colorations, sublimez votre chevelure
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 max-w-5xl mx-auto"
        >
          <img
            src="https://res.cloudinary.com/dn8djfbg5/image/upload/v1760113110/Salon_coiffure_yaoepf.png"
            alt="Salon de coiffure du Hammam Harim Sultan"
            className="rounded-xl shadow-2xl w-full object-cover aspect-[21/9]"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="table-scroll-hint">← Glissez pour voir tous les tarifs →</div>
          <div className="table-scroll-container">
            <table className="w-full min-w-[600px]">
              <thead className="bg-terracotta text-sand">
                <tr>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-serif text-sm sm:text-lg">Prestation</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center font-serif text-sm sm:text-lg">Courts</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center font-serif text-sm sm:text-lg">Mi-longs</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center font-serif text-sm sm:text-lg">Longs</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr
                    key={service.name}
                    className={`${
                      index % 2 === 0 ? 'bg-sand/20' : 'bg-white'
                    } hover:bg-gold/10 transition-colors`}
                  >
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-terracotta text-sm sm:text-base whitespace-nowrap">{service.name}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-stone text-sm sm:text-base whitespace-nowrap">{service.short}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-stone text-sm sm:text-base whitespace-nowrap">{service.medium}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-stone text-sm sm:text-base whitespace-nowrap">{service.long}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
