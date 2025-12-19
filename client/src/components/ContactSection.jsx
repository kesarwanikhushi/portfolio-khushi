import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import toast from 'react-hot-toast';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeading from './ui/SectionHeading';
import GlowCard from './ui/GlowCard';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData(e.target);
      formDataToSend.append("access_key", "5efbf6a0-7327-47bc-bacb-4097d12ce415");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/kesarwanikhushi',
      color: 'hover:text-primary-400',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/khushi-kesarwani7080',
      color: 'hover:text-primary-400',
    },
    {
      icon: RiTwitterXLine,
      label: 'X',
      href: 'https://x.com/KhushiK7080',
      color: 'hover:text-secondary-400',
    },
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:kesarwani.khushi121@gmail.com',
      color: 'hover:text-accent-400',
    },
  ];

  return (
    <section className="section relative overflow-hidden" id="contact">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          subtitle="Get In Touch"
          centered
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Let's Talk!</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className={`flex items-center gap-4 text-dark-400 ${social.color} transition-all duration-300 group`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-dark-800/50 border border-dark-700 flex items-center justify-center group-hover:border-primary-500/50 transition-all duration-300">
                      <social.icon className="text-xl" />
                    </div>
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <GlowCard className="card p-6">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse mt-1.5" />
                  <div>
                    <h4 className="font-semibold text-dark-100 mb-1">Currently Available</h4>
                    <p className="text-sm text-dark-400">
                      Open to freelance projects and internship opportunities
                    </p>
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.2}>
              <GlowCard className="card p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-dark-300 font-medium mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input pl-12"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-dark-300 font-medium mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input pl-12"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-dark-300 font-medium mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-4 top-4 text-dark-500" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="textarea pl-12"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <FiSend />
                        Send Message
                      </span>
                    )}
                  </motion.button>
                </form>
              </GlowCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
