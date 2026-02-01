
import React from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, Minus, Plus } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-luxury-dark/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <div className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[101] shadow-2xl transition-transform duration-700 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-rose-poudre/30 flex items-center justify-between">
            <div className="flex items-center space-x-3 text-luxury-dark">
              <ShoppingBag className="w-5 h-5 text-gold-premium" />
              <h3 className="font-serif text-2xl italic">Votre Panier</h3>
              <span className="text-[10px] bg-rose-poudre/30 px-2 py-0.5 rounded-full font-black tracking-tighter">{items.reduce((a, b) => a + b.quantity, 0)}</span>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-rose-poudre/20 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-off-white flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-luxury-dark/10" />
                </div>
                <p className="text-luxury-dark/40 italic font-light text-lg">Votre panier attend de révéler votre éclat...</p>
                <button 
                  onClick={onClose} 
                  className="text-[10px] uppercase tracking-[0.3em] font-black text-gold-premium border-b border-gold-premium pb-1 hover:text-luxury-dark transition-all"
                >
                  Découvrir les collections
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex space-x-6 animate-in fade-in duration-500">
                  <div className="w-24 aspect-[3/4] bg-off-white overflow-hidden rounded-sm">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="font-serif text-xl italic mb-1">{item.name}</h4>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gold-soft font-black italic mb-3">{item.emotionalTag}</p>
                      
                      <div className="flex items-center space-x-3 border border-rose-poudre/30 rounded-full px-2 py-1 w-max">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="hover:text-gold-premium"><Minus className="w-3 h-3" /></button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="hover:text-gold-premium"><Plus className="w-3 h-3" /></button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-serif italic text-gold-premium">{(item.price * item.quantity).toFixed(0)}€</span>
                      <button onClick={() => onRemove(item.id)} className="text-luxury-dark/20 hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-10 bg-off-white border-t border-rose-poudre/20 space-y-6">
              <div className="flex justify-between text-3xl font-serif text-luxury-dark">
                <span>Total</span>
                <span className="italic">{total.toFixed(0)}€</span>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full bg-luxury-dark text-white py-6 rounded-full uppercase tracking-[0.4em] font-black text-[10px] flex items-center justify-center space-x-3 hover:bg-gold-premium transition-all duration-700 shadow-2xl group"
              >
                <span>Valider mon panier</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
