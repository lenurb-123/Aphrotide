
import React from 'react';
import { X, ShieldCheck, Truck, Sparkles, CreditCard, Heart } from 'lucide-react';

interface SimulationOverlayProps {
  pageType: string;
  onClose: () => void;
}

const SimulationOverlay: React.FC<SimulationOverlayProps> = ({ pageType, onClose }) => {
  const getContent = () => {
    switch (pageType) {
      case 'Checkout':
        return {
          icon: <CreditCard className="w-12 h-12 text-gold-premium" />,
          title: "Paiement Sécurisé",
          subtitle: "Finalisez votre métamorphose",
          body: "Nous préparons votre tunnel de paiement crypté. Vos bijoux Aphrodite seront emballés dans un écrin de soie sous 24h.",
          cta: "Simuler la confirmation"
        };
      case 'Mentions Légales':
        return {
          icon: <ShieldCheck className="w-12 h-12 text-gold-premium" />,
          title: "Mentions Légales",
          subtitle: "La transparence d'Aphrodite",
          body: "Aphrodite Chains est une maison de haute bijouterie fantaisie enregistrée à Paris. Nous protégeons vos données comme vos courbes : avec le plus grand soin.",
          cta: "Retour à l'éclat"
        };
      case 'Soin des Bijoux':
        return {
          icon: <Sparkles className="w-12 h-12 text-gold-premium" />,
          title: "Rituel d'Entretien",
          subtitle: "Préservez votre or",
          body: "Pour garder l'éclat de votre chaîne, évitez le contact direct avec les parfums. Nettoyez-la avec un chiffon doux après chaque danse.",
          cta: "J'ai compris"
        };
      case 'Suivi':
        return {
          icon: <Truck className="w-12 h-12 text-gold-premium" />,
          title: "Suivi de Commande",
          subtitle: "Votre désir est en chemin",
          body: "Entrez votre numéro de commande pour localiser vos bijoux. Nos coursiers livrent votre commande dans une discrétion absolue.",
          cta: "Vérifier à nouveau"
        };
      default:
        return {
          icon: <Heart className="w-12 h-12 text-gold-premium" />,
          title: "Espace Confidentiel",
          subtitle: "À venir très bientôt",
          body: "Cette section est en cours de création par nos artisans digitaux pour vous offrir une expérience toujours plus divine.",
          cta: "Retour"
        };
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center p-8 animate-in fade-in duration-500">
      <button onClick={onClose} className="absolute top-10 right-10 p-4 hover:bg-rose-poudre/20 rounded-full transition-colors">
        <X className="w-8 h-8 text-luxury-dark" />
      </button>

      <div className="max-w-xl text-center space-y-8">
        <div className="flex justify-center mb-4">{content.icon}</div>
        <h2 className="font-serif text-5xl md:text-7xl italic text-luxury-dark">{content.title}</h2>
        <p className="text-[11px] uppercase tracking-[0.5em] text-gold-premium font-black">{content.subtitle}</p>
        <p className="text-xl text-luxury-dark/60 font-light leading-relaxed italic">
          {content.body}
        </p>
        <div className="pt-10">
          <button 
            onClick={onClose}
            className="bg-luxury-dark text-white px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-black hover:bg-gold-premium transition-all duration-700 shadow-2xl"
          >
            {content.cta}
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 text-[10px] uppercase tracking-[0.3em] text-luxury-dark/20 font-black">
        Aphrodite Chains • Maison de Confiance
      </div>
    </div>
  );
};

export default SimulationOverlay;
