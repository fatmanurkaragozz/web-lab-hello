import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import PageBackground from './PageBackground';
import ThemeToggle from './ThemeToggle';

interface ContactPageProps {
  onBack: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function ContactPage({ onBack, isDarkMode, toggleDarkMode }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form gönderildi:', formData);
  };

  const contacts = [
    {
      icon: "📧",
      title: "E-posta",
      value: "fk6895164@gmail.com",
      link: "mailto:fk6895164@gmail.com"
    },
    {
      icon: "📱",
      title: "Telefon",
      value: "+90 (555) 123-4567",
      link: "tel:+905551234567"
    },
    {
      icon: "📍",
      title: "Konum",
      value: "Ankara, Türkiye",
      link: "#"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/username",
      link: "https://linkedin.com/in/username"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/username",
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/username",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Instagram",
      icon: "📷",
      url: "https://instagram.com/username",
      color: "from-pink-400 to-purple-600"
    },
    {
      name: "Dribbble",
      icon: "🏀",
      url: "https://dribbble.com/username",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <motion.main 
      className="relative min-h-screen p-4 md:p-8 flex flex-col items-center pt-44 pb-20 overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <PageBackground isDarkMode={isDarkMode} />

      {/* Üst Navigasyon - Geri Dön Butonu */}
      <div className="fixed top-6 left-24 z-20">
        <Button
          variant="ghost"
          onClick={onBack}
          className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md dark:text-white border border-white/20 px-6 h-14"
        >
          ← Geri Dön
        </Button>
      </div>

      {/* Global Tema Butonu (Component içinde fixed top-6 left-6 olarak tanımlı) */}
      <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="relative max-w-7xl mx-auto z-10 pt-44">
        {/* Header */}
        <motion.header
          className="mb-12 text-center lg:text-left"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-black italic uppercase mb-4 tracking-widest">
            <span className={isDarkMode ? 'text-white' : 'text-slate-900'}>
              İletişime Geç
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg font-medium border-l-4 border-purple-500 pl-4 inline-block">
            Projeleriniz için benimle iletişime geçebilirsiniz
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.section
            className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl p-6 md:p-8 backdrop-blur-sm border border-white/10"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-2xl mb-6 font-bold text-gray-800 dark:text-white">Mesaj Gönder</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  id="name"
                  label="Ad Soyad"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Adınız ve Soyadınız"
                  required
                />
                <Input
                  id="email"
                  type="email"
                  label="E-posta"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-posta adresiniz"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Konu</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-gray-900 dark:text-white"
                  required
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none text-gray-900 dark:text-white"
                  placeholder="Mesajınızı buraya yazın..."
                  required
                />
              </div>

              <Button
                variant="primary"
                type="submit"
                className="w-full py-4 text-lg font-bold shadow-lg"
              >
                Gönder 📨
              </Button>
            </form>
          </motion.section>

          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <motion.div
              className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/10"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2 className="text-2xl mb-6 font-bold text-gray-800 dark:text-white">İletişim Bilgileri</h2>
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.link}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-colors group"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform">{contact.icon}</span>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{contact.title}</p>
                      <p className="text-gray-600 dark:text-gray-400">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/10"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <h2 className="text-2xl mb-6 font-bold text-gray-800 dark:text-white">Sosyal Medya</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className={`bg-gradient-to-r ${social.color} text-white p-4 rounded-xl flex flex-col items-center justify-center hover:shadow-lg transition-all`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-3xl mb-2">{social.icon}</span>
                    <span className="font-bold text-sm tracking-wide uppercase">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}