
import React, { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";
import logoImage from "../assets/logo/pasalpintar.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      // Check which section is currently in view
      const sections = ["features", "about", "waitlist"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { title: "Fitur", id: "features" },
    { title: "Tentang Kami", id: "about" },
    { title: "Forum", id: "waitlist" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Professional Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3">
              <img
                src={logoImage}
                alt="PasalPintar Logo"
                className="w-10 h-10"
              />
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-slate-800">
                  Pasal<span className="text-primary">Pintar</span>
                </h1>
                <p className="text-xs text-slate-500 font-medium">
                  Legal AI Platform
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative text-slate-600 hover:text-primary transition-colors duration-300 font-medium ${
                    activeSection === link.id ? "text-primary" : ""
                  }`}
                >
                  {link.title}
                  {activeSection === link.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform transition-transform duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("waitlist")}
              className="bg-primary hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Masuk Daftar Tunggu
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-primary transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-3 py-2 text-slate-600 hover:text-primary transition-colors duration-300 font-medium ${
                    activeSection === link.id ? "text-primary border-l-2 border-primary" : ""
                  }`}
                >
                  {link.title}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("waitlist")}
                className="w-full mt-4 bg-primary hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300"
              >
                Masuk Daftar Tunggu
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
