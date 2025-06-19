
import React, { useEffect, useRef } from 'react';
import { MessageCircle, Users, UserCheck, Database } from 'lucide-react';

const FeaturesSection = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: MessageCircle,
      title: 'Chatbot Generatif',
      description: 'Tanya apapun pada AI ahli hukum kami untuk mendapatkan jawaban instan dan akurat sesuai kebutuhan Anda.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Forum Komunitas',
      description: 'Diskusikan topik hukum dan berbagi wawasan dengan pengguna lain dalam komunitas yang supportif.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: UserCheck,
      title: 'Konsultasi Ahli',
      description: 'Terhubung langsung dengan pengacara profesional melalui platform kami untuk konsultasi mendalam.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'Database Lengkap',
      description: 'Akses ribuan pasal dan undang-undang yang dikategorikan untuk navigasi mudah dan pencarian cepat.',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Semua yang Anda Butuhkan untuk <span className="text-primary">Memahami Hukum</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Fitur-fitur canggih yang dirancang untuk memudahkan Anda dalam memahami dan mengakses informasi hukum Indonesia.
          </p>
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="feature-card opacity-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                Teknologi AI Terdepan untuk <span className="text-primary">Hukum Indonesia</span>
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Dengan memanfaatkan teknologi Natural Language Processing dan Machine Learning, 
                Pasal Pintar dapat memahami konteks pertanyaan Anda dan memberikan jawaban yang 
                relevan berdasarkan peraturan perundang-undangan Indonesia yang terkini.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Natural Language Processing
                </span>
                <span className="bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Machine Learning
                </span>
                <span className="bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Real-time Updates
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-slate-600 mb-4">Peraturan Perundang-undangan</div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-slate-600">Akses Tanpa Batas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
