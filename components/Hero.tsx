
import React from 'react';

const Hero: React.FC = () => {
  const handleExplore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('tours');
    if (element) {
      try {
        element.scrollIntoView({ behavior: 'smooth' });
      } catch (err) {
        element.scrollIntoView();
      }
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden scroll-mt-20">
      {/* Video or Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/aG4BnNC.jpeg" 
          alt="La Fortuna Howler Monkeys Park Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 image-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl mb-8 leading-tight max-w-4xl mx-auto italic">
            Experiencias Naturalistas en La Fortuna y el Volcán Arenal
          </h1>
          <p className="text-lg md:text-2xl font-light mb-16 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Tours guiados en bosques, cascadas, volcanes, vida silvestre y aguas termales.
          </p>
          <div className="flex justify-center">
            <a 
              href="#tours" 
              onClick={handleExplore}
              className="inline-block px-12 py-5 bg-accent text-primary font-bold rounded-sm hover:bg-accent-light transition-all duration-500 uppercase tracking-[0.3em] text-sm shadow-2xl hover:-translate-y-1 transform cursor-pointer"
            >
              Explorar Tours
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
