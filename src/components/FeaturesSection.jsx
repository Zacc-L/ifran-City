import { useState } from 'react';
import '../styles/FeaturesSection.css'; 

export default function FeaturesSection() {
  const features = [
    {
      title: 'Le Cap Spartel',
      description: 'Situé à l’extrémité nord-ouest de l’Afrique, ce cap marque la rencontre de l’Atlantique et de la Méditerranée. On y trouve un phare emblématique et un panorama spectaculaire sur l’océan.',
      image: '/Le Cap Spartel.jpg' // Replace with your image URL or local path
    },
    {
      title: 'Les Grottes d’Hercule',
      description: 'Un site mythique creusé dans la roche, célèbre pour sa silhouette en forme de carte de l’Afrique. Selon la légende, Hercule s’y serait reposé après ses exploits. L’endroit est à la fois naturel, historique et fascinant.',
      image: '/Les Grottes d’Hercule.jpg' // Replace with your image URL or local path
    },
    {
      title: 'La Kasbah de Tanger',
      description: 'Perchée au sommet de la médina, la Kasbah offre une vue imprenable sur le détroit de Gibraltar. C’est un lieu chargé d’histoire avec ses ruelles étroites, ses palais anciens et le musée de la Kasbah installé dans l’ancien palais du Sultan',
      image: '/La Kasbah de Tanger.jpg' // Replace with your image URL or local path
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        {features.map((feature, idx) => (
          <FlipCard key={idx} feature={feature} />
        ))}
      </div>
    </section>
  );
}

function FlipCard({ feature }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full h-72 perspective cursor-pointer"
      onClick={() => setFlipped(prev => !prev)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front side (Text) */}
        <div className="absolute w-full h-full backface-hidden bg-white p-8 rounded-2xl shadow-md text-center flex flex-col justify-center items-center">
          <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>

        {/* Back side (Image) */}
        <div className="absolute w-full h-full backface-hidden transform rotate-y-180 rounded-2xl overflow-hidden shadow-md">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
