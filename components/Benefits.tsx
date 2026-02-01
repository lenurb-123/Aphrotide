
import React from 'react';
import { ShieldCheck, Heart, Sliders, Sparkles } from 'lucide-react';

const Benefits: React.FC = () => {
  const items = [
    {
      icon: <Heart className="w-10 h-10 stroke-[1px]" />,
      title: "Confiance Assumée",
      text: "Nos bijoux ne cachent rien. Ils magnifient ce que vous avez déjà : un corps divin."
    },
    {
      icon: <Sliders className="w-10 h-10 stroke-[1px]" />,
      title: "Ajustabilité Totale",
      text: "Parce que votre corps change et vit, nos chaînes sont entièrement réglables pour un confort absolu."
    },
    {
      icon: <Sparkles className="w-10 h-10 stroke-[1px]" />,
      title: "Éclat Premium",
      text: "Finition Or 24K ou Argent Rhodié pour un bijou qui dure aussi longtemps que vos souvenirs."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 stroke-[1px]" />,
      title: "Garantie 'Sublimée'",
      text: "Si vous ne vous sentez pas instantanément plus belle, nous reprenons votre bijou sans questions."
    }
  ];

  return (
    <div className="py-32 bg-luxury-dark text-white overflow-hidden relative">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-6 group">
            <div className="text-gold-premium mb-2 transition-transform duration-700 group-hover:scale-110">{item.icon}</div>
            <h4 className="font-serif text-3xl italic tracking-tight">{item.title}</h4>
            <p className="text-[10px] text-white/40 leading-relaxed max-w-[220px] uppercase tracking-[0.4em] font-black italic">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
