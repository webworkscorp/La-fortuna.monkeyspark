
import React from 'react';
import { Tour } from '../types';

interface Props {
  tour: Tour;
}

const TourCard: React.FC<Props> = ({ tour }) => {
  const handleConsult = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('alojamiento'); // Navegamos a la sección con el formulario
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="group bg-neutral-light border border-accent-light/30 overflow-hidden hover:shadow-2xl transition-all duration-500">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={tour.imageUrl} 
          alt={tour.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl mb-4 group-hover:text-secondary transition-colors">{tour.name}</h3>
        <p className="text-secondary/70 font-light mb-6 text-sm leading-relaxed">
          {tour.description}
        </p>
        
        <div className="space-y-3 text-sm border-t border-accent-light/50 pt-6">
          {tour.schedule && (
            <div className="flex items-center gap-3">
              <span className="text-accent uppercase tracking-tighter font-bold text-[10px] w-20">Horario</span>
              <span className="text-secondary/80">{tour.schedule}</span>
            </div>
          )}
          {tour.rates && (
            <div className="flex items-center gap-3">
              <span className="text-accent uppercase tracking-tighter font-bold text-[10px] w-20">Tarifas</span>
              <span className="text-secondary/80">{tour.rates}</span>
            </div>
          )}
          {tour.includes && (
            <div className="flex items-center gap-3">
              <span className="text-accent uppercase tracking-tighter font-bold text-[10px] w-20">Incluye</span>
              <span className="text-secondary/80 italic">{tour.includes}</span>
            </div>
          )}
          {tour.note && (
            <div className="mt-4 p-3 bg-accent-light/30 border-l-2 border-accent text-secondary/70 text-xs italic">
              {tour.note}
            </div>
          )}
        </div>

        <a 
          href="#alojamiento"
          onClick={handleConsult}
          className="mt-8 block w-full py-3 border border-secondary text-secondary uppercase tracking-[0.2em] text-center text-[10px] font-bold hover:bg-secondary hover:text-white transition-all cursor-pointer"
        >
          Consultar tour
        </a>
      </div>
    </div>
  );
};

export default TourCard;
