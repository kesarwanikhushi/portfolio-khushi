import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const footerLinks = {
    navigation: [
      { label: 'Home', id: 'home' },
      { label: 'About', id: 'about' },
      { label: 'Projects', id: 'projects' },
      { label: 'Contact', id: 'contact' },
    ],
    social: [
      { label: 'GitHub', icon: FiGithub, url: 'https://github.com/kesarwanikhushi' },
      { label: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/in/kesarwani7080' },
      { label: 'X', icon: RiTwitterXLine, url: 'https://x.com/KhushiK7080' },
      { label: 'Email', icon: FiMail, url: 'mailto:kesarwani.khushi121@gmail.com' },
    ],
  };

  return (
    <footer className="relative border-t border-dark-800">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-3xl font-bold font-display gradient-text mb-4">
                Khushi Kesarwani
              </h3>
              <p className="text-dark-400 max-w-md leading-relaxed">
                A Developer passionate about creating beautiful, functional web experiences 
                with modern technologies. Always learning, always building.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-4"
            >
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="w-11 h-11 rounded-xl bg-dark-800/50 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/50 hover:shadow-glow-sm transition-all duration-300 cursor-hover"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-dark-400 hover:text-primary-400 transition-colors cursor-hover"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6 text-lg">Get In Touch</h4>
            <ul className="space-y-3 text-dark-400">
              <li>
                <a href="mailto:kesarwani.khushi121@gmail.com" className="hover:text-primary-400 transition-colors">
                  kesarwani.khushi121@gmail.com
                </a>
              </li>
              <li>Open to opportunities</li>
              <li>Available for freelance</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-dark-500 text-sm">
            &copy; {currentYear} Khushi Kesarwani. All rights reserved.
          </p>
          <p className="text-dark-500 text-sm flex items-center gap-2">
            Built with <FiHeart className="text-red-500 animate-pulse" /> using React & TailwindCSS
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-glow-md hover:shadow-glow-lg transition-all duration-300 cursor-hover"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="text-xl" />
      </motion.button>
    </footer>
  );
};

export default Footer;
