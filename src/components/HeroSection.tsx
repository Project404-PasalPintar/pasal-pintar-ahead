import React, { useEffect, useRef } from "react";
import { Smartphone, ArrowRight } from "lucide-react";
import phoneMockupImage from "../assets/images/Pasal-Pintar.png";

const HeroSection = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation trigger without GSAP for now
    if (heroContentRef.current) {
      heroContentRef.current.classList.remove("opacity-0");
      heroContentRef.current.classList.add("animate-fade-in");
    }
    if (phoneRef.current) {
      phoneRef.current.classList.add("animate-float");
    }
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pt-20 lg:pt-28 pb-16 lg:pb-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Content */}
          <div
            ref={heroContentRef}
            className="flex-1 text-center lg:text-left opacity-0"
            style={{
              animationFillMode: "forwards",
            }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Solusi Hukum Cepat & Akurat di{" "}
              <span className="text-primary">Genggaman Anda</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Pasal Pintar adalah aplikasi informasi hukum berbasis AI untuk
              menyederhanakan pemahaman peraturan perundang-undangan di
              Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToWaitlist}
                className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Masuk Daftar Tunggu
                <ArrowRight size={20} />
              </button>
              <a
                href="https://github.com/Project404-PasalPintar"
                className="border-2 border-slate-300 text-slate-700 hover:border-primary hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div ref={phoneRef} className="relative">
              <img
                src={phoneMockupImage}
                alt="Tampilan Aplikasi PasalPintar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
