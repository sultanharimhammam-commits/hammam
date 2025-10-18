import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkle } from 'lucide-react';

const services = [
  { name: '1/2 Jambes', price: '10 €' },
  { name: 'Jambes complètes', price: '20 €' },
  { name: '1/2 Bras', price: '10 €' },
  { name: 'Bras complets', price: '15 €' },
  { name: 'Visage', price: '15 €' },
  { name: 'Sourcil', price: '7 €' },
  { name: 'Lèvre ou menton', price: '3 €' },
  { name: 'Aisselles', price: '7 €' },
  { name: 'Maillot bord', price: '8 €' },
  { name: 'Maillot échancré', price: '15 €' },
  { name: 'Maillot intégral', price: '25 €' },
  { name: 'Bas du dos', price: '10 €' },
];

export default function Esthetique() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="esthetique" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkle className="w-8 h-8 text-gold" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta">
              Esthétique
            </h2>
          </div>
          <p className="text-xl text-stone max-w-2xl mx-auto">
            Des soins d'épilation professionnels pour une peau douce et soignée
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="table-scroll-hint">← Glissez pour voir tous les tarifs →</div>
          <div className="table-scroll-container">
            <table className="w-full min-w-[400px]">
              <thead className="bg-terracotta text-sand">
                <tr>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-serif text-sm sm:text-lg">Prestation</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-right font-serif text-sm sm:text-lg">Tarif</th>
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
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-terracotta text-sm sm:text-base whitespace-nowrap">{service.name}</td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-gold text-base sm:text-lg whitespace-nowrap">
                      {service.price}
                    </td>
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
