import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LetterProps {
  isOpen: boolean;
  onAnimationComplete?: () => void;
  onNavigate?: (page: string) => void;
}

export function Letter({ isOpen, onAnimationComplete, onNavigate }: LetterProps) {
  const [showContent, setShowContent] = useState(false);

  const handleNavigation = (page: string) => {
    onNavigate?.(page);
  };

  return (
    <motion.div
      className="absolute"
      initial={{ scale: 0.3, rotate: 15 }}
      animate={isOpen ? {
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0
      } : {
        scale: 0.3,
        rotate: 15
      }}
      transition={{
        duration: 1,
        ease: "easeOut"
      }}
      onAnimationComplete={() => {
        if (isOpen) {
          setTimeout(() => setShowContent(true), 800);
          onAnimationComplete?.();
        }
      }}
    >
      {!isOpen ? (
        // Kapalı mektup - çok daha büyük ve enlemesine
        <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="8" fill="#F7FAFC" stroke="#CBD5E0" strokeWidth="4" />
          <polygon points="8,8 100,70 192,8" fill="none" stroke="#CBD5E0" strokeWidth="4" />

          {/* Mektup mührü */}
          <circle cx="100" cy="85" r="15" fill="#DC2626" />
          <circle cx="100" cy="85" r="12" fill="#EF4444" />
          <text x="100" y="93" textAnchor="middle" className="text-base fill-white">★</text>

          {/* Dekoratif kenarlık */}
          <rect x="4" y="4" width="192" height="112" rx="4" fill="none" stroke="#E2E8F0" strokeWidth="2" />
        </svg>
      ) : (
        // Açık mektup
        <div className="relative">
          {/* Ana mektup zarfı - çok büyük */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.8 }}
          >
            <svg width="250" height="150" viewBox="0 0 250 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Mektup gövdesi */}
              <rect width="250" height="150" rx="12" fill="#F7FAFC" stroke="#CBD5E0" strokeWidth="4" />
              <rect x="8" y="8" width="234" height="134" rx="8" fill="#FEFEFE" stroke="#E2E8F0" strokeWidth="2" />

              {/* Açık zarf kapağı */}
              <motion.polygon
                points="8,8 125,90 242,8 242,60 8,60"
                fill="#E2E8F0"
                stroke="#CBD5E0"
                strokeWidth="3"
                initial={{ rotateX: 0 }}
                animate={{ rotateX: -60 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "125px 8px" }}
              />

              {/* Mektup iç kısmı */}
              <rect x="15" y="65" width="220" height="75" rx="6" fill="#FDFDFD" stroke="#F1F5F9" strokeWidth="2" />
            </svg>
          </motion.div>

          {/* Çıkan kağıt - pozisyon yukarı taşındı */}
          {isOpen && (
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 z-20"
              initial={{
                y: 60,
                opacity: 0,
                scale: 0.6,
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
              }}
              animate={{
                y: -330, // Sayfanın altına yapışmaması için daha yukarı taşındı
                opacity: 1,
                scale: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
              }}
              transition={{
                delay: 1,
                duration: 2.5,
                ease: "easeOut",
                clipPath: { delay: 1, duration: 2 }
              }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 relative letter-wrapper"
                initial={{ rotateX: -20 }}
                animate={{ rotateX: 0 }}
                transition={{ delay: 1.8, duration: 1.2 }}
              >
                {/* Kağıt dokusu */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
                  <div className="absolute top-8 left-8 w-full h-1 bg-gradient-to-r from-blue-100 to-transparent"></div>
                  <div className="absolute top-16 left-8 w-full h-1 bg-gradient-to-r from-blue-100 to-transparent"></div>
                  <div className="absolute top-24 left-8 w-full h-1 bg-gradient-to-r from-blue-100 to-transparent"></div>
                </div>

                {/* Profil fotoğrafı alanı - sağ üst köşe (Sadece Masaustu) */}
                <motion.div
                  className="profile-desktop"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={showContent ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
                >
                  <figure className="relative m-0">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl relative z-10">
                      <ImageWithFallback
                        src="/public/ppp.jpeg"
                        alt="Fatma Nur Karagöz'ün vesikalığı"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Fotoğraf çerçevesi efekti */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-20 blur-md"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-purple-400 rounded-2xl opacity-30 blur-sm"></div>

                    {/* Fotoğraf altına isim etiketi */}
                    <motion.figcaption
                      className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-lg border border-gray-200 z-20 whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={showContent ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 3, duration: 0.6 }}
                    >
                      <span className="text-sm text-gray-700 font-medium">Fatma Nur Karagöz</span>
                    </motion.figcaption>
                  </figure>
                </motion.div>

                <div className="relative z-10 letter-content-inner">
                  <motion.header
                    className="letter-header"
                    initial={{ y: 30, opacity: 0 }}
                    animate={showContent ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 2, duration: 0.8 }}
                  >
                    {/* Mobil İçin Profil Fotoğrafı ve İsmi */}
                    <div className="profile-mobile">
                      <ImageWithFallback
                        src="/public/ppp.jpeg"
                        alt="Fatma Nur Karagöz'ün vesikalığı"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="profile-mobile-name">
                      <span>Fatma Nur Karagöz</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-3 text-gray-800">Merhaba! 👋</h1>
                    <div className="letter-header-line"></div>
                  </motion.header>

                  <motion.div
                    className="letter-grid-2"
                    initial={{ y: 30, opacity: 0 }}
                    animate={showContent ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 2.3, duration: 0.8 }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 rounded-xl bg-blue-50 border border-blue-100">
                        <span className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                        <div>
                          <p className="text-gray-700">
                            <strong>Mesleğim:</strong><br />
                            Full Stack Developer
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 rounded-xl bg-green-50 border border-green-100">
                        <span className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></span>
                        <div>
                          <p className="text-gray-700">
                            <strong>Konum:</strong><br />
                            Türkiye, Ankara
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 rounded-xl bg-purple-50 border border-purple-100">
                        <span className="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0"></span>
                        <div>
                          <p className="text-gray-700">
                            <strong>Deneyim:</strong><br />
                            5+ Yıl Profesyonel
                          </p>
                        </div>
                      </div>
                    </div>

                    <section className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-blue-400">
                        <h2 className="text-gray-800 mb-3">Uzmanlık Alanlarım</h2>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                            <span className="text-gray-700 text-sm">React & Next.js</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span className="text-gray-700 text-sm">TypeScript</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                            <span className="text-gray-700 text-sm">Node.js</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                            <span className="text-gray-700 text-sm">UI/UX Design</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                            <span className="text-gray-700 text-sm">Database Management</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                            <span className="text-gray-700 text-sm">Mobile Development</span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </motion.div>

                  <motion.section
                    className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-gray-200 mb-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={showContent ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 2.6, duration: 0.8 }}
                  >
                    <h2 className="text-gray-800 mb-3">Hakkımda</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Yazılım Mühendisliği öğrencisiyim. Kitap okumayı, doğa yürüyüşü yapmayı ve kahve içmeyi çok seviyorum. Modern web teknolojileri ile kullanıcı dostu, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum.
                      Yaratıcılık ve teknolojiyi birleştirerek kullanıcı deneyimini ön planda tutan çözümler üretmeyi seviyorum.
                    </p>
                  </motion.section>

                  {/* Navigasyon Butonları */}
                  <motion.nav
                    aria-label="Ana navigasyon"
                    className="letter-grid-3"
                    initial={{ y: 30, opacity: 0 }}
                    animate={showContent ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 3, duration: 0.8 }}
                  >
                    <motion.button
                      onClick={() => handleNavigation('projects')}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">🚀</div>
                        <p className="font-medium">Projelerim</p>
                      </div>
                    </motion.button>

                    <motion.button
                      onClick={() => handleNavigation('blog')}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl shadow-lg hover:from-green-600 hover:to-green-700 transition-all"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">📝</div>
                        <p className="font-medium">Medium Yazılarım</p>
                      </div>
                    </motion.button>

                    <motion.button
                      onClick={() => handleNavigation('contact')}
                      className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl shadow-lg hover:from-purple-600 hover:to-purple-700 transition-all"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">💬</div>
                        <p className="font-medium">İletişime Geç</p>
                      </div>
                    </motion.button>
                  </motion.nav>
                </div>

                {/* Kağıt kenar efektleri */}
                <div className="absolute -top-2 left-4 right-4 h-3 bg-white rounded-t-2xl opacity-90 blur-sm"></div>
                <div className="absolute -bottom-3 -left-3 -right-3 h-6 bg-gradient-to-t from-gray-400 to-transparent rounded-2xl blur-lg opacity-40"></div>
              </motion.div>
            </motion.div>
          )}

          {/* Mektuptan çıkış efekti */}
          {isOpen && (
            <motion.div
              className="absolute left-1/2 top-20 transform -translate-x-1/2 z-5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 2, 3] }}
              transition={{ delay: 1.2, duration: 2, ease: "easeOut" }}
            >
              <div className="flex space-x-2">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      y: [0, -30, -60],
                      opacity: [1, 0.5, 0],
                      scale: [1, 1.5, 0]
                    }}
                    transition={{
                      delay: i * 0.1,
                      duration: 2,
                      repeat: 3
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
}