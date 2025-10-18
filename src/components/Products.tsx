import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingBag } from 'lucide-react';

const products = [
  { name: 'Gant encrin (Kessa)', price: '5 €' },
  { name: 'Savon noir — 1 dose (20 g)', price: '1 €' },
  { name: 'Savon noir — pot 200 g', price: '5 €' },
  { name: 'Location serviette', price: '2 €' },
  { name: 'Shampoing', price: '5 €' },
  { name: 'Gel douche', price: '5 €' },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="products" className="py-20 bg-sand/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingBag className="w-8 h-8 text-gold" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta">
              Produits & Location
            </h2>
          </div>
          <p className="text-xl text-stone max-w-2xl mx-auto">
            Tout le nécessaire pour votre rituel hammam
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://res.cloudinary.com/dn8djfbg5/image/upload/v1760113157/Supplement-Gant-et-savon_bnblsk.jpg"
              alt="Gant Kessa et savon noir traditionnel"
              className="rounded-xl shadow-2xl w-full object-cover aspect-square"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="table-scroll-hint">← Glissez pour voir tous les tarifs →</div>
            <div className="table-scroll-container">
              <table className="w-full min-w-[400px]">
                <thead className="bg-terracotta text-sand">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-serif text-sm sm:text-lg">Produit</th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-right font-serif text-sm sm:text-lg">Prix</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr
                      key={product.name}
                      className={`${
                        index % 2 === 0 ? 'bg-sand/20' : 'bg-white'
                      } hover:bg-gold/10 transition-colors`}
                    >
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-terracotta text-sm sm:text-base whitespace-nowrap">{product.name}</td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-right font-semibold text-gold text-base sm:text-lg whitespace-nowrap">
                        {product.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
