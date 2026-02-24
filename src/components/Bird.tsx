import { motion } from 'motion/react';

interface BirdProps {
  className?: string;
}

export function Bird({ className }: BirdProps) {
  return (
    <motion.div className={className}>
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Kuş gövdesi */}
        <ellipse cx="30" cy="25" rx="18" ry="12" fill="#4A5568" />
        
        {/* Kuş kafası */}
        <circle cx="45" cy="20" r="8" fill="#4A5568" />
        
        {/* Gaga */}
        <polygon points="53,20 58,18 58,22" fill="#F56500" />
        
        {/* Göz */}
        <circle cx="48" cy="18" r="2" fill="white" />
        <circle cx="49" cy="17" r="1" fill="black" />
        
        {/* Kanat */}
        <motion.ellipse 
          cx="25" 
          cy="20" 
          rx="12" 
          ry="8" 
          fill="#2D3748"
          animate={{
            rotate: [0, -15, 0, 15, 0]
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Kuyruk */}
        <ellipse cx="12" cy="28" rx="8" ry="5" fill="#2D3748" />
      </svg>
    </motion.div>
  );
}