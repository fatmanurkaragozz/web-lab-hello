import { motion } from 'motion/react';

interface AirplaneProps {
  className?: string;
}

export function Airplane({ className }: AirplaneProps) {
  return (
    <motion.div className={className}>
      <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ana gövde */}
        <ellipse cx="40" cy="15" rx="25" ry="6" fill="#E2E8F0" />
        
        {/* Burun */}
        <polygon points="65,15 75,13 75,17" fill="#CBD5E0" />
        
        {/* Ana kanatlar */}
        <rect x="25" y="8" width="30" height="3" rx="1" fill="#94A3B8" />
        <rect x="25" y="19" width="30" height="3" rx="1" fill="#94A3B8" />
        
        {/* Kuyruk kanatları */}
        <rect x="15" y="12" width="15" height="2" rx="1" fill="#94A3B8" />
        <rect x="15" y="16" width="15" height="2" rx="1" fill="#94A3B8" />
        
        {/* Dikey kuyruk */}
        <rect x="18" y="5" width="2" height="10" rx="1" fill="#94A3B8" />
        
        {/* Pencereler */}
        <circle cx="45" cy="15" r="2" fill="#3B82F6" opacity="0.7" />
        <circle cx="50" cy="15" r="2" fill="#3B82F6" opacity="0.7" />
        <circle cx="55" cy="15" r="2" fill="#3B82F6" opacity="0.7" />
        
        {/* Pervane */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "77px 15px" }}
        >
          <line x1="77" y1="10" x2="77" y2="20" stroke="#374151" strokeWidth="1"/>
          <line x1="72" y1="15" x2="82" y2="15" stroke="#374151" strokeWidth="1"/>
        </motion.g>
      </svg>
    </motion.div>
  );
}