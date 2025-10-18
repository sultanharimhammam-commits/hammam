import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    url: 'https://res.cloudinary.com/dn8djfbg5/image/upload/v1760112730/Image_5_sur_riniy8.png',
    alt: 'Intérieur authentique du hammam traditionnel',
  },
  {
    url: 'https://res.cloudinary.com/dn8djfbg5/image/upload/v1760112727/image_4_sur_bvzgux.png',
    alt: 'Salle de massage aux huiles essentielles',
  },
  {
    url: 'https://res.cloudinary.com/dn8djfbg5/image/upload/v1760113110/Salon_coiffure_yaoepf.png',
    alt: 'Salon de coiffure professionnel',
  },
  {
    url: 'https://res.cloudinary.com/dn8djfbg5/image/upload/v1760112730/Refonte_image_r%C3%A9el_wv1utn.png',
    alt: 'Escalier et espace d\'accueil',
  },
  {
    url: 'https://res.cloudinary.com/dn8djfbg5/image/upload/v1760113157/Supplement-Gant-et-savon_bnblsk.jpg',
    alt: 'Produits traditionnels pour le hammam',
  },
  {
    url: 'https://res.cloudinary.com/dxatw7zjb/image/upload/v1758909928/Image_sur_6_huvqjs.png',
    alt: 'Vue d\'ensemble du Hammam Harim Sultan',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-terracotta mb-4">
              Galerie
            </h2>
            <p className="text-xl text-stone max-w-2xl mx-auto">
              Découvrez l'ambiance unique du Hammam Harim Sultan
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {images.map((image, index) => (
              <motion.div
                key={image.url}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-gold text-dark px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base">
                    Agrandir
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-sand hover:text-gold transition-colors p-2"
            onClick={() => setSelectedImage(null)}
            aria-label="Fermer l'image agrandie"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Image agrandie"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </motion.div>
      )}
    </>
  );
}
