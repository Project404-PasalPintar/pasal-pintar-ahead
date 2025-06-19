
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
    </div>
  );
};

export default Index;
