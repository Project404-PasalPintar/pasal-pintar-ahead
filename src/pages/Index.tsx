
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import WaitlistSection from '../components/WaitlistSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <AboutSection />
        <WaitlistSection />
      </main>
      <footer className="bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-slate-600 text-sm">
            © 2024 PasalPintar - Project 404 Team. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
