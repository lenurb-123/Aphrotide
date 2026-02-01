
import React from 'react';

const StyleGuide: React.FC = () => {
  const situations = [
    {
      title: "À la plage",
      copy: "La chaîne captant la lumière du soleil couchant à chaque pas, créant un éclat magnétique sur votre peau libre.",
      img: "https://i.pinimg.com/1200x/ca/5b/d8/ca5bd89029a6020fa2238a20dd682201.jpg"
    },
    {
      title: "En soirée",
      copy: "Sous une robe de soie noire, la chaîne devient un secret partagé, un éclat mystérieux soulignant votre port de reine.",
      img: "https://i.pinimg.com/736x/d9/47/03/d947030b49b29b1e3e067bb14e10bbe4.jpg"
    },
    {
      title: "Au quotidien",
      copy: "Sur un jean taille haute, elle apporte cette touche de sophistication charnelle inattendue qui murmure votre puissance.",
      img: "https://i.pinimg.com/736x/a7/6c/05/a76c0546ba26eed1450a662bbe840ef2.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
      <div className="text-center mb-16 md:mb-28">
        <h3 className="font-serif text-[clamp(2.5rem,7vw,5rem)] text-luxury-dark italic mb-4 md:mb-8 tracking-tighter leading-none">Projetez votre <span className="sensual-italic">Désir</span></h3>
        <p className="text-luxury-dark/50 font-light text-lg md:text-2xl italic max-w-2xl mx-auto leading-relaxed px-4">Comment sublimerez-vous votre silhouette aujourd'hui ?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
        {situations.map((sit, idx) => (
          <div key={idx} className="group cursor-default">
            <div className="relative overflow-hidden mb-6 md:mb-10 aspect-[3/4] rounded-sm shadow-md group">
              <img src={sit.img} alt={sit.title} className="w-full h-full object-cover transition-transform duration-[4s] ease-out md:group-hover:scale-110" />
              <div className="absolute inset-0 bg-gold-premium/10 opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 translate-y-2 md:translate-y-8 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-700 bg-gradient-to-t from-luxury-dark/70 to-transparent">
                 <span className="text-white text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-black">Inspiration Style</span>
              </div>
            </div>
            <h4 className="font-serif text-3xl md:text-4xl mb-4 italic tracking-tight text-luxury-dark">{sit.title}</h4>
            <p className="text-base md:text-xl text-luxury-dark/70 leading-relaxed italic font-light text-balance">
              {sit.copy}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleGuide;
