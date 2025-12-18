import { motion } from 'framer-motion';
import { FiCode, FiZap, FiHeart, FiTarget } from 'react-icons/fi';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeading from './ui/SectionHeading';
import GlowCard from './ui/GlowCard';

const AboutSection = () => {
  const highlights = [
    {
      icon: FiCode,
      title: 'Full-Stack Development',
      description: 'Building secure, scalable web applications with React, Node.js, and MongoDB',
      color: 'primary',
    },
    {
      icon: FiZap,
      title: 'DevOps & Cloud',
      description: 'Expertise in Docker, Kubernetes, CI/CD pipelines, and Azure cloud services',
      color: 'accent',
    },
    {
      icon: FiHeart,
      title: 'UI/UX Design',
      description: 'Designing intuitive interfaces and digital products with Figma and Tailwind',
      color: 'secondary',
    },
    {
      icon: FiTarget,
      title: 'API Development',
      description: 'Postman API Student Expert with strong REST API development skills',
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
          subtitle="About Me"
          centered
        />

        <div className="max-w-4xl mx-auto mb-20">
          <ScrollReveal>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed mb-6 text-center">
              Hi, I'm <span className="gradient-text font-semibold">Khushi Kesarwani</span> a passionate technology enthusiast and open-source learner who enjoys exploring ideas and turning them into practical, meaningful solutions. My journey in tech is driven by continuous learning, hands-on experience, and curiosity about how things work. I love experimenting with new tools, building projects from the ground up, and pushing myself to grow with every challenge.
            </p>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed mb-6 text-center">
              I actively engage with developer communities through open-source contributions, tech sessions, and collaborative projects. I believe technology creates the greatest impact when it empowers people, encourages collaboration, and fosters innovation. Working with curious, driven individuals motivates me, and I enjoy being part of environments where knowledge is shared and growth is encouraged.
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center">
              As I continue learning and contributing, I aim to build a career where development, innovation, and community intersect creating solutions that deliver real value while growing alongside inclusive, forward thinking communities.
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
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.description}</p>
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
