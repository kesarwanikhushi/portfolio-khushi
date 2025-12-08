import { motion } from 'framer-motion';
import { useState } from 'react';

const GlowCard = ({ 
  children, 
  className = '',
  glowColor = 'primary',
  hover = true 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowColors = {
    primary: 'rgba(0, 217, 255, 0.15)',
    secondary: 'rgba(191, 64, 255, 0.15)',
    accent: 'rgba(249, 115, 22, 0.15)',
  };

  return (
    <motion.div
      className={`card-glow relative ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={hover ? { y: -8 } : {}}
      transition={{ duration: 0.3 }}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      }}
    >
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColors[glowColor]}, transparent 40%)`,
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowCard;
