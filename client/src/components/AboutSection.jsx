import { motion } from 'framer-motion';
import { FiCode, FiZap, FiHeart, FiTarget } from 'react-icons/fi';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeading from './ui/SectionHeading';
import GlowCard from './ui/GlowCard';

const AboutSection = () => {
  const highlights = [
    {
      icon: FiCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following industry best practices',
      color: 'primary',
    },
    {
      icon: FiZap,
      title: 'Fast Performance',
      description: 'Building optimized applications for the best user experience',
      color: 'accent',
    },
    {
      icon: FiHeart,
      title: 'User-Focused',
      description: 'Creating intuitive interfaces with attention to every detail',
      color: 'secondary',
    },
    {
      icon: FiTarget,
      title: 'Problem Solver',
      description: 'Tackling complex challenges with innovative solutions',
      color: 'primary',
    },
  ];

  return (
    <section className="section bg-dark-950 relative overflow-hidden" id="about">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          subtitle="// About Me"
          title="Crafting Digital Experiences"
          centered
        />

        <div className="max-w-4xl mx-auto mb-20">
          <ScrollReveal>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed mb-6 text-center">
              I'm a <span className="gradient-text font-semibold">passionate student developer</span> currently 
              exploring the exciting world of web development and cloud technologies. With a strong foundation 
              in the <span className="text-primary-400">MERN stack</span>, I love building full-stack applications 
              that solve real-world problems.
            </p>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed text-center">
              Beyond coding, I'm deeply interested in <span className="text-secondary-400">Cloud Computing</span>, <span className="text-accent-400">DevOps</span>, 
              and creating beautiful UI/UX designs. I believe great software is a combination of robust functionality 
              and aesthetic design.
            </p>
          </ScrollReveal>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <GlowCard glowColor={item.color} className="card h-full text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center mb-4">
                    <item.icon className="text-3xl text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-50 mb-3">{item.title}</h3>
                  <p className="text-dark-400 leading-relaxed">{item.description}</p>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
