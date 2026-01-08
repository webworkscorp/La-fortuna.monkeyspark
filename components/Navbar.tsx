
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    const targetId = id.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      try {
        element.scrollIntoView({ behavior: 'smooth' });
      } catch (err) {
        element.scrollIntoView();
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-primary/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex flex-col cursor-pointer" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          role="button"
          tabIndex={0}
        >
          <span className={`text-xl font-bold font-serif tracking-wider ${isScrolled ? 'text-accent-light' : 'text-white'}`}>HOWLER MONKEYS PARK</span>
          <span className={`text-xs uppercase tracking-widest ${isScrolled ? 'text-accent/80' : 'text-white/80'}`}>La Fortuna • Arenal</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest">
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')}
            className={`${isScrolled ? 'text-accent-light hover:text-white' : 'text-white hover:text-accent'} transition-colors cursor-pointer`}
          >
            Inicio
          </a>
          <a 
            href="#tours" 
            onClick={(e) => handleNavClick(e, '#tours')}
            className={`${isScrolled ? 'text-accent-light hover:text-white' : 'text-white hover:text-accent'} transition-colors cursor-pointer`}
          >
            Tours
          </a>
          <a 
            href="#sobre-mi" 
            onClick={(e) => handleNavClick(e, '#sobre-mi')}
            className={`${isScrolled ? 'text-accent-light hover:text-white' : 'text-white hover:text-accent'} transition-colors cursor-pointer`}
          >
            Sobre Nosotros
          </a>
          <a 
            href="#alojamiento" 
            onClick={(e) => handleNavClick(e, '#alojamiento')}
            className={`${isScrolled ? 'text-accent-light hover:text-white' : 'text-white hover:text-accent'} transition-colors cursor-pointer`}
          >
            Hospedaje
          </a>
          <a 
            href="#contacto" 
            onClick={(e) => handleNavClick(e, '#contacto')}
            className={`px-4 py-2 rounded-full border ${isScrolled ? 'border-accent-light text-accent-light hover:bg-accent-light hover:text-primary' : 'border-white text-white hover:bg-white hover:text-primary'} transition-all cursor-pointer`}
          >
            Reservar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
