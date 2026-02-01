
import React from 'react';
import { Sparkles, Crown, Heart } from 'lucide-react';

interface CommunityProps {
  onOpenSim: (page: string) => void;
}

const Community: React.FC<CommunityProps> = ({ onOpenSim }) => {
  return (
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <div className="inline-block p-4 rounded-full bg-rose-poudre/20 mb-8">
        <Crown className="w-8 h-8 text-gold-premium" />
      </div>
      <h3 className="font-serif text-5xl md:text-6xl text-luxury-dark mb-6 italic">Mon Profil <span className="sensual-italic">Sacré</span></h3>
      <p className="text-luxury-dark/60 text-xl font-light mb-12 leading-relaxed">
        Rejoignez le <span className="italic">Cercle des Déesses</span>. Un espace exclusif où vos mesures, vos préférences et votre historique d'éclat sont précieusement conservés pour vous offrir une expérience toujours plus intime et sur-mesure.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <button onClick={() => onOpenSim('Privilèges')} className="p-8 border border-rose-poudre/30 rounded-2xl bg-off-white/50 hover:bg-white transition-all">
          <Sparkles className="w-6 h-6 text-gold-premium mx-auto mb-4" />
          <h4 className="font-serif text-xl mb-2">Offres Privées</h4>
          <p className="text-[9px] text-luxury-dark/40 uppercase tracking-widest font-black">Accès prioritaire</p>
        </button>
        <button onClick={() => onOpenSim('Soin des Bijoux')} className="p-8 border border-rose-poudre/30 rounded-2xl bg-off-white/50 hover:bg-white transition-all">
          <Heart className="w-6 h-6 text-gold-premium mx-auto mb-4" />
          <h4 className="font-serif text-xl mb-2">Rituels de Soin</h4>
          <p className="text-[9px] text-luxury-dark/40 uppercase tracking-widest font-black">Conseils experts</p>
        </button>
        <button onClick={() => onOpenSim('Sur-Mesure')} className="p-8 border border-rose-poudre/30 rounded-2xl bg-off-white/50 hover:bg-white transition-all">
          <Crown className="w-6 h-6 text-gold-premium mx-auto mb-4" />
          <h4 className="font-serif text-xl mb-2">Ajustements</h4>
          <p className="text-[9px] text-luxury-dark/40 uppercase tracking-widest font-black">Service exclusif</p>
        </button>
      </div>

      <button onClick={() => onOpenSim('Login')} className="bg-luxury-dark text-white px-16 py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-black hover:bg-gold-premium transition-all duration-700 shadow-2xl hover:scale-105">
        Créer mon Profil Divin
      </button>
    </div>
  );
};

export default Community;
