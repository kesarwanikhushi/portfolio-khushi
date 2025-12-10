import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [cursorVariant, setCursorVariant] = useState('default');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring config - balanced speed and natural feel
  const springConfig = { damping: 20, stiffness: 200, mass: 0.2, restSpeed: 0.001 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Memoized callbacks for better performance
  const handleMouseEnter = useCallback(() => setCursorVariant('hover'), []);
  const handleMouseLeave = useCallback(() => setCursorVariant('default'), []);

  useEffect(() => {
    let rafId;
    let lastX = -100;
    let lastY = -100;

    const mouseMove = (e) => {
      // Throttle updates using requestAnimationFrame
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        if (Math.abs(e.clientX - lastX) > 0.5 || Math.abs(e.clientY - lastY) > 0.5) {
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
          lastX = e.clientX;
          lastY = e.clientY;
        }
        rafId = null;
      });
    };

    window.addEventListener('mousemove', mouseMove, { passive: true });

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .cursor-hover');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      el.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', mouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, handleMouseEnter, handleMouseLeave]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block will-change-transform"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div
        className="relative -translate-x-3 -translate-y-1"
        animate={{
          scale: cursorVariant === 'hover' ? 1.3 : 1,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {/* Arrow Shape with Gradient Border */}
        <svg 
          width="32" 
          height="36" 
          viewBox="0 0 32 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <defs>
            <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          
          {/* Arrow Shape with Gradient Border */}
          <path 
            d="M 2 2 L 2 26 L 10 18 L 14 28 L 17 27 L 13 17 L 22 17 Z" 
            fill="#1f2937"
            stroke="url(#cursorGradient)" 
            strokeWidth="3"
            strokeLinejoin="round"
          />
          
          {/* Inner Fill with Gradient */}
          <path 
            d="M 2 2 L 2 26 L 10 18 L 14 28 L 17 27 L 13 17 L 22 17 Z" 
            fill="url(#cursorGradient)"
            opacity="0.2"
          />
        </svg>

        {/* Glow Effect on Hover Only */}
        <motion.div
          className="absolute inset-0 blur-xl -z-10 rounded-lg will-change-transform"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6, #10b981)',
          }}
          animate={{
            opacity: cursorVariant === 'hover' ? 0.7 : 0,
            scale: cursorVariant === 'hover' ? 1.3 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
