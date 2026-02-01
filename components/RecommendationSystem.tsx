
import React, { useState, useMemo } from 'react';
import { RecommendationProfile, Product } from '../types';
import { PRODUCTS } from '../constants';
import { Sparkles, CheckCircle2, Heart } from 'lucide-react';

interface RecommendationSystemProps {
  onAddToCart: (p: Product) => void;
}

const RecommendationSystem: React.FC<RecommendationSystemProps> = ({ onAddToCart }) => {
  const [profile, setProfile] = useState<RecommendationProfile>({
    bodyType: 'none',
    tummyType: 'none',
    skinTone: 'none'
  });

  const isComplete = profile.bodyType !== 'none' && profile.tummyType !== 'none' && profile.skinTone !== 'none';

  const recommendedProduct = useMemo(() => {
    if (!isComplete) return null;
    if (profile.bodyType === 'wide-hips') return PRODUCTS.find(p => p.category === 'minimalist');
    if (profile.bodyType === 'narrow-hips') return PRODUCTS.find(p => p.category === 'sculpt');
    if (profile.tummyType === 'curvy') return PRODUCTS.find(p => p.category === 'sensual');
    return PRODUCTS[2]; // Default to La Royale
  }, [profile, isComplete]);

  const adviceText = useMemo(() => {
    let parts = [];
    if (profile.bodyType === 'wide-hips') parts.push("Si vous aimez mettre vos courbes en valeur en douceur, une chaîne fine soulignera magnifiquement l'amplitude de vos hanches.");
    if (profile.bodyType === 'narrow-hips') parts.push("Pour créer un volume élégant et structuré, nos modèles multi-rangs sont vos meilleurs alliés.");
    if (profile.tummyType === 'curvy') parts.push("Pensée pour sublimer votre ventre, pas pour le cacher : un tombé naturel et souple accompagnera chacun de vos souffles.");
    if (profile.skinTone === 'dark') parts.push("L'or 24K chaud révélera tout l'éclat de votre mélanine solaire.");
    return parts.join(" ");
  }, [profile]);

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-gold-premium text-[11px] font-black uppercase tracking-[0.4em]">Consultation Privée</span>
            <h3 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] italic text-luxury-dark">
              Trouvons la chaîne qui <br/> murmure votre nom.
            </h3>
            <p className="text-xl text-luxury-dark/50 font-light italic max-w-lg">
              Chaque corps raconte une histoire. Répondez à ces quelques questions pour découvrir la pièce qui honorera votre silhouette.
            </p>
          </div>

          <div className="space-y-10">
            {/* Step 1 */}
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-luxury-dark/40">01. La courbe de vos hanches</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { id: 'wide-hips', label: 'Voluptueuses' },
                  { id: 'narrow-hips', label: 'Fines' },
                  { id: 'hourglass', label: 'Équilibrées' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setProfile({ ...profile, bodyType: opt.id as any })}
                    className={`px-8 py-4 rounded-full border text-[11px] uppercase tracking-[0.15em] font-black transition-all duration-500 ${profile.bodyType === opt.id ? 'bg-luxury-dark text-white border-luxury-dark' : 'bg-transparent border-rose-poudre/30 text-luxury-dark/60 hover:border-gold-premium'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-luxury-dark/40">02. Votre ventre est plutôt...</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { id: 'flat', label: 'Plat & Tonique' },
                  { id: 'curvy', label: 'Légèrement arrondi' },
                  { id: 'marked', label: 'Affirmé' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setProfile({ ...profile, tummyType: opt.id as any })}
                    className={`px-8 py-4 rounded-full border text-[11px] uppercase tracking-[0.15em] font-black transition-all duration-500 ${profile.tummyType === opt.id ? 'bg-luxury-dark text-white border-luxury-dark' : 'bg-transparent border-rose-poudre/30 text-luxury-dark/60 hover:border-gold-premium'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.2em] font-black text-luxury-dark/40">03. Votre carnation</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { id: 'light', label: 'Or Clair / Champagne' },
                  { id: 'medium', label: 'Rose Gold' },
                  { id: 'dark', label: 'Or Chaud' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setProfile({ ...profile, skinTone: opt.id as any })}
                    className={`px-8 py-4 rounded-full border text-[11px] uppercase tracking-[0.15em] font-black transition-all duration-500 ${profile.skinTone === opt.id ? 'bg-luxury-dark text-white border-luxury-dark' : 'bg-transparent border-rose-poudre/30 text-luxury-dark/60 hover:border-gold-premium'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Panel Résultat */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-br from-rose-poudre/20 to-gold-premium/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative bg-white border border-rose-poudre/20 p-12 md:p-16 rounded-[3rem] shadow-2xl flex flex-col items-center text-center">
            {!isComplete ? (
              <div className="space-y-8 animate-pulse">
                <div className="w-24 h-24 rounded-full bg-off-white flex items-center justify-center mx-auto">
                  <Sparkles className="w-10 h-10 text-gold-premium/40" />
                </div>
                <h4 className="font-serif text-3xl italic">L'analyse de votre aura...</h4>
                <p className="text-luxury-dark/40 font-light italic">Confiez-nous vos courbes pour une recommandation sur-mesure.</p>
              </div>
            ) : (
              <div className="w-full reveal-anim">
                <div className="flex items-center justify-center space-x-2 text-gold-premium mb-10">
                  <Heart className="w-4 h-4 fill-current" />
                  <span className="text-[10px] uppercase tracking-[0.5em] font-black">La Révélation</span>
                </div>
                
                <img 
                  src={recommendedProduct?.imageUrl} 
                  alt={recommendedProduct?.name} 
                  className="w-56 h-56 object-cover rounded-full mx-auto border-2 border-gold-premium/20 p-3 shadow-2xl mb-10 group-hover:scale-105 transition-transform duration-700"
                />

                <h4 className="font-serif text-5xl italic mb-4">{recommendedProduct?.name}</h4>
                <p className="text-gold-premium font-black text-[11px] tracking-[0.3em] uppercase mb-8">{recommendedProduct?.price}€</p>

                <div className="bg-off-white/80 p-8 rounded-3xl text-lg italic text-luxury-dark/70 leading-relaxed mb-10 font-light shadow-inner">
                  "{adviceText}"
                </div>

                <button 
                  onClick={() => recommendedProduct && onAddToCart(recommendedProduct)}
                  className="w-full bg-luxury-dark text-white py-6 rounded-full font-black uppercase tracking-[0.3em] text-[11px] hover:bg-gold-premium transition-all duration-700 shadow-xl"
                >
                  Adopter mon bijou
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationSystem;
