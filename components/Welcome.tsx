
import React from 'react';
import { GUIDE_PROFILE } from '../constants.tsx';

const Welcome: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          {/* Imagen Minimalista y Profesional */}
          <div className="w-full md:w-4/12 flex justify-center md:justify-start">
            <div className="relative group max-w-[320px]">
              <div className="relative z-10 overflow-hidden rounded-sm shadow-sm">
                <img 
                  src="https://i.imgur.com/sUOCTTE.jpeg" 
                  alt="La Fortuna Howler Monkeys Park - Nature" 
                  className="w-full h-[350px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              {/* Marco decorativo minimalista */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-accent/30 -z-0"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-accent-light/40 -z-0"></div>
            </div>
          </div>

          {/* Contenido Narrativo Ampliado */}
          <div className="w-full md:w-8/12">
            <header className="mb-10">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-px bg-accent"></div>
                <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold block">Conoce al Guía</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight text-primary italic">
                Mi nombre es {GUIDE_PROFILE.name}, <br/>
                <span className="not-italic font-sans text-2xl md:text-3xl text-secondary opacity-80 uppercase tracking-tighter">Tu anfitrión en la selva.</span>
              </h2>
            </header>

            <div className="max-w-2xl">
              <p className="text-lg text-secondary/80 leading-relaxed mb-10 font-light italic border-l-2 border-accent-light pl-8">
                "Soy guía naturalista en la zona de La Fortuna y el Volcán Arenal. Ofrezco experiencias auténticas para conocer la biodiversidad del país de forma cercana y responsable."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-10">
                <div className="flex flex-col gap-3">
                  <h4 className="font-serif text-xl text-primary flex items-center gap-2">
                    <span className="text-accent text-sm">/</span> Conocimiento Local
                  </h4>
                  <p className="text-sm text-secondary/70 leading-relaxed font-light">Especialista en observación de aves y rastreo de fauna silvestre en microclimas específicos.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="font-serif text-xl text-primary flex items-center gap-2">
                    <span className="text-accent text-sm">/</span> Filosofía Consciente
                  </h4>
                  <p className="text-sm text-secondary/70 leading-relaxed font-light">Compromiso absoluto con el bienestar animal y la regeneración de senderos naturales.</p>
                </div>
              </div>

              <p className="text-secondary/50 text-xs leading-relaxed uppercase tracking-widest">
                {GUIDE_PROFILE.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
