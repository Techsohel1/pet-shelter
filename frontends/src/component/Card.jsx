import React from 'react';
import { useNavigate } from 'react-router-dom';

const animals = [
  {
    name: 'Luna',
    image: 'https://images.unsplash.com/photo-1625106828405-07e0e4457c1a?w=600&auto=format&fit=crop&q=60',
    description: `Luna is a sweet and affectionate 2-year-old tabby with the softest fur and the calmest heart. 
    Rescued from the streets, she's quickly blossomed into a loving companion who adores head scratches, window watching, 
    and cozy naps in sunlit corners.`,
  },
  {
    name: 'Charlie',
    image: 'https://images.unsplash.com/photo-1594005374167-5fd900fb82c9?w=600&auto=format&fit=crop&q=60',
    description: `Charlie is a 3-year-old mixed breed with a heart full of love and eyes that speak volumes. 
    Rescued from difficult conditions, he has shown nothing but resilience, trust, and an incredible capacity for affection. 
    He loves belly rubs, going for walks, and curling up beside you after a day of tail-wagging fun.`,
  },
  {
    name: 'BaBa',
    image: 'https://images.unsplash.com/photo-1583786693544-e352f898888d?w=600&auto=format&fit=crop&q=60',
    description: `Baba is a 4-year-old shelter dog with a calm spirit and a lovable personality. 
    Despite his tough start in life, Baba has grown into a sweet, trusting companion. 
    He enjoys slow walks, naps, and gentle cuddles. He’s vaccinated, neutered, and waiting for his forever family.`,
  },
];

const Card = () => {
  const navigate = useNavigate()
  const handleDonate =()=>{
    navigate("/donate")
  }
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {animals.map((pet, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:scale-[1.02] duration-300"
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-amber-700 mb-2">{pet.name}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{pet.description}</p>
              <button onClick={()=>handleDonate()}
              className="bg-amber-700 text-white text-base px-6 py-3 rounded-xl hover:bg-amber-800 mt-4 transition active:scale-95">
                Donate Now 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
