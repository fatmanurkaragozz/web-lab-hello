import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Bird } from './Bird';
import { Letter } from './Letter';
import { Airplane } from './Airplane';

interface PortfolioIntroProps {
  onNavigate: (page: string) => void;
}

export function PortfolioIntro({ onNavigate }: PortfolioIntroProps) {
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
    }, 15000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <div role="main" className="relative w-full h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100 overflow-hidden">
      {/* Arka plan - bulutlar */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-1/4 w-20 h-10 bg-white rounded-full opacity-90"
          animate={{ x: [0, 60, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-32 right-1/3 w-24 h-12 bg-white rounded-full opacity-80"
          animate={{ x: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-16 right-1/4 w-16 h-8 bg-white rounded-full opacity-70"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-48 left-1/3 w-28 h-14 bg-white rounded-full opacity-60"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Güneş */}
      <motion.div
        className="absolute top-8 right-8 w-16 h-16 bg-yellow-400 rounded-full"
        animate={{
          rotate: 360,
          boxShadow: [
            "0 0 20px rgba(251, 191, 36, 0.5)",
            "0 0 40px rgba(251, 191, 36, 0.7)",
            "0 0 20px rgba(251, 191, 36, 0.5)"
          ]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />

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
          <Letter isOpen={false} onNavigate={onNavigate} />
        </motion.div>
      )}

      {/* Açılan mektup - tam ekran merkezde */}
      {(animationStage === 'letterOpen' || animationStage === 'completed') && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Letter
            isOpen={true}
            onNavigate={onNavigate}
            onAnimationComplete={() => {
              setTimeout(() => setAnimationStage('completed'), 4000);
            }}
          />
        </div>
      )}



      {/* Başlık (animasyon tamamlandıktan sonra) */}
      {animationStage === 'completed' && (
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center w-full px-4 z-50"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.h1
            className="intro-title font-bold text-white mb-3 drop-shadow-2xl"
            animate={{
              textShadow: [
                "0 0 15px rgba(255,255,255,0.5)",
                "0 0 25px rgba(255,255,255,0.8)",
                "0 0 15px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Kişisel Portföyüm
          </motion.h1>
          <p className="text-white/90 drop-shadow text-xl">Yaratıcılık ve teknolojinin buluştuğu yer ✨</p>
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
          className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
      )}
    </div>
  );
}