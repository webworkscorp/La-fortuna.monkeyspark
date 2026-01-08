
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import TourCard from './components/TourCard';
import Footer from './components/Footer';
import ConsultationForm from './components/ConsultationForm';
import { TOURS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Navbar />
      
      <Hero />
      
      <Welcome />

      {/* Tours Section */}
      <section id="tours" className="py-24 bg-neutral-light scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent uppercase tracking-[0.3em] text-sm font-bold block mb-4">Experiencias Exclusivas</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">Tours Destacados</h2>
            <div className="w-24 h-px bg-accent mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-secondary/70 font-light">
              Desde senderos volcánicos hasta encuentros cercanos con la fauna nocturna. Nuestras rutas están diseñadas para conectar profundamente con el entorno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TOURS.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Operational Mode Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold block mb-4">Excelencia Naturalista</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white italic mb-6">Nuestra Forma de Operar</h2>
              <div className="w-16 h-px bg-accent/40 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-10 bg-white/[0.03] border border-white/10 hover:border-accent/40 transition-all duration-500 rounded-sm">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-accent font-serif text-4xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">01</span>
                  <div className="h-px flex-grow bg-white/10"></div>
                </div>
                <h4 className="text-sm font-bold text-white mb-4 tracking-[0.2em] uppercase">Grupos Pequeños</h4>
                <p className="text-sm text-white/80 font-light leading-relaxed group-hover:text-white transition-colors">
                  Priorizamos la intimidad y el silencio para observar mejor la vida silvestre sin perturbar el ecosistema, garantizando una conexión real.
                </p>
              </div>

              <div className="group p-10 bg-white/[0.03] border border-white/10 hover:border-accent/40 transition-all duration-500 rounded-sm">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-accent font-serif text-4xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">02</span>
                  <div className="h-px flex-grow bg-white/10"></div>
                </div>
                <h4 className="text-sm font-bold text-white mb-4 tracking-[0.2em] uppercase">Atención Personal</h4>
                <p className="text-sm text-white/80 font-light leading-relaxed group-hover:text-white transition-colors">
                  Cada tour es una conversación profunda. Resolvemos todas tus dudas sobre la biodiversidad local en tiempo real con expertos apasionados.
                </p>
              </div>

              <div className="group p-10 bg-white/[0.03] border border-white/10 hover:border-accent/40 transition-all duration-500 rounded-sm">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-accent font-serif text-4xl opacity-50 group-hover:opacity-100 transition-opacity duration-500">03</span>
                  <div className="h-px flex-grow bg-white/10"></div>
                </div>
                <h4 className="text-sm font-bold text-white mb-4 tracking-[0.2em] uppercase">Turismo Responsable</h4>
                <p className="text-sm text-white/80 font-light leading-relaxed group-hover:text-white transition-colors">
                  Estamos enfocados en la conservación activa. Visitamos áreas protegidas y devolvemos valor directamente a la comunidad de La Fortuna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section id="alojamiento" className="pt-20 pb-32 bg-white relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
               <span className="text-accent uppercase tracking-[0.3em] text-sm font-bold block mb-4">Hospedaje</span>
               <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">Tu hogar en La Fortuna</h2>
               <p className="text-secondary/70 leading-relaxed mb-8 font-light max-w-xl">
                 ¿Buscas un lugar donde descansar después de la aventura? Ofrecemos disponibilidad de hospedaje económico en el corazón de La Fortuna, con desayuno tradicional incluido para que empieces el día con energía.
               </p>
               <ul className="space-y-4 mb-10">
                 <li className="flex items-center gap-3 text-secondary/80 font-light">
                   <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                   Desayuno típico costarricense
                 </li>
                 <li className="flex items-center gap-3 text-secondary/80 font-light">
                   <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                   Ubicación céntrica y segura
                 </li>
                 <li className="flex items-center gap-3 text-secondary/80 font-light">
                   <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                   Ambiente familiar y acogedor
                 </li>
               </ul>

               <ConsultationForm />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:sticky md:top-24">
              <img 
                src="https://i.imgur.com/IsYjONg.jpeg" 
                alt="Accommodation in La Fortuna" 
                className="w-full h-[500px] lg:h-[650px] object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
