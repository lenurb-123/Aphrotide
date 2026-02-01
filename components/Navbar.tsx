
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  onCartClick: () => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] py-3' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-8 flex items-center justify-between">
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-luxury-dark" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>

        {/* Links Desktop - Tous pointent vers l'accueil via JS pour éviter l'erreur de connexion */}
        <div className="hidden md:flex items-center space-x-12 text-[10px] uppercase tracking-[0.4em] font-black text-luxury-dark/60">
          <button onClick={scrollToHero} className="hover:text-gold-premium transition-all duration-500 relative group uppercase">
            La Collection
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-premium transition-all duration-500 group-hover:w-full"></span>
          </button>
          <button onClick={scrollToHero} className="hover:text-gold-premium transition-all duration-500 relative group uppercase">
            Ma Recommandation
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-premium transition-all duration-500 group-hover:w-full"></span>
          </button>
          <button onClick={scrollToHero} className="hover:text-gold-premium transition-all duration-500 relative group uppercase">
            Guide de Style
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-premium transition-all duration-500 group-hover:w-full"></span>
          </button>
        </div>

        {/* Logo */}
        <button onClick={scrollToHero} className="flex flex-col items-center group">
          <h1 className="font-serif text-3xl md:text-5xl text-luxury-dark tracking-tighter leading-none italic select-none group-hover:text-gold-premium transition-colors">
            Aphrodite
          </h1>
          <span className="text-[9px] uppercase tracking-[0.6em] text-gold-premium font-black mt-1">Chains</span>
        </button>

        {/* Actions */}
        <div className="flex items-center space-x-6 md:space-x-8">
          <button className="text-luxury-dark/80 hover:text-gold-premium transition-colors" title="Rechercher">
            <Search className="w-5 h-5 stroke-[1.25px]" />
          </button>
          <button onClick={scrollToHero} className="hidden sm:block text-luxury-dark/80 hover:text-gold-premium transition-colors" title="Mon Profil Sacré">
            <User className="w-5 h-5 stroke-[1.25px]" />
          </button>
          <button 
            onClick={onCartClick}
            className="relative text-luxury-dark group flex items-center"
            title="Mon Panier"
          >
            <ShoppingBag className="w-6 h-6 stroke-[1.25px] group-hover:text-gold-premium transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-premium text-white text-[8px] w-4.5 h-4.5 flex items-center justify-center rounded-full font-black shadow-lg animate-[pulse_2s_infinite]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-10 md:hidden animate-in fade-in duration-500">
          <button className="self-end mb-16 p-2 rounded-full bg-rose-poudre/10" onClick={() => setMobileMenuOpen(false)}>
            <X className="w-8 h-8 text-luxury-dark" />
          </button>
          <div className="flex flex-col space-y-10 text-5xl font-serif italic text-luxury-dark">
            <button className="text-left hover:text-gold-premium transition-colors italic" onClick={scrollToHero}>La Collection</button>
            <button className="text-left hover:text-gold-premium transition-colors italic" onClick={scrollToHero}>Ma Recommandation</button>
            <button className="text-left hover:text-gold-premium transition-colors italic" onClick={scrollToHero}>Guide de Style</button>
            <button className="text-left hover:text-gold-premium transition-colors italic" onClick={scrollToHero}>Mon Profil Sacré</button>
          </div>
          <div className="mt-auto pt-10 border-t border-rose-poudre/30">
            <div className="text-[9px] uppercase tracking-[0.5em] text-gold-premium font-black mb-4">Engagement Luxury</div>
            <p className="text-luxury-dark/40 text-[10px] leading-relaxed italic uppercase font-bold tracking-widest">Livraison confidentielle offerte dès 150€ d'achat.</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
