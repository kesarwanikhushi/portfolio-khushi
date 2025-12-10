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
              Hi, I'm <span className="gradient-text font-semibold">Khushi Kesarwani</span> a passionate technology enthusiast, open-source learner, and someone who truly enjoys creating meaningful work through curiosity and collaboration. I love exploring new tools, experimenting with ideas, and turning concepts into practical solutions that make a difference.
            </p>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed mb-6 text-center">
              My journey in tech has been shaped by continuous learning, hands-on experiences, and active participation in developer communities. Whether it's contributing to open-source, organizing or co-hosting tech sessions, or working on projects with real-world impact, I enjoy being part of spaces where knowledge is shared and people grow together. I strongly believe that technology becomes meaningful when it enables collaboration, empowerment, and innovation.
            </p>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed mb-6 text-center">
              I'm driven by the excitement of discovering new possibilities from understanding how things work to building something from the ground up. I enjoy working with people who share the same curiosity and energy, and I'm always open to opportunities that challenge me to think creatively and push my skills further.
            </p>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed mb-6 text-center">
              As I continue learning and contributing, my goal is to build a career where development, innovation, and community intersect. I aspire to contribute to projects that create real value, explore the ever-changing world of tech, and become a part of communities that encourage growth, inclusivity, and lifelong learning.
            </p>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed text-center">
              If my work or passions resonate with you, I'd love to connect and collaborate!
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
