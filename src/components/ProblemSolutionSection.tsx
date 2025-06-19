
import React, { useEffect, useRef } from 'react';
import { AlertCircle, CheckCircle, Users, DollarSign, Clock, BookOpen } from 'lucide-react';

const ProblemSolutionSection = () => {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftColumnRef.current) {
              entry.target.classList.add('animate-slide-in-left');
            } else if (entry.target === rightColumnRef.current) {
              entry.target.classList.add('animate-slide-in-right');
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (leftColumnRef.current) observer.observe(leftColumnRef.current);
    if (rightColumnRef.current) observer.observe(rightColumnRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Hukum Terasa Rumit? Kami Punya <span className="text-primary">Solusinya</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Memahami hukum tidak harus sulit dan mahal. Pasal Pintar hadir untuk mendemokratisasi akses informasi hukum di Indonesia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problem Column */}
          <div ref={leftColumnRef} className="opacity-0">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <AlertCircle className="text-red-500 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-slate-800">Masalah yang Ada</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <DollarSign className="text-red-500 mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Konsultasi Hukum Mahal</h4>
                    <p className="text-slate-600">Biaya konsultasi dengan pengacara yang tinggi membuat masyarakat kesulitan mengakses informasi hukum.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <BookOpen className="text-red-500 mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Bahasa Hukum yang Kompleks</h4>
                    <p className="text-slate-600">Peraturan perundang-undangan menggunakan bahasa formal yang sulit dipahami masyarakat awam.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-red-500 mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Proses yang Memakan Waktu</h4>
                    <p className="text-slate-600">Mencari informasi hukum yang akurat membutuhkan waktu lama dan penelusuran dari berbagai sumber.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Column */}
          <div ref={rightColumnRef} className="opacity-0">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="text-primary mr-3" size={32} />
                <h3 className="text-2xl font-bold text-slate-800">Solusi Pasal Pintar</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Akses Gratis & Mudah</h4>
                    <p className="text-slate-600">Dapatkan informasi hukum secara gratis dengan antarmuka yang mudah digunakan kapan saja, di mana saja.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="text-primary mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">AI yang Memahami Konteks</h4>
                    <p className="text-slate-600">Teknologi AI kami menerjemahkan bahasa hukum yang kompleks menjadi penjelasan yang mudah dipahami.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="text-primary mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Komunitas yang Mendukung</h4>
                    <p className="text-slate-600">Bergabung dengan komunitas pengguna untuk berbagi pengalaman dan mendapatkan perspektif yang beragam.</p>
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

export default ProblemSolutionSection;
