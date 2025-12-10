import { motion } from 'framer-motion';

const SectionHeading = ({ 
  subtitle, 
  gradient = true,
  centered = false,
  className = '' 
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {subtitle && (
          <h2 className={`heading-lg ${gradient ? 'gradient-text' : 'text-dark-50'}`}>
            {subtitle}
          </h2>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeading;
