import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GallerySection() {
  const images = [
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
    '/9.jpg',
    '/10.jpg',
    '/11.webp',
    
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto relative overflow-hidden px-4">
        <div className="flex items-center justify-center relative">
          <div className="w-full flex overflow-x-hidden">

            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 50}%)` }}>
              {images.map((src, index) => (
                <div
                  key={index}
                  className="min-w-[50%] px-2"
                >
                  <motion.img
                    src={src}
                    alt={`Slide ${index}`}
                    className="rounded-2xl object-cover w-full h-[400px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              ))}
            </div>

          </div>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-black hover:text-white transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-black hover:text-white transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
