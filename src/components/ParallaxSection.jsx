import { Parallax } from 'react-parallax';

export default function ParallaxSection() {
  return (
    <section id="parallax">
      <Parallax
        bgImage="/r.jpg"
        strength={500}
      >
        <div className="h-[70vh] flex items-center justify-center">
          <div className="bg-white/80 p-8 rounded-2xl shadow-lg text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Rêvez Tanger, vivez l'inattendu.</h2>
            <p className="text-gray-700 text-lg md:text-2xl">
            Libérez votre vision, laissez votre imagination s'envoler.
            </p>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
