import { motion } from 'framer-motion';

const FloatingElement = ({ 
  children, 
  className = '',
  delay = 0,
  duration = 3 
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
