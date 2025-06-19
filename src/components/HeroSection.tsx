
import React, { useEffect, useRef } from 'react';
import { Smartphone, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation trigger without GSAP for now
    if (heroContentRef.current) {
      heroContentRef.current.classList.add('animate-fade-in');
    }
    if (phoneRef.current) {
      phoneRef.current.classList.add('animate-float');
    }
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="pt-20 lg:pt-28 pb-16 lg:pb-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Content */}
          <div ref={heroContentRef} className="flex-1 text-center lg:text-left opacity-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Solusi Hukum Cepat & Akurat di{' '}
              <span className="text-primary">Genggaman Anda</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Pasal Pintar adalah aplikasi informasi hukum berbasis AI untuk menyederhanakan 
              pemahaman peraturan perundang-undangan di Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToWaitlist}
                className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Masuk Daftar Tunggu
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-slate-300 text-slate-700 hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div ref={phoneRef} className="relative">
              <div className="w-72 h-[600px] bg-slate-800 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone UI Mockup */}
                  <div className="bg-primary h-20 flex items-center justify-center">
                    <h3 className="text-white font-bold text-lg">Pasal Pintar</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="bg-slate-100 h-12 rounded-lg flex items-center px-4">
                      <span className="text-slate-500 text-sm">Tanya tentang hukum...</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <div className="h-3 bg-primary/30 rounded mb-2"></div>
                        <div className="h-3 bg-primary/20 rounded w-3/4"></div>
                      </div>
                      <div className="bg-slate-100 p-4 rounded-lg">
                        <div className="h-3 bg-slate-300 rounded mb-2"></div>
                        <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-primary/10 p-3 rounded-lg text-center">
                        <Smartphone size={24} className="mx-auto text-primary mb-1" />
                        <span className="text-xs text-slate-600">Chat AI</span>
                      </div>
                      <div className="bg-slate-100 p-3 rounded-lg text-center">
                        <div className="w-6 h-6 bg-slate-300 rounded mx-auto mb-1"></div>
                        <span className="text-xs text-slate-600">Forum</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
