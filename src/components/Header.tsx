import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { label: 'Découvrir', id: 'discover' },
    { label: 'Hammam', id: 'hammam' },
    { label: 'Coiffure', id: 'coiffure' },
    { label: 'Esthétique', id: 'esthetique' },
    { label: 'Produits', id: 'products' },
    { label: 'Mariée', id: 'bridal' },
    { label: 'Galerie', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.button
            onClick={() => scrollToSection('discover')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="https://res.cloudinary.com/dn8djfbg5/image/upload/v1760549809/LOGO_VF_SULTAN_fmhdwb.png"
              alt="Hammam Harim Sultan"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-md"
            />
            <span
              className={`hidden md:block font-serif font-bold text-lg transition-colors ${
                isScrolled ? 'text-terracotta' : 'text-white'
              }`}
            >
              Hammam Harim Sultan
            </span>
          </motion.button>

          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`px-4 py-2 rounded-lg font-medium transition-all hover:bg-gold/20 ${
                  isScrolled
                    ? 'text-terracotta hover:text-gold'
                    : 'text-white hover:text-gold'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-terracotta hover:bg-gold/20'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gold/20 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 rounded-lg font-medium text-terracotta hover:bg-gold/20 hover:text-gold transition-all"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
