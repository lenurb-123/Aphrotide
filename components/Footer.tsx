
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  onOpenSim: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenSim }) => {
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-32 pb-16 border-t border-rose-poudre/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="space-y-10">
            <div className="flex flex-col">
              <h2 className="font-serif text-5xl text-luxury-dark italic tracking-tighter">Aphrodite</h2>
              <span className="text-[10px] uppercase tracking-[0.5em] text-gold-premium font-black mt-1">Chains</span>
            </div>
            <p className="text-[12px] text-luxury-dark/50 leading-relaxed uppercase tracking-[0.2em] font-bold italic">
              Dédiés à la célébration de la beauté féminine sous toutes ses formes. Conçu avec amour entre Paris et la Méditerranée.
            </p>
            <div className="flex space-x-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-luxury-dark/40 hover:text-gold-premium transition-colors duration-700"><Instagram className="w-6 h-6 stroke-[1.5px]" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-luxury-dark/40 hover:text-gold-premium transition-colors duration-700"><Facebook className="w-6 h-6 stroke-[1.5px]" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-luxury-dark/40 hover:text-gold-premium transition-colors duration-700"><Twitter className="w-6 h-6 stroke-[1.5px]" /></a>
            </div>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.5em] font-black text-luxury-dark mb-12 border-b border-rose-poudre/40 pb-5">Explorez</h5>
            <ul className="space-y-6 text-[13px] text-luxury-dark/60 font-medium uppercase tracking-[0.2em]">
              <li><button onClick={scrollToHome} className="hover:text-gold-premium transition-all text-left">La Collection</button></li>
              <li><button onClick={scrollToHome} className="hover:text-gold-premium transition-all text-left">Ma Recommandation</button></li>
              <li><button onClick={scrollToHome} className="hover:text-gold-premium transition-all text-left">Guide de Style</button></li>
              <li><button onClick={scrollToHome} className="hover:text-gold-premium transition-all text-left italic font-black text-gold-soft border-b border-gold-soft/20 pb-1">Mon Profil Sacré</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.5em] font-black text-luxury-dark mb-12 border-b border-rose-poudre/40 pb-5">Aide & Contact</h5>
            <ul className="space-y-6 text-[13px] text-luxury-dark/60 font-medium uppercase tracking-[0.2em]">
              <li><button onClick={() => onOpenSim('Suivi')} className="hover:text-gold-premium transition-all text-left font-black">Suivre ma commande</button></li>
              <li><button onClick={() => onOpenSim('Soin des Bijoux')} className="hover:text-gold-premium transition-all text-left">Soin des Bijoux</button></li>
              <li><button onClick={() => onOpenSim('FAQ')} className="hover:text-gold-premium transition-all text-left">Questions Fréquentes</button></li>
              <li><button onClick={() => onOpenSim('Contact')} className="hover:text-gold-premium transition-all text-left font-black text-gold-soft">Email Direct</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.5em] font-black text-luxury-dark mb-12 border-b border-rose-poudre/40 pb-5">La Lettre Aphrodite</h5>
            <p className="text-[14px] text-luxury-dark/50 mb-10 font-light italic leading-relaxed">Inscrivez-vous pour recevoir nos rituels de style et nos lancements confidentiels.</p>
            <div className="flex border-b border-luxury-dark/20 py-4 transition-colors hover:border-gold-premium group">
              <input 
                type="email" 
                placeholder="Votre email sacré" 
                className="bg-transparent border-none outline-none text-[13px] flex-1 font-light tracking-widest" 
              />
              <button className="text-[10px] uppercase tracking-[0.4em] font-black text-gold-premium group-hover:text-luxury-dark transition-all">Rejoindre</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-14 border-t border-rose-poudre/30 text-[9px] uppercase tracking-[0.5em] text-luxury-dark/30 font-black space-y-8 md:space-y-0 italic">
          <p>© 2026 APHRODITE CHAINS. L'ÉCLAT DE VOTRE CORPS.</p>
          <div className="flex space-x-12">
            <button onClick={() => onOpenSim('Mentions Légales')} className="hover:text-gold-premium transition-colors">Mentions Légales</button>
            <button onClick={() => onOpenSim('Confidentialité')} className="hover:text-gold-premium transition-colors">Confidentialité</button>
            <button onClick={() => onOpenSim('CGV')} className="hover:text-gold-premium transition-colors">CGV</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
