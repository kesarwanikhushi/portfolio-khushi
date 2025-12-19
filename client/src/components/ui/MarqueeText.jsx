import { motion } from 'framer-motion';

const MarqueeText = ({ 
  text = [], 
  speed = 50,
  direction = 'left',
  className = '',
  pauseOnHover = true 
}) => {
  const duplicatedText = [...text, ...text, ...text];

  return (
    <div className={`overflow-hidden py-4 ${className}`}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        style={{ willChange: 'transform' }}
        animate={{
          x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          },
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
      >
        {duplicatedText.map((item, index) => (
          <span
            key={index}
            className="text-4xl md:text-6xl font-bold text-neutral-500 select-none"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
