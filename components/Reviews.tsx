
import React from 'react';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Amandine L.",
      review: "J'avais peur pour mon petit ventre, mais 'La Sensuelle' le magnifie. Je me sens... divine et enfin en paix avec mon image.",
      rating: 5,
      date: "IL Y A 2 JOURS"
    },
    {
      name: "Elena S.",
      review: "Le tintentement léger des pampilles quand je marche est ma nouvelle addiction. C'est plus qu'un bijou, c'est une caresse.",
      rating: 5,
      date: "IL Y A 1 SEMAINE"
    },
    {
      name: "Sonia M.",
      review: "Livraison discrète dans un écrin rose poudré magnifique. La qualité est incroyable. Mon mari n'a pas pu détourner le regard.",
      rating: 5,
      date: "IL Y A 3 SEMAINES"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-28 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-serif text-[clamp(2.5rem,7vw,5rem)] italic text-luxury-dark mb-4 tracking-tighter leading-none">Elles ont osé <span className="sensual-italic underline decoration-gold-premium/20 underline-offset-4">l'Éclat</span></h3>
          <p className="text-luxury-dark/40 uppercase tracking-[0.4em] text-[9px] md:text-[10px] font-black">Témoignages de nos Déesses</p>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6 bg-white/80 backdrop-blur-md px-6 md:px-10 py-4 md:py-5 rounded-full border border-gold-premium/10 shadow-sm">
            <div className="flex text-gold-premium space-x-0.5 md:space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />)}
            </div>
            <span className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] font-black text-luxury-dark whitespace-nowrap">4.9/5 • 1,200 avis</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {reviews.map((rev, i) => (
          <div key={i} className="group relative bg-white p-8 md:p-14 border border-rose-poudre/30 shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-xl rounded-sm">
            <div className="absolute top-0 right-8 md:right-14 translate-y-[-40%] text-rose-poudre/20 text-7xl md:text-[8rem] pointer-events-none font-serif">
              “
            </div>
            
            <div className="flex items-center justify-between mb-6 md:mb-10">
              <span className="font-serif italic text-2xl md:text-3xl text-luxury-dark tracking-tighter">{rev.name}</span>
              <span className="text-[8px] md:text-[9px] text-luxury-dark/30 tracking-[0.2em] font-black italic">{rev.date}</span>
            </div>
            
            <p className="text-lg md:text-2xl text-luxury-dark/80 leading-relaxed italic mb-8 md:mb-10 font-light">
              "{rev.review}"
            </p>
            
            <div className="flex text-gold-premium space-x-1 border-t border-rose-poudre/10 pt-6 md:pt-8">
              {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
