import { motion, AnimatePresence } from 'framer-motion';

interface PageBackgroundProps {
  isDarkMode: boolean;
}

export default function PageBackground({ isDarkMode }: PageBackgroundProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Gradyan Arka Plan */}
      <motion.div
        className="absolute inset-0 transition-colors duration-1000"
        animate={{
          background: isDarkMode 
            ? 'linear-gradient(to bottom, #1e1b4b, #0f172a, #000000)' 
            : 'linear-gradient(to bottom, #38bdf8, #7dd3fc, #e0f2fe)'
        }}
      />

      {/* Güneş / Ay */}
      <motion.div
        className="absolute top-24 right-12 rounded-full z-0"
        initial={false}
        animate={isDarkMode ? {
          width: 48,
          height: 48,
          backgroundColor: '#f1f5f9',
          boxShadow: '0 0 30px rgba(241, 245, 249, 0.4), inset -5px -5px 0 rgba(0,0,0,0.1)',
          opacity: 0.8
        } : {
          width: 56,
          height: 56,
          backgroundColor: '#fbbf24',
          boxShadow: [
            "0 0 15px rgba(251, 191, 36, 0.4)",
            "0 0 30px rgba(251, 191, 36, 0.6)",
            "0 0 15px rgba(251, 191, 36, 0.4)"
          ],
          opacity: 0.7
        }}
        transition={{ duration: 1 }}
      />
      
      {/* Bulutlar / Yıldızlar */}
      <AnimatePresence mode="wait">
        {!isDarkMode ? (
          <motion.div
            key="clouds"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {[
              { top: '15%', left: '10%', w: 'w-24', h: 'h-10', d: 15 },
              { top: '30%', right: '15%', w: 'w-32', h: 'h-14', d: 20 },
              { top: '45%', left: '25%', w: 'w-20', h: 'h-8', d: 12 }
            ].map((cloud, i) => (
              <motion.div
                key={i}
                className={`absolute ${cloud.top} ${cloud.left || ''} ${cloud.right || ''} ${cloud.w} ${cloud.h} bg-white/80 rounded-full blur-md`}
                animate={cloud.left ? { x: [0, 50, 0] } : { x: [0, -50, 0] }}
                transition={{ duration: cloud.d, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="stars"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_5px_#fff]"
                style={{ 
                  top: `${Math.random() * 50}%`, 
                  left: `${Math.random() * 100}%` 
                }}
                animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 2 + Math.random() * 3, 
                  repeat: Infinity, 
                  delay: Math.random() * 5 
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ufuk Işıltısı */}
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-white/20 dark:from-indigo-500/10 to-transparent" />
    </div>
  );
}
