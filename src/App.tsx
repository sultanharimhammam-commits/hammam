import Header from './components/Header';
import Hero from './components/Hero';
import Discover from './components/Discover';
import Hammam from './components/Hammam';
import Coiffure from './components/Coiffure';
import Esthetique from './components/Esthetique';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import BridalOffer from './components/BridalOffer';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Discover />
      <Hammam />
      <Coiffure />
      <Esthetique />
      <Products />
      <HowItWorks />
      <BridalOffer />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
