import { motion } from 'motion/react';
import { useState } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

export function ContactPage({ onBack }: ContactPageProps) {
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
    // Form gönderme işlemi burada yapılacak
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
      value: "  Ankara, Türkiye",
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
      className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          className="flex items-center justify-between mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>
            <h1 className="text-5xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              İletişime Geç
            </h1>
            <p className="text-gray-600 text-xl">Projeleriniz için benimle iletişime geçebilirsiniz</p>
          </div>

          <motion.button
            onClick={onBack}
            className="bg-white px-6 py-3 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <span>←</span>
              <span>Geri Dön</span>
            </span>
          </motion.button>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.section
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-2xl mb-6 text-gray-800">Mesaj Gönder</h2>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <fieldset className="border border-gray-200 rounded-xl p-6">
                <legend className="text-xl px-2 text-gray-800 font-medium">İletişim Formu</legend>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="form-group">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Ad Soyad:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Adınız ve Soyadınız"
                      required
                      minLength={2}
                      aria-describedby="name-error"
                    />
                    <small id="name-error" className="text-red-500 text-sm mt-1 block h-5" role="alert"></small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="block text-gray-700 mb-2">E-posta:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="E-posta adresiniz"
                      required
                      aria-describedby="email-error"
                    />
                    <small id="email-error" className="text-red-500 text-sm mt-1 block h-5" role="alert"></small>
                  </div>
                </div>

                <div className="form-group mt-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Konu:</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors bg-white"
                    required
                    aria-describedby="subject-error"
                  >
                    <option value="">-- Seçiniz --</option>
                    <option value="is">İş Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Öneri</option>
                  </select>
                  <small id="subject-error" className="text-red-500 text-sm mt-1 block h-5" role="alert"></small>
                </div>

                <div className="form-group mt-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Mesajınız:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                    required
                    minLength={10}
                    aria-describedby="message-error"
                  />
                  <small id="message-error" className="text-red-500 text-sm mt-1 block h-5" role="alert"></small>
                </div>

                <motion.button
                  type="submit"
                  className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Gönder</span>
                    <span>📨</span>
                  </span>
                </motion.button>
              </fieldset>
            </form>
          </motion.section>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl mb-6 text-gray-800">İletişim Bilgileri</h2>

              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.link}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-2xl">{contact.icon}</span>
                    <div>
                      <p className="font-medium text-gray-800">{contact.title}</p>
                      <p className="text-gray-600">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl mb-6 text-gray-800">Sosyal Medya</h2>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className={`bg-gradient-to-r ${social.color} text-white p-4 rounded-xl text-center hover:shadow-lg transition-all`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-2xl mb-2">{social.icon}</div>
                    <p className="font-medium">{social.name}</p>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl shadow-xl p-8 text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl mb-2">Yeni Projeler İçin Uygunum</h3>
              <p className="opacity-90">Freelance projeleri ve iş birliği fırsatları için açığım</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}