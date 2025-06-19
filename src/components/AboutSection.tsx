
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const AboutSection = () => {
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.team-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0');
                card.classList.add('animate-fade-in');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (teamRef.current) observer.observe(teamRef.current);

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: 'Alif Suryadi',
      role: 'Full Stack Developer',
      description: 'Spesialis dalam pengembangan aplikasi web dan mobile dengan fokus pada arsitektur sistem yang scalable.',
      avatar: 'AS'
    },
    {
      name: 'Aldi Musneldi',
      role: 'Mobile Developer',
      description: 'Ahli dalam pengembangan aplikasi mobile native dan cross-platform dengan performa optimal.',
      avatar: 'AM'
    },
    {
      name: 'Dwi Andhara Valkyrie',
      role: 'UX/UI Designer',
      description: 'Menciptakan pengalaman pengguna yang intuitif dan desain antarmuka yang menarik serta fungsional.',
      avatar: 'DV'
    },
    {
      name: 'Hildiah Khairuniza',
      role: 'Full Stack Developer',
      description: 'Berpengalaman dalam mengintegrasikan frontend dan backend untuk solusi teknologi yang komprehensif.',
      avatar: 'HK'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Tim di Balik <span className="text-primary">Inovasi</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Bertemu dengan Project 404, tim passionate yang berkomitmen untuk mendemokratisasi akses informasi hukum di Indonesia melalui teknologi inovatif.
          </p>
          <div className="inline-flex items-center gap-2 bg-slate-100 px-6 py-3 rounded-full">
            <span className="text-slate-700 font-semibold">Project</span>
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">404</span>
          </div>
        </div>

        <div ref={teamRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card opacity-0 bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              style={{
                animationFillMode: 'forwards'
              }}
            >
              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold">{member.avatar}</span>
              </div>

              {/* Name and Role */}
              <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
              <div className="bg-blue-100 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {member.role}
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.description}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <button className="w-10 h-10 bg-slate-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                  <Github size={16} />
                </button>
                <button className="w-10 h-10 bg-slate-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                  <Linkedin size={16} />
                </button>
                <button className="w-10 h-10 bg-slate-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Mission */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
            Misi Kami: <span className="text-primary">Hukum untuk Semua</span>
          </h3>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Kami percaya bahwa setiap warga negara Indonesia berhak mendapatkan akses informasi hukum yang mudah, 
            akurat, dan terjangkau. Melalui Pasal Pintar, kami berusaha menghilangkan hambatan dalam memahami hukum 
            dan memberdayakan masyarakat untuk membuat keputusan yang tepat berdasarkan pengetahuan hukum yang solid.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
