
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Artistique */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.pinimg.com/1200x/16/af/7d/16af7d101cfb055fb075055487cb7d9f.jpg" 
          alt="Divine Silhouette"
          className="w-full h-full object-cover object-[center_20%] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-off-white via-off-white/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl reveal-anim">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px w-12 bg-gold-premium"></div>
            <span className="text-gold-premium uppercase tracking-[0.5em] text-[10px] font-black">
              Luxe Méditerranéen & Féminité Divine
            </span>
          </div>
          
          <h2 className="font-serif text-[clamp(3.5rem,12vw,10rem)] text-luxury-dark leading-[0.85] mb-12 tracking-tighter">
            Sublimez votre <br/>
            <span className="italic gold-gradient-text">Ventre Sacré.</span>
          </h2>

          <p className="text-xl md:text-3xl text-luxury-dark/70 leading-relaxed mb-16 max-w-2xl font-light italic">
            Bien plus qu'un bijou, une caresse dorée pensée pour honorer chaque courbe, chaque mouvement, <span className="text-luxury-dark font-medium underline decoration-rose-poudre/50 underline-offset-8">votre corps réel</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <button 
              onClick={() => scrollToSection('collections')}
              className="bg-luxury-dark text-white px-16 py-8 rounded-full flex items-center justify-center hover:bg-gold-premium transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.1)] group text-[11px] uppercase tracking-[0.3em] font-black"
            >
              Découvrir la Collection
              <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('recommandations')}
              className="group flex flex-col items-start"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] font-black text-luxury-dark">Trouver ma chaîne</span>
              <span className="h-px w-0 bg-gold-premium group-hover:w-full transition-all duration-500 mt-1"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-gold-premium to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
