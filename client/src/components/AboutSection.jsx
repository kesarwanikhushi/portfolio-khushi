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
          subtitle="// About Me"
          title="Crafting Digital Experiences"
          centered
        />

        <div className="max-w-4xl mx-auto mb-20">
          <ScrollReveal>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed mb-6 text-center">
              Hi, I'm <span className="gradient-text font-semibold">Khushi Kesarwani</span> — a Computer Science & Engineering student specializing in 
              DevOps at <span className="text-primary-400">Chandigarh University</span>. I'm passionate about building reliable, secure, and user-centric 
              digital products by combining the power of full-stack development, DevOps practices, and AI-driven solutions.
            </p>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed mb-6 text-center">
              I've worked on real-world projects such as <span className="text-primary-400">Vora</span>, a secure OAuth 2.0 authentication system, 
              <span className="text-secondary-400"> Krishi Mitra</span>, an AI agricultural assistant PWA, and a <span className="text-accent-400">DSA Tracker</span> productivity 
              tool. My experience spans front-end engineering, backend development with Node/Flask, database design, and hands-on use of tools like Docker, 
              Kubernetes, GitHub Actions, Jenkins, and Terraform.
            </p>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed mb-6 text-center">
              I also hold certifications in <span className="text-secondary-400">Microsoft Azure AI Fundamentals</span>, <span className="text-accent-400">DevOps</span>, 
              and <span className="text-primary-400">API Development with Postman</span>, and I've served as the Design Head of the Technophiles Society and a 
              Campus Ambassador at GirlScript Summer of Code.
            </p>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed text-center">
              I love designing clean user experiences, solving meaningful problems, and building tech that actually helps people. I'm always exploring new 
              technologies and working on projects that push my creativity and engineering skills forward.
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
