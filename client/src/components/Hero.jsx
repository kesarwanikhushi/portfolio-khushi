import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AnimatedText from './ui/AnimatedText';
import FloatingElement from './ui/FloatingElement';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement delay={0} duration={5} className="absolute top-20 left-10">
          <div className="w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={1} duration={7} className="absolute bottom-20 right-10">
          <div className="w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={2} duration={6} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl" />
        </FloatingElement>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 font-mono text-sm md:text-base backdrop-blur-sm">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display"
          >
            <span className="gradient-text">Khushi Kesarwani</span>
          </motion.h1>

          {/* Animated Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-dark-300 mb-2">
              <AnimatedText
                sequence={[
                  'Student Developer',
                  2000,
                  'Cloud Enthusiast',
                  2000,
                  'DevOps Explorer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                ]}
                className="gradient-text"
              />
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-dark-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about building modern web applications and exploring cloud technologies. 
            Combining design aesthetics with robust development to create impactful digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Link to="/projects" className="btn-primary group">
              View My Work
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get In Touch
            </Link>
            <a
              href="/resume.pdf"
              download
              className="btn-ghost"
            >
              <FiDownload className="mr-2" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 rounded-full border border-dark-700 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500 hover:shadow-glow-sm transition-all duration-300 cursor-hover"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="text-xl" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-dark-500"
            >
              <span className="text-sm font-mono">Scroll Down</span>
              <div className="w-6 h-10 rounded-full border-2 border-dark-700 flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-primary-400"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
