import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';

const images = [
  './1.jpg',
  './ifran-City/2.jpg',
  './13.jpg',
  './15.jpg',
  './14.webp' // Add more image paths here
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // Cycle through background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center relative overflow-hidden"
    >
      {/* Animated Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
        >
          Bienvenue à Tanger
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl text-white"
        >
          Découvrez Tanger, entre histoire, mer et légendes.
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="inline-block px-8 py-4 bg-black text-white rounded-full text-lg cursor-pointer"
          >
            Découvrir plus
          </Link>
        </motion.div>
      </div>

      {/* Scroll Arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 z-10"
      >
        <FaArrowDown className="text-white text-3xl" />
      </motion.div>
    </section>
  );
}
