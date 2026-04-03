import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Bird } from './Bird';
import { Letter } from './Letter';
import { Airplane } from './Airplane';
import ThemeToggle from './ThemeToggle';

interface PortfolioIntroProps {
  onNavigate: (page: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  /** Animasyon tamamlandığında (stage: 'completed') çağrılır */
  onComplete?: () => void;
}

export function PortfolioIntro({ onNavigate, isDarkMode, toggleDarkMode, onComplete }: PortfolioIntroProps) {
  const [animationStage, setAnimationStage] = useState<'initial' | 'flying' | 'crashed' | 'letterFalling' | 'letterOpen' | 'completed'>('initial');
  const [isAirplaneShaking, setIsAirplaneShaking] = useState(false);

  useEffect(() => {
    // Animasyon sekansını başlat
    const timer1 = setTimeout(() => {
      setAnimationStage('flying');
    }, 500);

    const timer2 = setTimeout(() => {
      setIsAirplaneShaking(true);
      setAnimationStage('crashed');
    }, 4000);

    const timer3 = setTimeout(() => {
      setIsAirplaneShaking(false);
      setAnimationStage('letterFalling');
    }, 4500);

    const timer4 = setTimeout(() => {
      setAnimationStage('letterOpen');
    }, 6000);

    const timer5 = setTimeout(() => {
      setAnimationStage('completed');
    }, 7000);

    // Animasyon tamamlandığında (mektup açılırken) LandingPage'e geçiş
    const timer6 = setTimeout(() => {
      onComplete?.();
    }, 7500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  return (
    <div 
      role="main" 
      className={`relative w-full h-screen transition-colors duration-1000 overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-b from-indigo-950 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100'
      }`}
    >
      {/* Global Tema Butonu (Component içinde fixed top-6 left-6 olarak tanımlı) */}
      <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {/* Arka plan - bulutlar */}
      {/* Arka plan - Bulutlar / Yıldızlar */}
      <div className="absolute inset-0">
        {[
          { top: '10%', left: '10%', size: 'w-32 h-16', delay: 20 },
          { top: '20%', right: '10%', size: 'w-48 h-24', delay: 25 },
          { bottom: '30%', left: '15%', size: 'w-40 h-20', delay: 18 },
          { top: '35%', left: '30%', size: 'w-24 h-12', delay: 15 }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full transition-all duration-1000"
            style={{ 
              top: item.top, 
              left: item.left, 
              right: item.right, 
              bottom: item.bottom,
            }}
            animate={isDarkMode ? {
              width: 4,
              height: 4,
              backgroundColor: '#FFFFFF',
              boxShadow: '0 0 10px #FFFFFF, 0 0 20px #FFFFFF',
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
              borderRadius: '50%',
            } : {
              width: parseInt(item.size.split(' ')[0].replace('w-', '')) * 4,
              height: parseInt(item.size.split(' ')[1].replace('h-', '')) * 4,
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              boxShadow: 'none',
              opacity: 1,
              scale: 1,
              borderRadius: '9999px',
            }}
            transition={isDarkMode ? {
              opacity: { duration: 2 + idx, repeat: Infinity },
              scale: { duration: 3 + idx, repeat: Infinity },
              default: { duration: 1 }
            } : { duration: 1 }}
          />
        ))}
        
        {/* Ekstra Yıldızlar (Sadece Gece) */}
        {isDarkMode && [...Array(20)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_5px_#fff]"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Güneş / Ay */}
      <motion.div
        className="absolute top-8 right-8 rounded-full overflow-hidden"
        initial={false}
        animate={isDarkMode ? {
          width: 80,
          height: 80,
          backgroundColor: '#E2E8F0',
          boxShadow: "0 0 30px rgba(226, 232, 240, 0.4), inset -10px -10px 0 rgba(0,0,0,0.1)"
        } : {
          width: 64,
          height: 64,
          backgroundColor: '#FBBF24',
          boxShadow: [
            "0 0 20px rgba(251, 191, 36, 0.5)",
            "0 0 40px rgba(251, 191, 36, 0.7)",
            "0 0 20px rgba(251, 191, 36, 0.5)"
          ]
        }}
        transition={{ duration: 1 }}
      >
        {/* Ay Kraterleri (Sadece Gece) */}
        {isDarkMode && (
          <div className="relative w-full h-full opacity-40">
            <div className="absolute top-3 left-6 w-3 h-3 bg-slate-400 rounded-full" />
            <div className="absolute top-10 left-4 w-5 h-5 bg-slate-400 rounded-full" />
            <div className="absolute top-6 left-12 w-2 h-2 bg-slate-400 rounded-full" />
          </div>
        )}
      </motion.div>

      {/* Zemin/ufuk çizgisi */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-green-300 via-green-200 to-transparent" />

      {/* Uçak */}
      <motion.div
        className="absolute top-32 right-1/4"
        animate={isAirplaneShaking ? {
          rotate: [0, -5, 5, -3, 3, 0],
          y: [0, -5, 5, -2, 2, 0]
        } : {}}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        <Airplane />
      </motion.div>

      {/* Kuş animasyonu */}
      {(animationStage === 'flying' || animationStage === 'crashed') && (
        <motion.div
          className="absolute"
          initial={{ x: -100, y: 200 }}
          animate={
            animationStage === 'flying'
              ? {
                x: window.innerWidth / 2 + 50,
                y: 150,
                transition: { duration: 3.5, ease: "easeInOut" }
              }
              : {
                x: window.innerWidth / 2 + 80,
                y: 400,
                rotate: 90,
                transition: { duration: 0.8, ease: "easeIn" }
              }
          }
        >
          <Bird />

          {/* Kuşun ayağındaki mektup (sadece uçarken) - daha büyük */}
          {animationStage === 'flying' && (
            <motion.div
              className="absolute -bottom-4 left-12"
              animate={{
                y: [0, -4, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity
              }}
            >
              <svg width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="25" rx="4" fill="#F7FAFC" stroke="#CBD5E0" strokeWidth="2" />
                <polygon points="4,4 20,15 36,4" fill="none" stroke="#CBD5E0" strokeWidth="2" />
                <circle cx="20" cy="18" r="5" fill="#DC2626" />
              </svg>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Düşen mektup */}
      {animationStage === 'letterFalling' && (
        <motion.div
          className="absolute"
          initial={{
            x: window.innerWidth / 2 + 50,
            y: 180,
            rotate: 45,
            scale: 0.4
          }}
          animate={{
            x: window.innerWidth / 2 - 100,
            y: window.innerHeight / 2 - 60,
            rotate: 0,
            scale: 1
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut"
          }}
        >
          <Letter isOpen={false} onNavigate={onNavigate} isDarkMode={isDarkMode} />
        </motion.div>
      )}

      {/* Açılan mektup - tam ekran merkezde */}
      {(animationStage === 'letterOpen' || animationStage === 'completed') && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Letter
            isOpen={true}
            onNavigate={onNavigate}
            isDarkMode={isDarkMode}
            onAnimationComplete={() => {
              setTimeout(() => setAnimationStage('completed'), 4000);
            }}
          />
        </div>
      )}



      {/* Başlık (animasyon tamamlandıktan sonra) */}
      {animationStage === 'completed' && (
        <motion.div
          className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center w-full px-4 z-[60]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.h1
            className="intro-title font-black italic uppercase text-white mb-2 tracking-widest"
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              lineHeight: 1,
              letterSpacing: '-0.02em'
            }}
            animate={{
              scale: [1, 1.01, 1],
              textShadow: [
                "0 4px 15px rgba(0,0,0,0.3)",
                "0 6px 30px rgba(0,0,0,0.5)",
                "0 4px 15px rgba(0,0,0,0.3)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Kişisel Portföyüm
          </motion.h1>
          <p className="text-white font-bold text-xs md:text-sm mt-2 opacity-90 tracking-wide bg-blue-600/30 backdrop-blur-md inline-block px-4 py-1.5 rounded-full border border-white/20 shadow-xl">
            Yaratıcılık ve teknolojinin buluştuğu yer <span className="animate-pulse">✨</span>
          </p>
        </motion.div>
      )}

      {/* Çarpışma efekti */}
      {animationStage === 'crashed' && (
        <motion.div
          className="absolute"
          style={{
            x: window.innerWidth / 2 + 65,
            y: 155
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl">💥</div>
        </motion.div>
      )}

      {/* Düşen mektup için partiküller */}
      {animationStage === 'letterFalling' && (
        <motion.div
          className="absolute"
          style={{
            x: window.innerWidth / 2,
            y: 200
          }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: [0, 1.5, 0],
                rotate: 360,
                x: [0, (i - 4) * 30],
                y: [0, i * 20]
              }}
              transition={{
                duration: 1.8,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Mektup açılırken arka plan karartma */}
      {(animationStage === 'letterOpen' || animationStage === 'completed') && (
        <motion.div
          className={`absolute inset-0 backdrop-blur-sm z-0 transition-colors duration-1000 ${
            isDarkMode ? 'bg-black/60' : 'bg-black/20'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
      )}
    </div>
  );
}