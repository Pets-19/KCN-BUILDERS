import { useEffect, useRef } from 'react';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We'll remove the particle animation creation to fix the red dots
    // Keep the ref for compatibility but don't create particles
    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      {/* Keep the ref but don't populate with particles */}
      <div ref={particlesRef} className="fixed inset-0 overflow-hidden pointer-events-none z-10"></div>
      
      <section id="home" className="relative h-screen flex items-center text-white text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-kcn-black/50 z-0"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1494891848038-7bd202a2afeb")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Keep shimmer effect but make it more subtle */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-kcn-red/5 to-transparent animate-shimmer z-0"></div>
        
        <div className="container relative z-20">
          <div className="max-w-3xl mx-auto">
            <img 
              src="/kcn.png" 
              alt="KCN Logo" 
              className="h-24 mx-auto mb-8 animate-hero-title"
            />
            <h1 className="font-playfair text-4xl md:text-6xl mb-6 font-bold leading-tight animate-hero-title">
              Building For The Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-hero-subtitle">
              Where vision meets innovation. We transform your ideas into architectural excellence that stands the test of time.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center animate-hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Projects
              </button>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="w-8 h-12 border-2 border-white rounded-3xl relative">
            <div 
              className="w-1.5 h-2.5 mx-auto mt-2 bg-white rounded animate-scroll"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
