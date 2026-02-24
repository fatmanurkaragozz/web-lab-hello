import { motion } from 'motion/react';

interface TreeProps {
  isShaking?: boolean;
}

export function Tree({ isShaking }: TreeProps) {
  return (
    <motion.div
      className="absolute right-32 bottom-0"
      animate={isShaking ? {
        rotate: [0, -2, 2, -1, 1, 0],
        scale: [1, 0.98, 1.02, 1]
      } : {}}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gövde */}
        <rect x="50" y="120" width="20" height="80" fill="#8B4513" />
        
        {/* Yapraklar - alt katman */}
        <circle cx="60" cy="120" r="35" fill="#228B22" />
        
        {/* Yapraklar - orta katman */}
        <circle cx="60" cy="100" r="30" fill="#32CD32" />
        
        {/* Yapraklar - üst katman */}
        <circle cx="60" cy="80" r="25" fill="#228B22" />
        
        {/* Yapraklar - tepe */}
        <circle cx="60" cy="65" r="20" fill="#32CD32" />
        
        {/* Ağaç dalları */}
        <line x1="45" y1="100" x2="35" y2="95" stroke="#8B4513" strokeWidth="3"/>
        <line x1="75" y1="105" x2="85" y2="100" stroke="#8B4513" strokeWidth="3"/>
        <line x1="40" y1="115" x2="28" y2="110" stroke="#8B4513" strokeWidth="2"/>
      </svg>
    </motion.div>
  );
}