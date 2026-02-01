
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import RecommendationSystem from './components/RecommendationSystem';
import StyleGuide from './components/StyleGuide';
import Benefits from './components/Benefits';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Community from './components/Community';
import SimulationOverlay from './components/SimulationOverlay';
import { CartItem, Product } from './types';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const openSimulation = (page: string) => {
    setActiveSimulation(page);
    document.body.style.overflow = 'hidden';
  };

  const closeSimulation = () => {
    setActiveSimulation(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen font-sans selection:bg-rose-poudre selection:text-luxury-dark bg-off-white">
      <Navbar onCartClick={() => setIsCartOpen(true)} cartCount={cart.reduce((a, b) => a + b.quantity, 0)} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="collections">
          <ProductGallery onAddToCart={addToCart} />
        </section>

        <section id="recommandations" className="py-20 bg-white">
          <RecommendationSystem onAddToCart={addToCart} />
        </section>

        <section id="style-guide" className="py-20">
          <StyleGuide />
        </section>

        <section id="benefits" className="bg-white">
          <Benefits />
        </section>

        <section id="avis" className="py-20 bg-rose-poudre/10">
          <Reviews />
        </section>

        <section id="profil" className="py-20 bg-white">
          <Community onOpenSim={openSimulation} />
        </section>
      </main>

      <Footer onOpenSim={openSimulation} />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={() => openSimulation('Checkout')}
      />

      {activeSimulation && (
        <SimulationOverlay 
          pageType={activeSimulation} 
          onClose={closeSimulation} 
        />
      )}
    </div>
  );
};

export default App;
