import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import GallerySection from './components/GallerySection';
import ParallaxSection from './components/ParallaxSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <ParallaxSection />
      <Footer />
    </div>
  );
}

export default App;
