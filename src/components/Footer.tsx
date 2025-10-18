import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terracotta text-sand py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://res.cloudinary.com/dn8djfbg5/image/upload/v1760549809/LOGO_VF_SULTAN_fmhdwb.png"
                alt="Logo Hammam Harim Sultan"
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full"
                loading="lazy"
              />
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-gold">
                Hammam Harim Sultan
              </h3>
            </div>
            <p className="text-sand/80 leading-relaxed">
              L'authenticité du hammam traditionnel au cœur d'Aubervilliers.
              Une expérience de détente et de bien-être sans limite de temps.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-xl mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sand/80">
                  21 Rue Lécuyer<br />
                  93300 Aubervilliers
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:0619049987" className="text-sand/80 hover:text-gold transition-colors">
                  06 19 04 99 87
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-xl mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-sand/20 hover:bg-gold/30 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-sand/20 hover:bg-gold/30 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sand/20 pt-8 text-center">
          <p className="text-sand/60">
            &copy; {currentYear} Hammam Harim Sultan. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
