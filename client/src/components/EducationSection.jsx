import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiUsers, FiTrendingUp } from 'react-icons/fi';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeading from './ui/SectionHeading';
import GlowCard from './ui/GlowCard';

const EducationSection = () => {
  const education = [
    {
      degree: 'B.E. Computer Science & Engineering',
      field: 'with Specialization in DevOps',
      institution: 'Chandigarh University',
      period: '2023 - 2027',
      description: 'CGPA: 7.41 | Focused on Full-Stack Development, DevOps practices, Cloud Computing, and UI/UX Design',
      status: 'current',
    },
    {
      degree: 'Senior Secondary',
      field: 'Science Stream',
      institution: 'Stella Maris Convent School',
      period: '2022',
      description: 'Percentage: 76.6% | Strong foundation in Mathematics and Computer Science',
      status: 'completed',
    },
  ];

  const achievements = [
    {
      icon: FiAward,
      title: 'Design Mania Runner-Up',
      description: 'Runner-up at Design Mania Tech-Era 2.0 (April 2025)',
    },
    {
      icon: FiTrendingUp,
      title: 'Hackathon Achievement',
      description: 'Selected in Top 25 Teams at Hack-o-Fiesta 6.0 (May 2025)',
    },
    {
      icon: FiUsers,
      title: 'Design Head',
      description: 'Design Head at Technophiles Society, AIT CSE (Jan 2025 - June 2025)',
    },
    {
      icon: FiBookOpen,
      title: 'Campus Ambassador',
      description: 'Campus Ambassador at GirlScript Summer of Code (June 2025 - December 2025)',
    },
  ];

  const certifications = [
    'Microsoft Certified Azure AI Fundamentals',
    'DevOps Certificate from Tutedude',
    'Postman API Fundamentals Student Expert',
  ];

  return (
    <section className="section bg-dark-950 relative overflow-hidden" id="education">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          subtitle="Education & Growth"
          centered
        />

        {/* Education timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          {education.map((edu, index) => (
            <ScrollReveal key={index}>
              <GlowCard className="card p-8 mb-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold gradient-text">{edu.degree}</h3>
                      {edu.status === 'current' && (
                        <span className="px-3 py-1 bg-primary-500/20 border border-primary-500/40 rounded-full text-xs text-primary-400 font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-xl text-dark-300 mb-2">{edu.field}</p>
                    <p className="text-dark-400 mb-3">{edu.institution}</p>
                    <p className="text-dark-500">{edu.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <div className="px-4 py-2 bg-dark-800/50 rounded-lg border border-dark-700">
                      <span className="text-primary-400 font-mono text-sm">{edu.period}</span>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="card-hover h-full text-center p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                  <achievement.icon className="text-2xl text-primary-400" />
                </div>
                <h4 className="font-semibold text-dark-100 mb-2">{achievement.title}</h4>
                <p className="text-sm text-dark-400 leading-relaxed">{achievement.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Certifications & Learning Paths
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 p-4 bg-dark-900/50 border border-dark-800 rounded-xl hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-primary-400" />
                  <span className="text-dark-200">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EducationSection;
