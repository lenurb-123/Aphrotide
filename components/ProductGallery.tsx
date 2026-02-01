
import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Plus, Heart } from 'lucide-react';

interface ProductGalleryProps {
  onAddToCart: (p: Product) => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ onAddToCart }) => {
  return (
    <section className="py-32 container mx-auto px-6 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-rose-poudre/20 pb-16">
        <div className="max-w-2xl space-y-6">
          <span className="text-gold-premium uppercase tracking-[0.5em] text-[10px] font-black">Collection Hiver 2026</span>
          <h3 className="font-serif text-[clamp(2.5rem,8vw,6rem)] text-luxury-dark italic leading-[1] tracking-tighter">
            L'Éloge de la <span className="gold-gradient-text">Silhouette.</span>
          </h3>
          <p className="text-luxury-dark/50 font-light text-2xl leading-relaxed italic">
            Chaque pièce est une œuvre d'art pensée pour capturer la lumière au creux de votre peau.
          </p>
        </div>
        <div className="hidden md:flex space-x-10 text-[11px] uppercase tracking-[0.4em] font-black text-luxury-dark/30 italic">
          <span>6 Modèles Exclusifs</span>
          <div className="w-px h-10 bg-rose-poudre/30 self-center"></div>
          <span>Plaqué Or 24K</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#F3F3F3] mb-8 product-image-container group">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-[3s] cubic-bezier(0.2, 1, 0.3, 1) group-hover:scale-110"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-luxury-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <button 
                className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:text-gold-premium"
              >
                <Heart className="w-4 h-4" />
              </button>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md py-6 translate-y-24 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out flex items-center justify-center space-x-3 shadow-2xl hover:bg-luxury-dark hover:text-white"
              >
                <Plus className="w-5 h-5" />
                <span className="text-[11px] uppercase tracking-[0.3em] font-black">Ajouter au Panier</span>
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <h4 className="font-serif text-4xl text-luxury-dark tracking-tight italic">{product.name}</h4>
                <span className="text-xl font-light text-gold-premium italic tracking-tighter">{product.price}€</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-[10px] text-gold-premium font-black uppercase tracking-[0.2em] italic border-r border-gold-premium/20 pr-3">{product.category}</span>
                <span className="text-[10px] text-luxury-dark/40 font-bold uppercase tracking-[0.2em] italic">{product.emotionalTag}</span>
              </div>
              
              <p className="text-luxury-dark/60 text-lg leading-relaxed font-light line-clamp-2 italic">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;
