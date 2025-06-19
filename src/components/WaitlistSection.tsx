
import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Shield, Clock, Bell } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email diperlukan",
        description: "Silakan masukkan alamat email Anda.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Email tidak valid",
        description: "Silakan masukkan alamat email yang valid.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      toast({
        title: "Berhasil bergabung!",
        description: "Anda telah berhasil bergabung dengan waitlist Pasal Pintar.",
      });
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section id="waitlist" className="py-16 lg:py-24 bg-gradient-to-br from-primary to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-500" size={40} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Selamat! Anda Sudah Terdaftar
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Terima kasih telah bergabung dengan waitlist Pasal Pintar. Kami akan mengirimkan 
                update terbaru dan memberitahu Anda ketika aplikasi siap untuk diluncurkan.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Bell className="text-primary mx-auto mb-3" size={32} />
                  <h4 className="font-semibold text-slate-800 mb-2">Update Pertama</h4>
                  <p className="text-sm text-slate-600">Dapatkan akses early access</p>
                </div>
                <div>
                  <Shield className="text-primary mx-auto mb-3" size={32} />
                  <h4 className="font-semibold text-slate-800 mb-2">No Spam</h4>
                  <p className="text-sm text-slate-600">Hanya update penting</p>
                </div>
                <div>
                  <CheckCircle className="text-primary mx-auto mb-3" size={32} />
                  <h4 className="font-semibold text-slate-800 mb-2">Gratis Selamanya</h4>
                  <p className="text-sm text-slate-600">Akses penuh tanpa biaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-16 lg:py-24 bg-gradient-to-br from-primary to-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Siap Menjadi yang Pertama Mencoba <span className="text-blue-200">Pasal Pintar?</span>
            </h2>
            <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dengan ribuan orang Indonesia yang sudah menunggu revolusi akses informasi hukum. 
              Dapatkan akses early access dan nikmati semua fitur premium secara gratis.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Benefits */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Manfaat Early Access:</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Akses gratis ke semua fitur premium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Prioritas dukungan pelanggan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Kesempatan memberikan feedback langsung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-slate-700">Update eksklusif dari tim developer</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Alamat Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nama@email.com"
                        className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                  <Shield size={16} />
                  <span>Kami tidak akan mengirim spam. Anda akan menjadi yang pertama tahu saat aplikasi kami siap.</span>
                </div>

                {/* Counter */}
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">2,340+</div>
                    <div className="text-sm text-slate-600">Orang menunggu</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">Q2 2024</div>
                    <div className="text-sm text-slate-600">Target peluncuran</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-slate-600">Gratis selamanya</div>
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

export default WaitlistSection;
