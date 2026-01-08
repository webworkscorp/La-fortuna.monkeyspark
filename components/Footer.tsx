
import React from 'react';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
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
    <footer id="contacto" className="bg-[#162b1e] text-white py-24 border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif mb-6 italic text-white tracking-tight">
              La Fortuna <br/>
              <span className="text-accent not-italic font-sans text-xl font-bold uppercase tracking-[0.2em]">Howler Monkeys Park</span>
            </h2>
            <p className="text-neutral-300 font-light leading-relaxed mb-8 max-w-md text-base">
              Autenticidad y respeto por la naturaleza en cada paso. Descubre los secretos del Volcán Arenal y la vida silvestre local con guías apasionados por la conservación.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-5">
                <a 
                  href="https://www.facebook.com/share/16jyk3HnoP/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
                <a 
                  href="https://wa.me/50683636725" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.406c0 6.555-5.332 11.887-11.888 11.887-2.015 0-3.992-.511-5.741-1.481l-6.243 1.646zm6.18-3.923l.345.205c1.403.834 2.972 1.275 4.588 1.275 4.904 0 8.895-3.991 8.895-8.895 0-2.376-.925-4.61-2.604-6.289s-3.912-2.603-6.289-2.603c-4.904 0-8.895 3.991-8.895 8.895 0 1.666.463 3.292 1.339 4.717l.225.367-1.065 3.89 3.998-1.056zm11.232-6.554c-.29-.145-1.713-.846-1.978-.942-.266-.097-.459-.145-.653.145-.193.291-.748.944-.917 1.138-.17.194-.339.219-.628.074-.29-.145-1.223-.45-2.33-1.438-.861-.768-1.441-1.718-1.61-2.008-.17-.291-.018-.447.127-.591.13-.13.29-.339.435-.508.145-.17.193-.291.29-.484.097-.194.048-.363-.024-.508-.073-.145-.653-1.573-.895-2.153-.235-.566-.475-.489-.653-.498-.169-.008-.362-.01-.555-.01s-.508.073-.773.363c-.266.291-1.015.992-1.015 2.42s1.039 2.809 1.184 3.002c.145.194 2.043 3.12 4.949 4.373.691.298 1.231.476 1.651.609.694.221 1.327.19 1.826.115.557-.083 1.713-.699 1.954-1.376.242-.677.242-1.258.17-1.376-.073-.118-.266-.194-.556-.339z"/></svg>
                </a>
              </div>
              <div className="text-sm font-medium tracking-widest text-white flex items-center gap-3">
                <span className="text-accent">WHATSAPP:</span>
                <a href="https://wa.me/50683636725" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  +506 8363-6725
                </a>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="lg:pl-12">
            <h4 className="uppercase tracking-[0.3em] text-[11px] font-bold mb-8 text-accent">Navegación</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="text-neutral-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-accent transition-all"></span> Inicio
                </a>
              </li>
              <li>
                <a href="#tours" onClick={(e) => handleNavClick(e, '#tours')} className="text-neutral-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-accent transition-all"></span> Tours Destacados
                </a>
              </li>
              <li>
                <a href="#sobre-mi" onClick={(e) => handleNavClick(e, '#sobre-mi')} className="text-neutral-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-accent transition-all"></span> Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#alojamiento" onClick={(e) => handleNavClick(e, '#alojamiento')} className="text-neutral-300 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-accent transition-all"></span> Hospedaje
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 font-medium uppercase tracking-[0.3em]">
          <p>© 2026 La Fortuna Howler Monkeys Park. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <span>Pura Vida</span>
            <span className="text-accent/50">•</span>
            <span>Costa Rica</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
